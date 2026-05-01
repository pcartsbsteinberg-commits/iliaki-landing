"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Layout, 
  ShieldCheck, 
  BatteryCharging, 
  Settings, 
  TrendingUp,
  Quote
} from 'lucide-react';

const modules = [
  {
    id: 1,
    title: "Fundamentos de la Energía Fotovoltaica y Radiación Solar",
    description: "Comprende los principios físicos de la radiación solar y cómo transformarla en energía limpia.",
    icon: Zap,
    duration: "10 Horas",
    tag: "Nivel Inicial"
  },
  {
    id: 2,
    title: "Diseño y Dimensionamiento de Sistemas PV",
    description: "Aprende a calcular consumos y diseñar instalaciones residenciales e industriales optimizadas.",
    icon: Layout,
    duration: "15 Horas",
    tag: "Técnico"
  },
  {
    id: 3,
    title: "Instalación de Paneles Solares y Seguridad",
    description: "Protocolos de seguridad en altura y técnicas avanzadas de montaje mecánico y eléctrico.",
    icon: ShieldCheck,
    duration: "20 Horas",
    tag: "Práctico"
  },
  {
    id: 4,
    title: "Sistemas de Almacenamiento Avanzado",
    description: "Configuración de bancos de baterías, reguladores y gestión de excedentes energéticos.",
    icon: BatteryCharging,
    duration: "12 Horas",
    tag: "Especialización"
  },
  {
    id: 5,
    title: "Mantenimiento Preventivo y Diagnóstico",
    description: "Detección de fallas, limpieza técnica y optimización de rendimiento de plantas solares.",
    icon: Settings,
    duration: "8 Horas",
    tag: "Post-Venta"
  },
  {
    id: 6,
    title: "Gestión de Negocios Solares y Salida Laboral",
    description: "Cómo presupuestar, vender y gestionar tu propia empresa de energía sustentable.",
    icon: TrendingUp,
    duration: "10 Horas",
    tag: "Business"
  }
];

const testimonials = [
  {
    name: "Marcos L.",
    role: "Instalador Independiente",
    text: "Excelente pedagogía. En dos semanas ya estaba haciendo mis primeros presupuestos reales con confianza técnica absoluta.",
    avatar: "https://ui-avatars.com/api/?name=Marcos+L&background=32CD32&color=0A0A0A"
  },
  {
    name: "Roberto F.",
    role: "Técnico Electromecánico",
    text: "El temario es directo al grano. Muy recomendado para quienes buscan una salida laboral inmediata en un mercado en auge.",
    avatar: "https://ui-avatars.com/api/?name=Roberto+F&background=32CD32&color=0A0A0A"
  },
  {
    name: "Jorge V.",
    role: "Emprendedor Solar",
    text: "Un antes y un después en mi carrera profesional. Aprendí no solo a instalar, sino a vender valor y seguridad.",
    avatar: "https://ui-avatars.com/api/?name=Jorge+V&background=32CD32&color=0A0A0A"
  }
];

const CoursesSection: React.FC = () => {
  return (
    <section id="academia" className="relative bg-[#0A0A0A] py-24 overflow-hidden border-t border-white/5">
      {/* Background Mesh Gradient */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#32CD32] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#32CD32]/30 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#32CD32] font-mono text-sm tracking-widest uppercase mb-4 block"
          >
            Academia Iliaki
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Capacitación Fotovoltaica de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] to-emerald-400">Elite</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Formamos a los próximos expertos en <strong>Instalación de Paneles Solares</strong>. 
            Contenido técnico avanzado, herramientas reales y una <strong>salida laboral</strong> garantizada en el sector energético.
          </motion.p>
        </div>

        {/* Modules Grid - Asymmetric Feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {modules.map((module, idx) => (
            <motion.article
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl hover:border-[#32CD32]/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#32CD32]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#32CD32]/10 flex items-center justify-center mb-6 group-hover:bg-[#32CD32] transition-colors duration-300">
                  <module.icon className="w-7 h-7 text-[#32CD32] group-hover:text-black transition-colors duration-300" />
                </div>
                
                <span className="text-[10px] font-mono text-[#32CD32]/60 uppercase tracking-[0.2em] mb-2 block">
                  Módulo 0{module.id} — {module.tag}
                </span>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-[#32CD32] transition-colors">
                  {module.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {module.description}
                </p>
                
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Duración: {module.duration}</span>
                  <div className="h-1 w-12 bg-[#32CD32]/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#32CD32] w-1/2 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Visual Composition / Spacer (Replacing broken image) */}
        <div className="relative w-full h-[400px] mb-24 rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0A0A0A]/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,205,50,0.1),transparent)] z-10" />
          <div className="absolute inset-0 flex flex-col justify-center px-12 z-20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Aprendizaje <span className="text-[#32CD32]">Real</span></h3>
            <p className="text-slate-300 max-w-md text-lg">Nuestros cursos incluyen prácticas presenciales con equipos de última generación de marcas líderes como Victron Energy y Fronius.</p>
            <div className="mt-8 flex gap-4">
              <div className="h-1 w-20 bg-[#32CD32]" />
              <div className="h-1 w-10 bg-white/20" />
              <div className="h-1 w-10 bg-white/20" />
            </div>
          </div>
          {/* Mock background pattern */}
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 opacity-20">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="bg-white/5 hover:bg-[#32CD32]/20 transition-colors duration-500 border border-white/5" />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Testimonios de Egresados</h3>
            <div className="h-1 w-12 bg-[#32CD32] mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 rounded-2xl bg-[#121314] border border-white/5 shadow-xl"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#32CD32]/10" />
                <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed font-serif text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full border border-[#32CD32]/20 shadow-inner"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-[#32CD32] text-[10px] uppercase tracking-wider font-mono">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-b from-white/[0.05] to-transparent p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Tu Salida Laboral en Energías Renovables Empieza Aquí</h3>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto">Únete a la próxima cohorte de instaladores profesionales y sé parte de la revolución energética.</p>
          <button className="bg-[#32CD32] text-[#0A0A0A] px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(50,205,50,0.3)]">
            Inscribirse Ahora
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
