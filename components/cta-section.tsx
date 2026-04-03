import Image from "next/image"

const galleryImages = [
  { src: "/images/cta-gallery-1.jpg", alt: "Instalación de paneles solares | Energía fotovoltaica Iliaki" },
  { src: "/images/cta-gallery-2.jpg", alt: "Batería de Almacenamiento | Ahorro energético residencial con Iliaki" },
  { src: "/images/cta-gallery-3.jpg", alt: "Técnico Iliaki instalando paneles solares" },
  { src: "/images/cta-gallery-4.jpg", alt: "Sistema de Energía fotovoltaica Iliaki residencial" },
]

export default function CtaSection() {
  return (
    <section id="testimonios" className="bg-[#FCF8F8] py-20 lg:py-28">
      <div className="h-px bg-gradient-to-r from-transparent via-[#32CD32] to-transparent mb-20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: CTA content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#32CD32]" />
              <span className="text-[#32CD32] text-xs font-bold tracking-widest uppercase">
                Da el paso definitivo
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1B1B] leading-tight text-balance mb-6">
              Simplifica tu transición a la{" "}
              <span className="text-[#32CD32] lime-text-glow">instalación de paneles solares</span>
            </h2>

            <p className="text-[#3D4A39] text-lg leading-relaxed mb-8">
              Da el primer paso hacia la independencia energética y garantiza tu ahorro energético residencial. Nuestro equipo de ingenieros te contacta con un presupuesto sin compromiso.
            </p>

            {/* Main CTA */}
            <a
              href="https://wa.me/1234567890?text=Hola%20Iliaki%2C%20me%20interesa%20solicitar%20un%20presupuesto%20para%20una%20instalaci%C3%B3n%20fotovoltaica."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-[#32CD32] hover:bg-[#28b028] text-[#002201] font-bold text-lg px-8 py-5 rounded-md transition-all duration-300 hover:shadow-[0_0_40px_rgba(50,205,50,0.5)] w-fit mb-4"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ver cuánto puedo ahorrar
            </a>
            <p className="text-[#3d4a39] text-sm">Estudio Técnico • Cotización de Ingeniería • ROI Exacto</p>

            {/* Contact info */}
            <div className="mt-8 flex flex-col gap-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-[#32CD32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  ),
                  label: "+54 11 5555-0000",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-[#32CD32]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  ),
                  label: "Buenos Aires, Argentina — Cobertura Nacional",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-md bg-[#32CD32]/10 border border-[#32CD32]/20 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-[#1C1B1B] text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Gallery grid */}
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-md group ${i === 0 ? "row-span-2 h-80" : "h-[156px]"}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/10 group-hover:bg-[#0A0A0A]/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
