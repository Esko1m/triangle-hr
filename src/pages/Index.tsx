import SiteHeader from '@/components/SiteHeader';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SiteFooter from '@/components/SiteFooter';

const Index = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <HeroSection />
    <TestimonialsSection />
    <SiteFooter />
  </div>
);

export default Index;
