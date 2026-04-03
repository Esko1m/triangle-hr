import SiteHeader from '@/components/SiteHeader';
import ContactSection from '@/components/ContactSection';
import SiteFooter from '@/components/SiteFooter';

const Contact = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SiteHeader />
    <main className="flex-grow pt-20">
      <ContactSection />
    </main>
    <SiteFooter />
  </div>
);

export default Contact;
