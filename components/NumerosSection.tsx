'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Stat {
  value:    number | null
  text?:    string
  suffix:   string
  label:    string
  icon:     string
}

const stats: Stat[] = [
  { value: null, text: '✓', suffix: '', label: 'Atendimento Domiciliar', icon: '🏠' },
  { value: 150,  suffix: '+',  label: 'Clientes Atendidos',       icon: '👥' },
  { value: 98,   suffix: '%',  label: 'Taxa de Satisfação',       icon: '⭐' },
  { value: null, text: 'CRF', suffix: ' 4033-TO', label: 'Certificação Ativa', icon: '🏅' },
]

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const startTime = performance.now()
    function tick(now: number) {
      const elapsed = now - startTime
      const t = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(Math.round(eased * end))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, end])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function NumerosSection() {
  return (
    <section
      id="numeros"
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--vinho-esc) 0%, #4A1E2A 50%, var(--vinho-esc) 100%)',
      }}
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: 'var(--dourado)' }}>
            Resultados que falam por si
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(201,168,76,0.2)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
              }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div
                className="text-4xl font-bold mb-1 glow-gold"
                style={{
                  color: 'var(--dourado)',
                  fontFamily: 'var(--font-playfair-display)',
                }}
              >
                {stat.value !== null
                  ? <CountUp end={stat.value} suffix={stat.suffix} />
                  : <span>{stat.text}{stat.suffix}</span>
                }
              </div>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
