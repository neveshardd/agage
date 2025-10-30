import AboutSection from "@/components/about-section";
import ClientsSection from "@/components/clients-section";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import MissionSection from "@/components/mission-section";
import ProjectsSection from "@/components/projects-section";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <HeroSection/>
      <ClientsSection/>
      <AboutSection/>
      <MissionSection/>
      <ServicesSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
