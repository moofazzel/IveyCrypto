
import About from "@/components/modules/Home/About";
import Hero from "@/components/modules/Home/Hero";
import MarqueeTape from "@/components/modules/Home/MarqueeTape";
import ServicesSection from "@/components/modules/Home/ServicesSection";
    import ContactSection from "@/components/modules/Home/ContactSection/ContactSection";
import CTASection from "@/components/modules/Home/CTASection/CTASection";
import FAQSection from "@/components/modules/Home/FAQSection/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeTape />
      <About />
      <ServicesSection />
       <CTASection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
