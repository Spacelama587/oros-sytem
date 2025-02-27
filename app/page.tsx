import FeaturesGrid from '@/components/FeaturesGrid';
import ModernHero from '@/components/ModernHero';
import Navbar from '@/components/Navbar';
import OrosiuriSystemSection from '@/components/OrosiuriSystemSection';
import VideoSection from '@/components/VideoSection';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-zinc-950">
     
      <Navbar />
      <ModernHero />
      <VideoSection />
      <OrosiuriSystemSection />
   
      <FeaturesGrid />
    </main>
  );
}