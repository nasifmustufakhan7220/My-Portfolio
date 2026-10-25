import { Navbar } from "@/components/navbar";
import { HeroProfile } from "@/components/hero-profile";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { SidebarProfile } from "@/components/sidebar-profile";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky LinkedIn Navbar */}
      <Navbar />

      {/* Main Single Page Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-3 sm:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left Column (Sticky Sidebar on Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-20">
            <SidebarProfile />
          </div>

          {/* Right / Main Content Feed Column */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            {/* Home Anchor & Profile Card */}
            <div id="home" className="scroll-mt-20">
              <HeroProfile />
            </div>

            {/* About Section */}
            <AboutSection />

            {/* Skills Section */}
            <SkillsSection />

            {/* Projects Section */}
            <ProjectsSection />

            {/* Education Section */}
            <EducationSection />

            {/* Contact Section */}
            <ContactSection />
          </div>
        </div>
      </main>

      {/* LinkedIn-styled Minimal Footer */}
      <footer className="w-full py-8 text-center text-xs text-foreground/70 border-t border-border/60 bg-card/60 backdrop-blur-xs mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Nasif. Crafted with Next.js & shadcn/ui.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#home" className="hover:underline">Back to top</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
