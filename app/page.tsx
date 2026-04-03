import { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import HeroReveal from "@/components/hero-reveal"
import IntroductionSection from "@/components/introduction-section"
import StatsBar from "@/components/stats-bar"
import EducationalSection from "@/components/educational-section"
import FaqSection from "@/components/faq-section"
import BenefitsSection from "@/components/benefits-section"
import ServicesSection from "@/components/services-section"
import PortfolioSection from "@/components/portfolio-section"
import TrustSection from "@/components/trust-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export const metadata: Metadata = {
  title: "Iliaki | Instalación Paneles Solares Autoconsumo",
  description: "Iliaki - Soluciones Fotovoltaicas Premium. Energía autossustentable para tu hogar con instalación certificada y beneficios de energía solar reales.",
}

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      {/* Dynamic Victron Energy Background */}
      <div 
        className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat lg:bg-fixed"
        style={{ backgroundImage: `url('/images/iliaki/backgrounds/technical-excellence-victron.webp')` }}
      />
      
      {/* Technical Stoicism Subdued Overlay */}
      <div className="fixed inset-0 z-[-1] bg-[#0A0A0A]/90 backdrop-blur-[2px]" />

      <Header />
      <HeroReveal>
        <HeroSection />
      </HeroReveal>
      <StatsBar />
      <IntroductionSection />
      <EducationalSection />
      <FaqSection />
      <BenefitsSection />
      <ServicesSection />
      <PortfolioSection />
      <TrustSection />
      <CtaSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
