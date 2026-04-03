"use client"

import { motion } from "framer-motion"

const components = [
  {
    id: "01",
    name: "Vidrio Templado",
    desc: "Capa exterior anti-reflectante que maximiza la captación solar y resiste granizo, lluvia y UV.",
    color: "border-[#E5E7EB] bg-white",
  },
  {
    id: "02",
    name: "Células de Silicio PV",
    desc: "El corazón del panel. Las células fotovoltaicas de silicio monocristalino convierten la luz en electricidad DC con eficiencia de hasta 22%.",
    color: "border-[#E5E7EB] bg-white",
  },
  {
    id: "03",
    name: "Inversor",
    desc: "Transforma la corriente continua (DC) en alterna (AC) lista para todos los electrodomésticos de tu hogar.",
    color: "border-[#E5E7EB] bg-white",
  },
  {
    id: "04",
    name: "Batería de Litio",
    desc: "Almacena el excedente de energía solar para usarlo de noche o en días nublados. Autonomía total de tu hogar.",
    color: "border-[#E5E7EB] bg-white",
  },
]

const steps = [
  {
    n: "01",
    icon: (
      <svg className="w-8 h-8 text-[#32CD32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    title: "Solar Absorption",
    desc: "Los paneles capturan la radiación solar mediante el efecto fotovoltaico. Las células de silicio liberan electrones al recibir fotones de luz.",
  },
  {
    n: "02",
    icon: (
      <svg className="w-8 h-8 text-[#32CD32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "DC to AC Conversion",
    desc: "El inversor convierte la electricidad DC generada por los paneles en corriente alterna AC (220V), compatible con todos tus equipos.",
  },
  {
    n: "03",
    icon: (
      <svg className="w-8 h-8 text-[#32CD32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Home Powering",
    desc: "La energía AC fluye directamente a tu tablero eléctrico. La batería almacena el excedente para la noche, manteniendo tu hogar siempre encendido.",
  },
]

export default function EducationalSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section id="educacion" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-[#32CD32]" />
            <span className="text-[#32CD32] text-xs font-bold tracking-widest uppercase">
              Valor y Transparencia
            </span>
            <div className="h-px w-12 bg-[#32CD32]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] text-balance">
            Entiende tu sistema:{" "}
            <span className="text-[#32CD32]">Anatomía y Funcionamiento</span>
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
            En Iliaki creemos que un cliente informado toma mejores decisiones. Por eso te
            explicamos exactamente qué estás comprando y cómo funciona cada componente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card A: Anatomía del panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#32CD32]/10 border border-[#32CD32]/30 flex items-center justify-center">
                <span className="text-[#32CD32] font-black text-sm">A</span>
              </div>
              <div>
                <p className="text-[#6B7280] text-xs font-semibold tracking-widest uppercase">Componentes</p>
                <h3 className="text-[#0A0A0A] font-bold text-xl">
                  ¿Por qué partes está construido un panel?
                </h3>
              </div>
            </div>

            {/* Panel diagram */}
            <div className="relative bg-[#F7F7F7] rounded-xl p-6 mb-6 overflow-hidden">
              <div className="mx-auto w-full max-w-sm">
                <div className="space-y-1.5">
                  {[
                    { label: "01", name: "Vidrio Templado", color: "bg-sky-100 border-sky-300", h: "h-5" },
                    { label: "02", name: "Células de Silicio PV", color: "bg-slate-700 border-slate-600 text-white", h: "h-14" },
                    { label: "03", name: "Backsheet Protector", color: "bg-gray-200 border-gray-300", h: "h-4" },
                    { label: "04", name: "Marco de Aluminio", color: "bg-zinc-400 border-zinc-500 text-white", h: "h-3" },
                  ].map((layer) => (
                    <div
                      key={layer.label}
                      className={`${layer.h} ${layer.color} border rounded-md flex items-center px-3 text-xs font-semibold`}
                    >
                      <span className={layer.color.includes("text-white") ? "text-white/60 mr-2" : "text-[#6B7280] mr-2"}>
                        {layer.label}
                      </span>
                      <span className={layer.color.includes("text-white") ? "text-white" : "text-[#0A0A0A]"}>
                        {layer.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Component list */}
            <div className="grid grid-cols-2 gap-3">
              {components.map((c) => (
                <div key={c.id} className={`p-4 rounded-xl border ${c.color} group hover:shadow-sm transition-all duration-200`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[#32CD32] text-xs font-black">{c.id}</span>
                    <span className="text-[#0A0A0A] font-bold text-sm">{c.name}</span>
                  </div>
                  <p className="text-[#6B7280] text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card B: Cómo funciona */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#32CD32]/10 border border-[#32CD32]/30 flex items-center justify-center">
                <span className="text-[#32CD32] font-black text-sm">B</span>
              </div>
              <div>
                <p className="text-[#6B7280] text-xs font-semibold tracking-widest uppercase">Proceso</p>
                <h3 className="text-[#0A0A0A] font-bold text-xl">¿Cómo funciona?</h3>
              </div>
            </div>

            {/* Steps */}
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#32CD32] via-[#32CD32]/40 to-transparent" />

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col gap-0"
              >
                {steps.map((step, i) => (
                  <motion.div variants={itemVariants} key={i} className="flex gap-5 pb-8 last:pb-0 group">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#0A0A0A] border-2 border-[#32CD32]/50 flex items-center justify-center shrink-0 group-hover:border-[#32CD32] group-hover:shadow-[0_0_16px_rgba(50,205,50,0.3)] transition-all duration-300">
                      {step.icon}
                    </div>
                    <div className="pt-2 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#32CD32] text-xs font-black">{step.n}</span>
                        <h4 className="text-[#0A0A0A] font-bold text-lg">{step.title}</h4>
                      </div>
                      <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Key insight box */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-6 p-5 bg-[#0A0A0A] rounded-xl border border-[#1e1e1e]"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#32CD32]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-[#32CD32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Sabías que...</p>
                  <p className="text-[#9CA3AF] text-sm mt-1 leading-relaxed">
                    Un sistema completo de 5kW en Argentina genera aproximadamente{" "}
                    <span className="text-[#32CD32] font-bold">650 kWh/mes</span>, suficiente
                    para cubrir el 100% del consumo de una familia promedio.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
