import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import MiniProjects from "@/components/sections/MiniProjects";
import Publications from "@/components/sections/Publications";
import Experience from "@/components/sections/Experience";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <MiniProjects />
      <Publications />
      <Experience />
      <ContactSection />
    </>
  );
}
