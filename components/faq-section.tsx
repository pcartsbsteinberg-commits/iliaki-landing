"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Cuál es el tiempo promedio de recupero de la inversión (ROI)?",
    answer: "En Argentina, el ROI promedio oscila entre los 3.5 y 6 años, dependiendo de la tarifa eléctrica de tu zona y el nivel de autoconsumo. Consideramos este un activo financiero de alto rendimiento con vida útil de +25 años."
  },
  {
    question: "¿Qué mantenimiento requieren los paneles solares?",
    answer: "El mantenimiento es mínimo. Recomendamos una limpieza básica de la superficie con agua y un paño suave 2 veces al año para eliminar polvo o suciedad, además de una revisión técnica anual de las conexiones eléctricas."
  },
  {
    question: "¿Funciona el sistema durante un corte de luz?",
    answer: "Solo si el sistema incluye baterías (Backup). Los sistemas 'On-Grid' puros se apagan por seguridad normativa durante un corte externo. En Iliaki nos especializamos en sistemas híbridos Victron que garantizan energía ininterrumpida."
  },
  {
    question: "¿Cuál es la diferencia entre paneles térmicos y fotovoltaicos?",
    answer: "Los paneles térmicos se usan exclusivamente para calentar agua (uso sanitario/calefacción). Los paneles fotovoltaicos captan luz solar para generar energía eléctrica, permitiendo alimentar cualquier equipo de tu hogar o empresa."
  },
  {
    question: "¿Cuánto duran los equipos instalados?",
    answer: "Nuestros paneles Tier-1 tienen una garantía de potencia del 80% a los 25 años. Los inversores de alta gama duran entre 12 y 15 años, y las baterías de litio ferrofosfato (LiFePO4) superan los 10 años de vida útil."
  },
  {
    question: "¿Qué sucede en días nublados o con lluvia?",
    answer: "El sistema sigue generando energía aprovechando la radiación difusa, aunque a un ritmo menor (20-40% de su capacidad). La lluvia es beneficiosa, ya que ayuda a limpiar naturalmente el polvo acumulado en los paneles."
  },
  {
    question: "¿Es necesario modificar toda la instalación eléctrica de mi inmueble?",
    answer: "No. El sistema solar se integra a tu tablero general existente mediante dispositivos de protección y conmutación técnica. Es una actualización transparente para el funcionamiento de tus electrodomésticos."
  },
  {
    question: "¿Puedo ampliar el sistema en el futuro?",
    answer: "Totalmente. Diseñamos nuestras arquitecturas de forma modular. Podés comenzar con una base de paneles e inversor y añadir más paneles o capacidad de batería según crezcan tus necesidades energéticas."
  },
  {
    question: "¿Qué certificaciones respaldan su trabajo?",
    answer: "Contamos con ingenieros y técnicos matriculados especializados en sistemas fotovoltaicos de baja y media tensión. Cumplimos con las normativas locales de seguridad eléctrica y estándares internacionales de calidad."
  },
  {
    question: "¿Cómo puedo monitorear mi ahorro de energía?",
    answer: "Incluimos una plataforma de monitoreo remoto (App/Web) donde podés ver en tiempo real cuánta energía generás, cuánto consumís y cuánto estás ahorrando, con alertas de estado de salud del sistema."
  }
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#32CD32]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#32CD32]/10 border border-[#32CD32]/30 mb-4">
            <HelpCircle className="w-4 h-4 text-[#32CD32]" />
            <span className="text-[#32CD32] text-[10px] font-bold tracking-widest uppercase">Centro de Conocimiento</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Preguntas <span className="text-[#32CD32]">Frecuentes</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto font-light">
            Respuestas técnicas precisas para una transición energética inteligente y rentable.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-white/10 rounded-xl px-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden"
              >
                <AccordionTrigger className="text-left text-white hover:text-[#32CD32] py-5 text-lg font-bold transition-colors decoration-transparent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#9CA3AF] text-base leading-relaxed pb-6 pt-2 border-t border-white/5 mt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-[#6B7280] text-sm">
            ¿Tenés una consulta técnica más específica?{" "}
            <a href="#contacto" className="text-[#32CD32] font-bold hover:underline transition-all">
              Hablá con un experto ahora
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
