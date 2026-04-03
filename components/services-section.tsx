import Image from "next/image"

const services = [
  {
    id: "01",
    category: "Instalación",
    title: "Instalación Residencial (Energía Fotovoltaica Iliaki)",
    desc: "Ingeniería de precisión para tu hogar. Instalación de paneles solares personalizados con estudio técnico, diseño, puesta en marcha y conexión a la red.",
    features: [
      "Estudio solar sin costo",
      "Paneles de alta eficiencia",
      "Inversor inteligente",
      "Garantía de 10 años",
    ],
    image: "/images/projects/trabajo12.webp",
    cta: "Solicitar Cotización",
    ctaHref: "https://wa.me/1234567890?text=Hola%20Iliaki%2C%20me%20interesa%20solicitar%20un%20presupuesto%20para%20una%20instalaci%C3%B3n%20fotovoltaica.",
  },
  {
    id: "02",
    category: "Mantenimiento",
    title: "Mantenimiento y Soporte Técnico",
    desc: "Monitoreo proactivo y limpieza especializada. Un panel sucio pierde hasta el 30% de eficiencia; nosotros velamos por tu ahorro energético residencial.",
    features: [
      "Limpieza desmineralizada",
      "Calibración de inversor",
      "Informe de rendimiento",
      "Atención de urgencias 24/7",
    ],
    image: "/images/projects/tablero.webp",
    cta: "Agendar Mantenimiento",
    ctaHref: "https://wa.me/1234567890?text=Hola%20Iliaki%2C%20me%20interesa%20solicitar%20un%20presupuesto%20para%20una%20instalaci%C3%B3n%20fotovoltaica.",
  },
  {
    id: "03",
    category: "Sistemas",
    title: "Sistemas de Almacenamiento",
    desc: "Independencia total con respaldo inteligente. Almacena excedentes para la noche o cortes de electricidad, utilizando la mejor tecnología de litio.",
    features: [
      "Baterías de litio premium",
      "Integración impecable",
      "Respaldo automático",
      "Mayor vida útil",
    ],
    image: "/images/projects/electrica.webp",
    cta: "Consultar Sistemas",
    ctaHref: "https://wa.me/1234567890?text=Hola%20Iliaki%2C%20me%20interesa%20solicitar%20un%20presupuesto%20para%20una%20instalaci%C3%B3n%20fotovoltaica.",
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-[#FCF8F8] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[4rem] font-bold text-[#0A0A0A] tracking-tight leading-[1.1] mb-6 max-w-4xl hover:tracking-normal transition-all duration-300">
            Instalación de paneles solares y <br/>
            <span className="text-[#32CD32]">ahorro energético residencial</span>
          </h2>
          <p className="text-[#1C1B1B] text-lg max-w-2xl leading-relaxed font-medium">
            De la instalación al mantenimiento especializado, la energía fotovoltaica de Iliaki cubre cada etapa de tu experiencia con el más estricto rigor de ingeniería.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="group bg-[#FFFFFF] border border-[#F0EDEC] rounded-md overflow-hidden shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-6 flex flex-col gap-1">
                  <span className="text-[#32CD32] text-xs font-black tracking-widest">{s.id}</span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <p className="text-[#006e0a] text-xs font-semibold uppercase tracking-widest mb-3">{s.category}</p>
                <h3 className="text-[#1C1B1B] font-bold text-2xl mb-4 leading-tight">{s.title}</h3>
                <p className="text-[#3d4a39] text-sm leading-relaxed mb-8 flex-1">{s.desc}</p>

                <ul className="flex flex-col gap-3 mb-10">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1 h-3 rounded-sm bg-[#32CD32] mt-1 shrink-0" />
                      <span className="text-[#1C1B1B] text-sm font-medium leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={s.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center w-full bg-[#32CD32] hover:bg-[#28b028] text-[#002201] font-bold py-4 rounded-md transition-all duration-300 shadow-sm"
                >
                  {s.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
