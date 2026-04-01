'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = (delay: number) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:     'linear-gradient(-45deg, #2C1A1D, #6B2737, #9B3F54, #2C1A1D)',
        backgroundSize: '400% 400%',
        animation:      'gradientShift 10s ease infinite',
      }}
    >
      {/* Glow dourado */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.08) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:py-24 w-full relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10 md:items-center gap-0">

          {/* Badge — mobile: acima da foto */}
          <motion.div {...fadeUp(0.05)} className="flex justify-center md:hidden mb-5">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: 'rgba(201,168,76,0.2)', color: 'var(--dourado)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              ✦ Farmacêutica Certificada CRF 4033-TO
            </span>
          </motion.div>

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' as const }}
            className="flex justify-center md:justify-end"
          >
            <div
              className="relative rounded-2xl overflow-hidden flex-shrink-0"
              style={{
                width:     'min(300px, 78vw)',
                height:    'clamp(360px, 85vw, 520px)',
                border:    '2px solid rgba(201,168,76,0.45)',
                boxShadow: '0 0 0 6px rgba(201,168,76,0.08), 0 28px 60px rgba(0,0,0,0.45)',
              }}
            >
              <Image
                src="/erlane.jpg"
                alt="Erlane — Farmacêutica CRF 4033-TO"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>
          </motion.div>

          {/* Texto */}
          <div className="text-white mt-8 md:mt-0">

            {/* Badge desktop */}
            <motion.div {...fadeUp(0.1)} className="hidden md:block">
              <span
                className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
                style={{ background: 'rgba(201,168,76,0.2)', color: 'var(--dourado)', border: '1px solid rgba(201,168,76,0.3)' }}
              >
                ✦ Farmacêutica Certificada CRF 4033-TO
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.15, fontFamily: 'var(--font-playfair-display)' }}
              className="font-bold mb-5"
            >
              Sinta o Poder de um Corpo{' '}
              <em style={{ color: 'var(--dourado)', fontStyle: 'italic' }}>
                Verdadeiramente
              </em>{' '}
              Nutrido
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="text-lg mb-3 max-w-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.78)' }}
            >
              Protocolos de soroterapia proprietários desenvolvidos por
              farmacêutica certificada. Resultados reais, atendimento domiciliar
              em Palmas–TO.
            </motion.p>


            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 mb-8">
              {['IV Terapia', 'Atendimento Domiciliar', 'Palmas–TO'].map(tag => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5599981140494?text=Ol%C3%A1%20Erlane!%20Quero%20agendar%20minha%20avalia%C3%A7%C3%A3o%20gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white text-sm transition-all hover:brightness-110 active:scale-95 shadow-lg min-h-[48px]"
                style={{ background: 'var(--wpp)' }}
              >
                💬 Agendar Avaliação Gratuita
              </a>
              <a
                href="#protocolos"
                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white text-sm transition-all hover:bg-white/10 active:scale-95 min-h-[48px]"
                style={{ border: '2px solid rgba(255,255,255,0.4)' }}
              >
                Ver Protocolos →
              </a>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        style={{ color: 'rgba(255,255,255,0.4)' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' as const }}
        onClick={() => document.getElementById('numeros')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] tracking-widest uppercase">Explore</span>
        <span className="text-base">↓</span>
      </motion.div>
    </section>
  )
}
