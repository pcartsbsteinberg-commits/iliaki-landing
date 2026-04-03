import Image from "next/image"

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#32CD32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    title: "Producción Continua",
    desc: "Tus paneles capturan energía solar durante todo el día, incluso con cielo nublado, asegurando un suministro constante.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#32CD32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: "Independencia Energética",
    desc: "Con batería de almacenamiento, tu hogar funciona de noche y durante cortes de luz. Cero dependencia de la red.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#32CD32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Instalación Certificada",
    desc: "Ingenieros certificados con 10+ años de experiencia. Instalaciones que cumplen todas las normativas de seguridad nacionales.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#32CD32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    title: "ROI Demostrable",
    desc: "Recupera tu inversión en 4-6 años. Cada mes ahorras hasta el 70% en tu factura con energía que produces tú mismo.",
  },
]

export default function IntroductionSection() {
  return (
    <section id="nosotros" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-center mb-16">
          <div className="flex-1 max-w-2xl">
            {/* Accent line */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-1 w-10 bg-[#32CD32] rounded-full" />
              <span className="text-[#32CD32] text-xs font-bold tracking-widest uppercase">
                Cómo Iliaki transforma tu hogar
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] leading-tight text-balance">
              ¿Cómo Iliaki transforma{" "}
              <span className="relative inline-block">
                tu hogar
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#32CD32] rounded-full" />
              </span>
              ?
            </h2>
          </div>
          <div className="flex-1 max-w-xl">
            <p className="text-[#6B7280] text-lg leading-relaxed">
              La energía autossustentable ya no es el futuro, es el presente. Con un sistema
              fotovoltaico instalado por Iliaki, tu hogar genera su propia electricidad limpia,
              reduce drásticamente tu factura y aumenta el valor de tu propiedad.
            </p>
            <p className="text-[#6B7280] text-base leading-relaxed mt-4">
              Trabajamos de principio a fin: desde el estudio técnico de tu techo hasta la
              instalación certificada, puesta en marcha y mantenimiento preventivo. Todo incluido.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-6 bg-[#F7F7F7] hover:bg-white border border-transparent hover:border-[#E5E7EB] hover:shadow-xl rounded-2xl transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-[#32CD32]/10 border border-[#32CD32]/20 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[#32CD32]/20 group-hover:border-[#32CD32]/40">
                {f.icon}
              </div>
              <h3 className="font-bold text-[#0A0A0A] text-lg mb-2">{f.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{f.desc}</p>
              {/* Bottom accent bar */}
              <div className="mt-5 h-0.5 w-0 bg-[#32CD32] rounded-full transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Visual divider with image */}
        <div className="mt-16 rounded-2xl overflow-hidden relative h-64 lg:h-80">
          <Image
            src="/images/intro-banner.jpg"
            alt="Panel solar moderno instalado en tejado residencial con vista al cielo azul"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/50 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-xl lg:text-2xl font-bold text-balance px-8">
                "La mejor decisión que tomamos para nuestro hogar. La instalación fue impecable."
              </p>
              <p className="text-[#32CD32] font-semibold mt-3 text-sm">— Familia Rodríguez, Buenos Aires</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
