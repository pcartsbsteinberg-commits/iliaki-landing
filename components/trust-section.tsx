import Image from "next/image"

export default function TrustSection() {
  return (
    <section className="bg-[#131313] py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#32CD32 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-10 bg-[#32CD32]" />
          <span className="text-[#32CD32] font-black tracking-[0.1em] uppercase text-sm">
            Señales de Confianza
          </span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-20 tracking-tight max-w-3xl">
          Respaldamos cada watt con <span className="text-[#32CD32]">certeza técnica absoluta</span>.
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Pillar 1: Garantía */}
          <div className="flex flex-col gap-6 group">
            <div className="w-16 h-16 rounded-md bg-[#1C1B1B] border border-[#353534] flex items-center justify-center group-hover:border-[#32CD32]/50 transition-colors duration-500 shadow-[0_0_30px_rgba(50,205,50,0.05)] text-[#32CD32]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[#E5E2E1] font-bold text-3xl mb-4">
                Garantía de Instalación 10 Años
              </h3>
              <p className="text-[#BCCBB4] text-lg leading-relaxed font-light">
                Más allá de la garantía del fabricante de 25 años sobre los paneles, Iliaki ofrece una protección integral de 10 años sobre la infraestructura eléctrica, montajes estructurales y estanqueidad del techo. Nuestro peritaje técnico elimina el riesgo de filtraciones y fallos de sistema.
              </p>
            </div>
          </div>

          {/* Pillar 2: Certificaciones */}
          <div className="flex flex-col gap-6 group">
            <div className="w-16 h-16 rounded-md bg-[#1C1B1B] border border-[#353534] flex items-center justify-center group-hover:border-[#32CD32]/50 transition-colors duration-500 shadow-[0_0_30px_rgba(50,205,50,0.05)] text-[#32CD32]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
              </svg>
            </div>
            <div>
              <h3 className="text-[#E5E2E1] font-bold text-3xl mb-4">
                Certificaciones y Peritaje Técnico
              </h3>
              <p className="text-[#BCCBB4] text-lg leading-relaxed font-light mb-6">
                Toda instalación es ejecutada exclusivamente por ingenieros electromecánicos matriculados bajo normas IRAM, NEC, y los altos estándares internacionales IEC de calidad fotovoltaica. 
              </p>
              <div className="flex gap-4">
                <span className="text-[#32CD32] border border-[#32CD32]/30 bg-[#32CD32]/10 px-3 py-1.5 rounded-sm text-xs font-black tracking-[0.15em] uppercase">
                  ISO 9001
                </span>
                <span className="text-[#32CD32] border border-[#32CD32]/30 bg-[#32CD32]/10 px-3 py-1.5 rounded-sm text-xs font-black tracking-[0.15em] uppercase">
                  IEC 61215
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
