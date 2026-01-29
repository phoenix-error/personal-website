import { Logo } from '@/components/Logo';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SocialSection } from '@/components/SocialSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Logo />
      
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <SocialSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
