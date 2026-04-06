import AboutSection from "@/components/about-section";
import ClientsSection from "@/components/clients-section";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import MissionSection from "@/components/mission-section";
import ProjectsSection from "@/components/projects-section";
import ServicesSection from "@/components/services-section";
import MontagemSection from "@/components/montagem-section";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <MissionSection/>
      <ServicesSection/>
      <MontagemSection/>
      <ProjectsSection/>
      <ClientsSection/>
      <Footer/>
    </div>
  );
}
