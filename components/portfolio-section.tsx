"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Activity, ArrowRight } from "lucide-react"

const categories = ["Todo", "Fotovoltaico", "Bombeo Solar", "Termotanques", "Ingeniería"]

const projects = [
  // Termotanques
  { image: "/images/projects/agua.webp", title: "Termotanque Solar 300L", category: "Termotanques", location: "Villa Allende, CBA", specs: "Equipo Presurizado" },
  { image: "/images/projects/agua2.webp", title: "Sistema Térmico Residencial", category: "Termotanques", location: "Mendoza", specs: "200 Litros" },
  { image: "/images/projects/agua1234.webp", title: "Instalación de Agua Caliente Solar", category: "Termotanques", location: "Salta", specs: "Uso Familiar" },
  
  // Bombeo
  { image: "/images/projects/bomba.webp", title: "Bombeo Solar 2HP", category: "Bombeo Solar", location: "Río Cuarto, CBA", specs: "Caudal 15m3/h" },
  { image: "/images/projects/bomba2.webp", title: "Sistema de Riego Autónomo", category: "Bombeo Solar", location: "Santa Fe", specs: "Panel 450W" },
  { image: "/images/projects/proyectobomba.webp", title: "Extracción Campo Norte", category: "Bombeo Solar", location: "Santiago del Estero", specs: "Pozo Profundo" },
  { image: "/images/projects/Proyectobomba5.webp", title: "Bombeo de Alta Presión", category: "Bombeo Solar", location: "Chaco", specs: "Sistema Monofásico" },
  
  // Ingeniería / Técnico
  { image: "/images/projects/controlador solar.webp", title: "Centro de Control MPPT", category: "Ingeniería", location: "CABA", specs: "Tecnología Victron" },
  { image: "/images/projects/electrica.webp", title: "Tablero de Protecciones AC/DC", category: "Ingeniería", location: "Pilar, GBA", specs: "Norma IEC" },
  { image: "/images/projects/tablero.webp", title: "Configuración Multibloque", category: "Ingeniería", location: "Escobar, GBA", specs: "Inversores en Paralelo" },
  { image: "/images/projects/tableropro.mp4", title: "Monitoreo Técnico Live System", category: "Ingeniería", location: "Remoto", specs: "SmartSolar Control", isVideo: true },
  
  // Fotovoltaico
  { image: "/images/projects/monofinish.webp", title: "Sistema Híbrido Monofásico", category: "Fotovoltaico", location: "San Isidro, GBA", specs: "Inversor 5kW" },
  { image: "/images/projects/panel1.webp", title: "Campo de Paneles Tier-1", category: "Fotovoltaico", location: "Luján, GBA", specs: "Estructura Alum." },
  { image: "/images/projects/panelfinish4.webp", title: "Sistema Residencial Premium", category: "Fotovoltaico", location: "Mar del Plata", specs: "Batería Litio" },
  { image: "/images/projects/trabajando.mp4", title: "Montaje de Estructuras Certificado", category: "Fotovoltaico", location: "Obras Varias", specs: "Equipo Iliaki", isVideo: true },
  
  // Residencial & Rural
  { image: "/images/projects/proyecto-casa.webp", title: "Autoconsumo en Montaña", category: "Fotovoltaico", location: "Neuquén", specs: "Independencia 80%" },
  { image: "/images/projects/proyectocampo1.webp", title: "Electrificación Rural", category: "Fotovoltaico", location: "San Luis", specs: "Off-Grid System" },
  { image: "/images/projects/Proyectoempresa.webp", title: "Solución Solar Industrial", category: "Fotovoltaico", location: "Córdoba", specs: "Potencia 50kWp" },
]

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("Todo")

  const filteredProjects = activeTab === "Todo" 
    ? projects 
    : projects.filter(p => p.category === activeTab)

  return (
    <section id="portfolio" className="bg-[#F9FAFB] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 mb-16">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="h-1 w-10 bg-[#32CD32] rounded-full" />
              <span className="text-[#32CD32] text-xs font-bold tracking-widest uppercase">
                Evidencia de Ingeniería
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-[#0A0A0A] tracking-tighter">
              Trabajos <span className="text-[#32CD32]">Terminados</span>
            </h2>
            <p className="mt-4 text-[#6B7280] max-w-xl text-lg leading-relaxed">
              Explora nuestra galería de proyectos reales. Desde termotanques residenciales hasta 
              complejos sistemas de bombeo e ingeniería fotovoltaica de alta potencia.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 bg-white p-1.5 rounded-full border border-[#E5E7EB] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-[#0A0A0A] text-white shadow-lg"
                    : "text-[#6B7280] hover:text-[#0A0A0A] hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.image}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-200 border border-[#E5E7EB]"
              >
                {p.isVideo ? (
                  <video
                    src={p.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <Image
                    src={p.image}
                    alt={`${p.title} - Iliaki Projects`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                )}
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-[#0A0A0A]/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">
                    {p.category}
                  </span>
                  {p.isVideo && (
                    <span className="bg-[#32CD32] text-[#0A0A0A] text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase animate-pulse">
                      <Activity className="w-3 h-3" /> Live
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#32CD32] text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                    {p.location}
                  </p>
                  <h3 className="text-white font-bold text-xl leading-tight mb-2">
                    {p.title}
                  </h3>
                  <div className="h-px w-0 group-hover:w-full bg-[#32CD32]/50 transition-all duration-500 mb-2" />
                  <p className="text-[#9CA3AF] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 italic">
                    {p.specs}
                  </p>
                </div>

                {/* Video Play Icon Indicator */}
                {p.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-[#32CD32]/20 backdrop-blur-md border border-[#32CD32]/40 flex items-center justify-center">
                      <Play className="w-6 h-6 text-[#32CD32] fill-[#32CD32]" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Premium CTA Block */}
        <div className="mt-20 p-12 rounded-[2rem] bg-[#0A0A0A] border border-[#32CD32]/20 relative overflow-hidden group text-center">
          <div className="absolute inset-0 bg-[#32CD32]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <h3 className="text-white text-2xl font-black mb-4 relative z-10">¿Listo para ser nuestro próximo caso de éxito?</h3>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto mb-8 relative z-10">
            Diseñamos soluciones personalizadas que garantizan ahorro real y soberanía energética. 
            Únete a las +5,000 instalaciones que ya están transformando Argentina.
          </p>
          <a
            href="https://wa.me/1234567890?text=Hola%20Iliaki%2C%20vi%20su%20portfolio%20y%20quiero%20solicitar%20presupuesto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#32CD32] hover:bg-[#28a428] text-[#0A0A0A] font-black px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 relative z-10 shadow-[0_0_20px_rgba(50,205,50,0.3)]"
          >
            SOLICITAR AUDITORÍA TÉCNICA
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
