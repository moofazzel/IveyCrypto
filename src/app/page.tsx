import CTASection from "@/components/modules/Home/CTASection/CTASection";
import Hero from "@/components/modules/Home/Hero";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CTASection />
    </div>
  );
}
