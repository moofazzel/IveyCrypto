import About from "@/components/modules/Home/About";
import ContactSection from "@/components/modules/Home/ContactSection/ContactSection";
import CTASection from "@/components/modules/Home/CTASection/CTASection";
import FAQSection from "@/components/modules/Home/FAQSection/FAQSection";
import Hero from "@/components/modules/Home/Hero";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import MasonryGallery from "@/components/modules/Home/MasonryGallery";
import MovingText from "@/components/modules/Home/MovingText";
import ServicesSection from "@/components/modules/Home/ServicesSection";
import SolutionsSection from "@/components/modules/Home/Solutions/SolutionsSection";
import TestimonialSection from "@/components/modules/Home/Testimonials/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MovingText />
      <About />
      <ServicesSection />
      <SolutionsSection />
      <CTASection />
      <TestimonialSection />

      <MasonryGallery />
      <HowItWorks />
      <CTASection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
