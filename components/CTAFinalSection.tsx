'use client'

import { motion } from 'framer-motion'

export default function CTAFinalSection() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--vinho-esc) 0%, #4A1E2A 60%, var(--vinho-esc) 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.1) 0%, transparent 60%)' }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl mb-6"
        >
          ✨
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          Pronto para Começar sua{' '}
          <em style={{ color: 'var(--dourado)', fontStyle: 'italic' }}>Transformação?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg mb-10 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          Avaliação gratuita, sem compromisso. Agende agora e dê o primeiro
          passo rumo a um corpo mais saudável e vibrante.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://wa.me/5599981140494?text=Ol%C3%A1%20Erlane!%20Quero%20agendar%20minha%20avalia%C3%A7%C3%A3o%20gratuita%20de%20soroterapia."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary min-h-[48px]"
            style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
          >
            💬 Agendar Avaliação Gratuita
          </a>
          <a
            href="#protocolos"
            className="btn-tertiary min-h-[48px]"
            style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}
          >
            Ver Todos os Protocolos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
