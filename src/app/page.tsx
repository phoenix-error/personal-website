import { Logo } from '@/components/Logo';
import { HeroSection } from '@/components/HeroSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { SocialSection } from '@/components/SocialSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Logo />

      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <SocialSection />
      </main>

      <Footer />
    </div>
  );
}
