import SiteHeader from '@/components/SiteHeader';
import TrainingSection from '@/components/TrainingSection';
import SiteFooter from '@/components/SiteFooter';

const Training = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <SiteHeader />
    <main className="flex-grow pt-20">
      <TrainingSection />
    </main>
    <SiteFooter />
  </div>
);

export default Training;
