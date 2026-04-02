'use client'

import { motion } from 'framer-motion'

const pilares = [
  {
    icon: '🎯',
    titulo: 'Avaliação Gratuita',
    desc: 'Antes de qualquer protocolo, conversamos sobre seus objetivos, histórico e necessidades — sem custo e sem compromisso.',
  },
  {
    icon: '🧬',
    titulo: 'Protocolo Personalizado',
    desc: 'O investimento varia conforme o protocolo escolhido e o número de sessões. Cada plano é montado sob medida para o seu perfil.',
  },
  {
    icon: '📲',
    titulo: 'Sem Surpresas',
    desc: 'Você recebe o valor completo antes de confirmar qualquer sessão. Transparência total desde o primeiro contato.',
  },
]

export default function InvestimentoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--vinho-claro)' }}>
            Transparência em primeiro lugar
          </p>
          <h2>Como funciona o investimento</h2>
          <p>Sem tabela de preços oculta. Você sabe exatamente o que vai pagar antes de começar.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {pilares.map((p, i) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="shimmer-card rounded-2xl p-7 flex flex-col gap-3"
              style={{
                border: '1.5px solid var(--rosa-med)',
                background: 'var(--rosa)',
              }}
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="font-bold text-base" style={{ color: 'var(--vinho)', fontFamily: 'var(--font-playfair-display)' }}>
                {p.titulo}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--texto-leve)' }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-5"
          style={{
            background: 'linear-gradient(135deg, var(--vinho-esc), #4A1E2A)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          <div>
            <p className="text-white font-semibold text-base mb-1">Quer saber o valor do seu protocolo?</p>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Me chame no WhatsApp — respondo em minutos.
            </p>
          </div>
          <a
            href="https://wa.me/5599981140494?text=Ol%C3%A1%20Erlane!%20Quero%20saber%20os%20valores%20dos%20protocolos."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-semibold transition-all hover:brightness-110 active:scale-95 whitespace-nowrap"
            style={{ background: 'var(--wpp)' }}
          >
            💬 Consultar valores
          </a>
        </motion.div>

      </div>
    </section>
  )
}
