"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SolarWizard = () => {
  const [monthlyBill, setMonthlyBill] = useState(150);

  // TECHNICAL COMMENT: Lógica Eficiente.
  // Uso de operadores a nivel de bits (~~) para truncar decimales y evitar
  // el overhead de Math.floor o Math.round. 
  // Cada ciclo de CPU cuenta. Technical Stoicism en el frontend.
  const energyCostPerKwh = 0.15;
  const monthlyKwh = ~~(monthlyBill / energyCostPerKwh);
  
  // Ahorro monetario (Estimando un 80% de cobertura de la factura)
  const annualSavings = ~~(monthlyKwh * energyCostPerKwh * 0.8 * 12);
  const lifetimeSavings = ~~(annualSavings * 25);
  
  // Impacto ambiental
  // Factor de emisión ~0.4 kg CO2 por kWh. (0.0004 toneladas).
  const co2AvoidedTons = ~~(monthlyKwh * 12 * 0.0004); 
  const treesPlanted = ~~(co2AvoidedTons * 6); // Asumiendo ~6 árboles por tonelada absorbida al año.

  return (
    <div className="w-full max-w-4xl mx-auto p-8 rounded-[2rem] bg-[#0E0E0E]/80 backdrop-blur-2xl border border-white/5 shadow-2xl overflow-hidden relative">
      {/* Decorative Energy Pulse */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#55EA4D] to-transparent opacity-50"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#55EA4D]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        
        {/* Left Panel: Minimalist Inputs */}
        <div className="flex-1 space-y-10 flex flex-col justify-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-[#E5E2E1] mb-2 font-['Space_Grotesk'] leading-none">
              ROI Dinámico
            </h2>
            <p className="text-[#BCCBB4] text-xs uppercase tracking-[0.1em] font-mono">
              Panel de Rendimiento Energético
            </p>
          </div>

          <div className="bg-[#1C1B1B]/40 p-6 rounded-2xl border border-white/5">
            <div className="flex justify-between items-end mb-6">
              <label className="text-[#E5E2E1]/70 text-sm font-medium">Gasto Eléctrico Mensual</label>
              <div className="text-4xl font-bold text-[#E5E2E1] font-['Space_Grotesk'] tracking-tight">
                ${monthlyBill} <span className="text-sm text-[#E5E2E1]/40 font-normal">USD</span>
              </div>
            </div>
            
            <input 
              type="range" 
              min="50" 
              max="500" 
              step="10"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(~~e.target.value)}
              className="w-full h-[2px] bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#55EA4D] hover:accent-[#75FF68] transition-all"
            />
            <div className="flex justify-between text-[10px] text-white/30 mt-4 font-mono tracking-widest uppercase">
              <span>$50 Min</span>
              <span>$500 Max</span>
            </div>
          </div>
        </div>

        {/* Right Panel: High-End Metrics */}
        <div className="flex-[1.5] grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Main Card: 25-Year Savings */}
          <motion.div 
            className="md:col-span-2 bg-[#1C1B1B] p-8 rounded-2xl border border-[#55EA4D]/10 relative overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* The "Energy Pulse" Indicator */}
            <div className="absolute top-6 right-6 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#55EA4D] animate-ping absolute opacity-70"></div>
              <div className="w-2 h-2 rounded-full bg-[#55EA4D] relative"></div>
            </div>
            
            <p className="text-[#BCCBB4] text-[10px] uppercase tracking-[0.15em] mb-3 font-mono">
              Ahorro Proyectado (25 Años)
            </p>
            <div className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#75FF68] to-[#32CD32] font-['Space_Grotesk'] tracking-tighter">
              ${lifetimeSavings.toLocaleString()}
            </div>
          </motion.div>

          {/* Sub-Card: CO2 */}
          <motion.div 
            className="bg-[#1C1B1B]/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-[#BCCBB4]/70 text-[10px] uppercase tracking-[0.1em] mb-2 font-mono">CO2 Evitado</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-[#E5E2E1] font-['Space_Grotesk'] tracking-tight">{co2AvoidedTons}</span>
              <span className="text-xs text-white/30 font-mono tracking-widest uppercase">Ton</span>
            </div>
          </motion.div>

          {/* Sub-Card: Trees */}
          <motion.div 
            className="bg-[#1C1B1B]/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <p className="text-[#BCCBB4]/70 text-[10px] uppercase tracking-[0.1em] mb-2 font-mono">Impacto Forestal</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-[#E5E2E1] font-['Space_Grotesk'] tracking-tight">{treesPlanted}</span>
              <span className="text-xs text-white/30 font-mono tracking-widest uppercase">Árboles</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default SolarWizard;
