import CTASection from "@/components/modules/Home/CTASection/CTASection";
import FAQSection from "@/components/modules/Home/CTASection/FAQSection/FAQSection";
import Hero from "@/components/modules/Home/Hero";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CTASection />
      <FAQSection />
    </div>
  );
}
