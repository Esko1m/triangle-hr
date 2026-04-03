import SiteHeader from '@/components/SiteHeader';
import ServicesSection from '@/components/ServicesSection';
import SiteFooter from '@/components/SiteFooter';

const Services = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SiteHeader />
    <main className="flex-grow pt-20">
      <ServicesSection />
    </main>
    <SiteFooter />
  </div>
);

export default Services;
