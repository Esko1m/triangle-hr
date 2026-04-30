export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { path, content, password } = req.body;
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Triangle2026'; // You can change this in Vercel
  const REPO_OWNER = 'Esko1m';
  const REPO_NAME = 'triangle-hr';

  // 1. Simple Security Check
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).send('Unauthorized');
  }

  try {
    // 2. Get the current file SHA (GitHub needs this to update)
    const getFileUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${path}`;
    const getResponse = await fetch(getFileUrl, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    const fileData = await getResponse.json();
    const sha = fileData.sha;

    // 3. Update the file on GitHub
    const updateResponse = await fetch(getFileUrl, {
      method: 'PUT',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `cms: updated ${path}`,
        content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64'),
        sha: sha,
        branch: 'main',
      }),
    });

    const result = await updateResponse.json();

    if (updateResponse.ok) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ error: result.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
