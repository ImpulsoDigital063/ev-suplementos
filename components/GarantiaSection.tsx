'use client'

import { motion } from 'framer-motion'

export default function GarantiaSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--vinho-esc) 0%, var(--vinho) 100%)' }}
    >
      {/* Linha dourada topo */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, var(--dourado), transparent)' }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.1) 0%, transparent 60%)' }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center text-white relative z-10">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-7xl mb-6"
        >
          🛡️
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: 'var(--font-playfair-display)' }}
        >
          30 Dias de Satisfação Garantida
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-4 font-semibold"
          style={{ color: 'var(--dourado)' }}
        >
          Se não se sentir melhor em 30 dias,<br />devolvemos 100% do seu investimento.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-base mb-10 opacity-80 max-w-xl mx-auto leading-relaxed"
        >
          Acreditamos nos nossos protocolos e na ciência por trás de cada fórmula.
          Nossa garantia existe porque sabemos que você vai sentir a diferença.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {['✓ Sem Riscos', '✓ Sem Perguntas', '✓ 100% Reembolso'].map(item => (
            <span
              key={item}
              className="px-5 py-2.5 rounded-full text-sm font-semibold"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://wa.me/5599981140494?text=Ol%C3%A1%20Erlane!%20Quero%20agendar%20com%20garantia%20de%2030%20dias."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: '1rem', padding: '0.9rem 2rem', minHeight: '48px' }}
          >
            💬 Quero Começar Agora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
