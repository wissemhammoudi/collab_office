// app/page.tsx
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { BenefitsSection } from "@/components/benefits-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { TestimonialSection } from "@/components/testimoniol";
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BenefitsSection /> 
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}