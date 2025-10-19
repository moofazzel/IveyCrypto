import About from "@/components/modules/Home/About";
import Hero from "@/components/modules/Home/Hero";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import MarqueeTape from "@/components/modules/Home/MarqueeTape";
import ServicesSection from "@/components/modules/Home/ServicesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeTape />
      <About />
      <ServicesSection />
      <HowItWorks />
    </>
  );
}
