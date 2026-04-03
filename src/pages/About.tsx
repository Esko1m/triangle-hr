import SiteHeader from '@/components/SiteHeader';
import AboutSection from '@/components/AboutSection';
import SiteFooter from '@/components/SiteFooter';

const About = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SiteHeader />
    <main className="flex-grow pt-20">
      <AboutSection />
    </main>
    <SiteFooter />
  </div>
);

export default About;
