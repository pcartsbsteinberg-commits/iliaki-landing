"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface HeroRevealProps {
  children: React.ReactNode
}

export default function HeroReveal({ children }: HeroRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {
    // Iniciar la animación inmediatamente
    const revealTimer = setTimeout(() => {
      setIsRevealed(true)
    }, 500)

    // Ocultar el overlay completamente después de la animación
    const hideTimer = setTimeout(() => {
      setShowOverlay(false)
    }, 2500)

    return () => {
      clearTimeout(revealTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div className="relative">
      {children}

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="fixed inset-0 z-[9999] pointer-events-none"
            initial={{ clipPath: "circle(150% at 50% 50%)" }}
            animate={{
              clipPath: isRevealed
                ? "circle(0% at 50% 50%)"
                : "circle(150% at 50% 50%)"
            }}
            transition={{
              duration: 1.5,
              ease: [0.87, 0, 0.13, 1],
              delay: 0.2
            }}
          >
            {/* Capa base oscura */}
            <div className="absolute inset-0 bg-[#0A0A0A]" />

            {/* Logo central durante revelado */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                opacity: isRevealed ? 0 : 1,
                scale: isRevealed ? 0.8 : 1
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Círculo con glow */}
                <motion.div
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-[#32CD32] to-[#28b028] flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      "0 0 60px rgba(50, 205, 50, 0.4)",
                      "0 0 100px rgba(50, 205, 50, 0.6)",
                      "0 0 60px rgba(50, 205, 50, 0.4)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-16 h-16 text-[#0A0A0A]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                </motion.div>

                {/* Texto Iliaki */}
                <motion.p
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white font-bold text-xl tracking-[0.3em] whitespace-nowrap"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  ILIAKI
                </motion.p>
              </div>
            </motion.div>

            {/* Líneas decorativas */}
            <motion.div
              className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#32CD32]/20 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
            <motion.div
              className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#32CD32]/20 to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}