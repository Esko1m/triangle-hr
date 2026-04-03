import SiteHeader from '@/components/SiteHeader';
import SocialImpactSection from '@/components/SocialImpactSection';
import SiteFooter from '@/components/SiteFooter';

const Impact = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SiteHeader />
    <main className="flex-grow pt-20">
      <SocialImpactSection />
    </main>
    <SiteFooter />
  </div>
);

export default Impact;
