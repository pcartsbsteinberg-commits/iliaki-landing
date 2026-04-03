"use client"

import CountUp from "./count-up"

const stats = [
  { value: 70, suffix: "%", label: "Ahorro en Factura", sub: "promedio mensual" },
  { value: 100, suffix: "%", label: "Energía Limpia", sub: "sin emisiones de CO₂" },
  { value: 5000, suffix: "+", label: "Instalaciones Realizadas", sub: "en toda Argentina" },
  { value: 32, suffix: "%", label: "Valor Propiedad", sub: "aumento promedio" },
  { value: 5.5, suffix: "M+", label: "$USD Ahorrados", sub: "por nuestros clientes", decimals: 1 },
]

export default function StatsBar() {
  return (
    <section className="bg-[#0A0A0A] border-y border-[#1e1e1e]">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#32CD32] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center px-4 lg:px-8 py-6 lg:py-0 ${
                i < stats.length - 1
                  ? "border-r border-[#1e1e1e] lg:border-r"
                  : ""
              } ${i >= 2 ? "border-t border-[#1e1e1e] lg:border-t-0" : ""} ${
                i === 2 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="text-[#32CD32] font-black text-4xl lg:text-5xl tracking-tight lime-text-glow">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                  duration={2.5}
                />
              </span>
              <span className="text-white font-bold text-sm lg:text-base mt-2 text-balance">
                {stat.label}
              </span>
              <span className="text-[#6B7280] text-xs mt-1">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#32CD32] to-transparent" />
    </section>
  )
}