import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, LogOut, ChevronRight, Home, Info, Briefcase, GraduationCap, Heart, Mail, CheckCircle2, AlertCircle, Loader2, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Import all content
import homeData from '../content/home.json';
import aboutData from '../content/about.json';
import servicesData from '../content/services.json';
import trainingData from '../content/training.json';
import impactData from '../content/impact.json';
import contactData from '../content/contact.json';

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [isSaving, setIsSaving] = useState(false);
  const [content, setContent] = useState<any>({
    home: homeData,
    about: aboutData,
    services: servicesData,
    training: trainingData,
    impact: impactData,
    contact: contactData,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Triangle2026') {
      setIsLoggedIn(true);
      sessionStorage.setItem('admin_auth', 'true');
    } else {
      toast.error('Incorrect Password');
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    const pathMap: any = {
      home: 'src/content/home.json',
      about: 'src/content/about.json',
      services: 'src/content/services.json',
      training: 'src/content/training.json',
      impact: 'src/content/impact.json',
      contact: 'src/content/contact.json',
    };

    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path: pathMap[activeTab],
          content: content[activeTab],
          password: password || 'Triangle2026',
        }),
      });

      if (response.ok) {
        toast.success('Changes saved successfully! The site will update in about a minute.');
      } else {
        const err = await response.json();
        toast.error(`Error: ${err.error}`);
      }
    } catch (error) {
      toast.error('Failed to connect to the server');
    } finally {
      setIsSaving(false);
    }
  };

  const updateNested = (path: string, value: any) => {
    const newContent = { ...content };
    const keys = path.split('.');
    let current = newContent[activeTab];
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setContent(newContent);
  };

  const renderInput = (label: string, path: string, type: 'text' | 'textarea' = 'text') => (
    <div className="space-y-2">
      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">{label}</label>
      {type === 'text' ? (
        <input 
          value={path.split('.').reduce((obj, key) => obj[key], content[activeTab])}
          onChange={(e) => updateNested(path, e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:border-primary outline-none"
        />
      ) : (
        <textarea 
          value={path.split('.').reduce((obj, key) => obj[key], content[activeTab])}
          rows={4}
          onChange={(e) => updateNested(path, e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:border-primary outline-none"
        />
      )}
    </div>
  );

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#01416d] flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl p-10 shadow-2xl max-w-md w-full text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
            <Briefcase size={40} />
          </div>
          <h1 className="text-3xl font-display font-bold text-slate-900 mb-2">Admin Portal</h1>
          <p className="text-slate-500 mb-8">Enter your credentials to manage Triangle HR content.</p>
          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Access Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="••••••••" />
            </div>
            <Button className="w-full h-14 rounded-xl text-lg font-bold" type="submit">Sign In</Button>
          </form>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: 'home', label: 'Homepage', icon: Home },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'training', label: 'Training', icon: GraduationCap },
    { id: 'impact', label: 'Social Impact', icon: Heart },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <div className="w-80 bg-white border-r border-slate-200 flex flex-col fixed h-full z-20">
        <div className="p-8 border-b border-slate-100 flex items-center gap-4">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white"><Briefcase size={20} /></div>
          <h2 className="text-xl font-display font-bold text-slate-900">Editor</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto mt-4">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:bg-slate-50'}`}>
              <tab.icon size={18} /> {tab.label}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-slate-100">
          <button onClick={() => { sessionStorage.removeItem('admin_auth'); setIsLoggedIn(false); }} className="w-full flex items-center justify-center gap-3 py-3 text-slate-400 hover:text-rose-500 transition-colors text-xs font-bold uppercase tracking-widest"><LogOut size={14} /> Logout</button>
        </div>
      </div>

      <main className="flex-1 ml-80 p-12 overflow-y-auto min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl font-display font-bold text-slate-900 mb-2">{tabs.find(t => t.id === activeTab)?.label}</h1>
              <p className="text-slate-500 font-medium">Full content control for this section.</p>
            </div>
            <Button onClick={handleSave} disabled={isSaving} className="h-14 px-10 rounded-2xl gap-3 shadow-xl">
              {isSaving ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-12 pb-24">
              
              {/* --- HOMEPAGE --- */}
              {activeTab === 'home' && (
                <div className="space-y-8">
                  <Section title="Hero Section" index="1">
                    {renderInput("Main Title", "hero.title")}
                    {renderInput("Description", "hero.description", "textarea")}
                    {renderInput("Button Text", "hero.buttonText")}
                    {renderInput("Ticker Text", "hero.tickerText")}
                  </Section>
                  <Section title="Testimonials" index="2">
                    {renderInput("Title", "testimonials.title")}
                    {renderInput("Subtitle", "testimonials.subtitle", "textarea")}
                  </Section>
                </div>
              )}

              {/* --- ABOUT US --- */}
              {activeTab === 'about' && (
                <div className="space-y-8">
                  <Section title="Introduction" index="1">
                    {renderInput("Title", "about.title")}
                    {renderInput("Main Text", "about.mainText", "textarea")}
                    {renderInput("Sub Text", "about.subText", "textarea")}
                  </Section>
                  <Section title="Stats" index="2">
                    {renderInput("Value (e.g. 10+)", "about.stats.value")}
                    {renderInput("Title", "about.stats.title")}
                    {renderInput("Subtitle", "about.stats.subtitle")}
                  </Section>
                  <Section title="Strategic Framework" index="3">
                    {renderInput("Label", "about.framework.label")}
                    {renderInput("Title", "about.framework.title")}
                    {renderInput("Description", "about.framework.description", "textarea")}
                  </Section>
                </div>
              )}

              {/* --- SERVICES --- */}
              {activeTab === 'services' && (
                <div className="space-y-8">
                  <Section title="Header" index="1">
                    {renderInput("Title", "services.title")}
                  </Section>
                  {content.services.services.items.map((item: any, i: number) => (
                    <Section key={i} title={`Service Item ${i + 1}`} index={(i + 2).toString()}>
                      {renderInput("Title", `services.items.${i}.title`)}
                      {renderInput("Description", `services.items.${i}.description`, "textarea")}
                    </Section>
                  ))}
                </div>
              )}

              {/* --- TRAINING --- */}
              {activeTab === 'training' && (
                <div className="space-y-8">
                  <Section title="Header" index="1">
                    {renderInput("Title", "training.title")}
                    {renderInput("Description", "training.description", "textarea")}
                  </Section>
                  <Section title="Training Process" index="2">
                    {renderInput("Title", "training.process.title")}
                    {renderInput("Description", "training.process.description", "textarea")}
                  </Section>
                  <Section title="Why Choose Us" index="3">
                    {renderInput("Title", "training.whyChooseUs.title")}
                    {renderInput("Description", "training.whyChooseUs.description", "textarea")}
                  </Section>
                </div>
              )}

              {/* --- SOCIAL IMPACT --- */}
              {activeTab === 'impact' && (
                <div className="space-y-8">
                  <Section title="Header" index="1">
                    {renderInput("Title", "impact.title")}
                    {renderInput("Description", "impact.description", "textarea")}
                    {renderInput("Secondary Text", "impact.subDescription", "textarea")}
                  </Section>
                  <Section title="Focus" index="2">
                    {renderInput("Focus Title", "impact.focusTitle")}
                  </Section>
                </div>
              )}

              {/* --- CONTACT --- */}
              {activeTab === 'contact' && (
                <div className="space-y-8">
                  <Section title="Header" index="1">
                    {renderInput("Title", "contact.title")}
                    {renderInput("Description", "contact.description", "textarea")}
                  </Section>
                  <Section title="Info" index="2">
                    {renderInput("Email Address", "contact.email")}
                    {renderInput("Location", "contact.location")}
                    {renderInput("Form Title", "contact.formTitle")}
                  </Section>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

const Section = ({ title, index, children }: { title: string, index: string, children: React.ReactNode }) => (
  <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
      <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-xs">{index}</span>
      {title}
    </h3>
    <div className="space-y-6">{children}</div>
  </div>
);

export default AdminDashboard;
