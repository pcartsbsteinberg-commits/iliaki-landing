"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

interface CountUpProps {
  target: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
  className?: string
}

export default function CountUp({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
  className = "",
}: CountUpProps) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => {
    if (decimals > 0) {
      return latest.toFixed(decimals)
    }
    return Math.floor(latest).toString()
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo - smooth premium feel
      })

      return controls.stop
    }
  }, [isInView, target, duration, motionValue])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}