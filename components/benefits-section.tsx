import { Check, Info, ShieldAlert } from "lucide-react"

const mythBusters = [
  {
    myth: "Miedo al costo inicial alto",
    reality: "El ROI (Retorno de Inversión) promedio en Argentina es de 4 a 6 años. A partir de allí, tienes más de 15 años de energía virtualmente gratuita.",
    icon: <ShieldAlert className="w-6 h-6 text-[#32CD32]" />,
  },
  {
    myth: "Mantenimiento complicado",
    reality: "Los paneles no tienen partes móviles. Solo requieren limpieza periódica, la cual está cubierta en nuestros planes de soporte técnico.",
    icon: <Info className="w-6 h-6 text-[#32CD32]" />,
  },
]

const technicalBenefits = [
  {
    title: "Ahorro del 70% Garantizado",
    desc: "Reduce tu factura eléctrica drásticamente desde el primer mes completo de conexión. El excedente va a la red y te acredita a favor (Net Billing).",
  },
  {
    title: "+32% de Valor de Propiedad",
    desc: "Las propiedades con soluciones fotovoltaicas Iliaki se venden más rápido y a precios premium en el mercado inmobiliario actual.",
  },
  {
    title: "Vida Útil: +25 Años",
    desc: "Sistemas diseñados con el principio de Technical Stoicism. Eficiencia superior al 80% garantizada por un cuarto de siglo completo.",
  },
  {
    title: "100% Ecológico y Cero Emisiones",
    desc: "Un sistema de 5kW evita 3.5 toneladas de CO₂ por año, equivalente a plantar 160 árboles. Verdadero ahorro energético residencial y global.",
  },
]

export default function BenefitsSection() {
  return (
    <section className="bg-[#FFFFFF] py-20 lg:py-32 border-b border-[#F0EDEC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#32CD32]" />
            <span className="text-[#32CD32] font-black tracking-widest uppercase text-xs">
              Mitos vs Realidad
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1C1B1B] leading-tight text-balance max-w-3xl">
            Desmitificando la instalación de <span className="text-[#32CD32]">paneles solares</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Pain Points */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <p className="text-[#3D4A39] text-lg leading-relaxed font-medium">
              Es natural tener dudas ante una inversión de infraestructura. Aquí abordamos los puntos de fricción más comunes con datos técnicos reales y transparentes.
            </p>
            
            <div className="flex flex-col gap-6 mt-4">
              {mythBusters.map((item, idx) => (
                <div key={idx} className="bg-[#FCF8F8] border border-[#E5E2E1] rounded-md p-8 flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1C1B1B] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-[#1C1B1B] font-bold text-xl">{item.myth}</h3>
                  </div>
                  <div className="pl-16">
                    <p className="text-[#3D4A39] text-base leading-relaxed">
                      <span className="font-bold text-[#006E0A]">La Realidad: </span> 
                      {item.reality}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hard Benefits Data */}
          <div className="lg:col-span-7 bg-[#1C1B1B] rounded-md p-8 lg:p-12 shadow-2xl">
            <h3 className="text-white font-black text-2xl mb-8">
              Ahorro a Largo Plazo: Datos Duros
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {technicalBenefits.map((benefit, idx) => (
                <div key={idx} className="flex flex-col gap-3 group">
                  <div className="flex items-start gap-4">
                    <Check className="w-6 h-6 text-[#32CD32] mt-1 shrink-0" strokeWidth={3} />
                    <div>
                      <h4 className="text-[#E5E2E1] font-bold text-lg mb-2 leading-tight">
                        {benefit.title}
                      </h4>
                      <p className="text-[#BCCBB4] text-sm leading-relaxed font-light">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[#353534] flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-[#BCCBB4] text-sm">
                Diseñamos un plan adaptado a tu capacidad de inversión.
              </p>
              <a
                href="https://wa.me/1234567890?text=Hola%20Iliaki%2C%20quiero%20conocer%20los%20planes%20de%20inversi%C3%B3n%20para%20paneles%20solares."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#32CD32] hover:bg-[#28B028] text-[#0A0A0A] font-bold px-6 py-3 rounded-sm transition-all shadow-[0_4px_14px_rgba(50,205,50,0.3)] whitespace-nowrap"
              >
                Solicitar Asesoría Financiera
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
