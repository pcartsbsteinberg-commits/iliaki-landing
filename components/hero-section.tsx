"use client"

import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import CountUp from "./count-up"

const bullets = [
  "Instalación Certificada por profesionales licenciados",
  "Ahorro del 70% en tu factura eléctrica mensual",
  "Mantenimiento 24/7 con garantía de rendimiento",
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero-iliaki.mp4" type="video/mp4" />
      </video>

      {/* Professional Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-[1]" />

      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] z-[2]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(50,205,50,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(50,205,50,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow top-left */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-[#32CD32]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#32CD32]/10 border border-[#32CD32]/30 rounded-full px-4 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#32CD32] animate-pulse" />
              <span className="text-[#32CD32] text-xs font-semibold tracking-widest uppercase">
                Instalaciones Premium en Argentina
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.1] tracking-tight text-balance">
                Iliaki - Soluciones Fotovoltaicas <span className="text-[#32CD32] lime-text-glow">Premium</span>.
                <br className="hidden lg:block"/>
                Energía Autossustentable para Empresas y Hogares.
              </h1>
              <p className="mt-4 text-[#9CA3AF] text-lg leading-relaxed font-light max-w-xl">
                Iliaki transforma tu empresa o residencia en una fuente de energía autossustentable.
                Instalaciones fotovoltaicas de alta gama que garantizan independencia energética y ahorro real.
              </p>
            </div>

            {/* Bullet Points */}
            <ul className="flex flex-col gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#32CD32] mt-0.5 shrink-0" />
                  <span className="text-[#D1D5DB] text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="https://wa.me/1234567890?text=Hola%20Iliaki%2C%20me%20interesa%20solicitar%20un%20presupuesto%20para%20una%20instalaci%C3%B3n%20fotovoltaica."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[#32CD32] hover:bg-[#28b028] text-[#0A0A0A] font-bold text-base px-7 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(50,205,50,0.5)] active:scale-95"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Quiero mi presupuesto gratis
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#educacion"
                className="flex items-center gap-2 text-[#9CA3AF] hover:text-white text-sm font-medium transition-colors duration-200 group"
              >
                Ver cómo funciona
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0A0A0A] bg-gradient-to-br from-[#32CD32]/30 to-[#32CD32]/10 overflow-hidden"
                  >
                    <Image
                      src={`/images/avatar-${i}.jpg`}
                      alt={`Cliente ${i}`}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">5,000+ Instalaciones Realizadas</p>
                <p className="text-[#6B7280] text-xs">Transformando la matriz energética nacional</p>
              </div>
              <div className="flex items-center gap-1 ml-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#32CD32]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-[#9CA3AF] text-xs ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual - Removed old references to 404 images */}
          <div className="relative hidden lg:block">
            {/* System Performance Card */}
            <div className="bg-[#0A0A0A]/90 backdrop-blur-md border border-[#32CD32]/30 rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#32CD32] animate-ping" />
                  <span className="text-[#32CD32] text-[10px] font-bold tracking-widest uppercase">Live System</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-[#9CA3AF] text-xs uppercase tracking-widest font-bold mb-1">Rendimiento Promedio</p>
                  <p className="text-5xl font-black text-white tracking-tighter">
                    <CountUp target={98.4} suffix="%" decimals={1} duration={2.5} />
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-[10px] text-[#9CA3AF] uppercase font-bold">Ahorro Anual</p>
                    <p className="text-lg font-bold text-white">
                      <CountUp target={70} suffix="%+" duration={2} />
                    </p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-[10px] text-[#9CA3AF] uppercase font-bold">ROI Estimado</p>
                    <p className="text-lg font-bold text-white">
                      <CountUp target={3.5} suffix=" Años" decimals={1} duration={2} />
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                   <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                     <div className="h-full bg-[#32CD32] w-[98%]" />
                   </div>
                   <p className="text-[10px] text-[#6B7280] mt-2 italic">Monitoreo técnico en tiempo real - Technical Stoicism</p>
                </div>
              </div>

              {/* Decorative accent glow */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#32CD32]/20 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
