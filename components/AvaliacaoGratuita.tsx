'use client'

import { motion } from 'framer-motion'

const canais = [
  {
    icone: '💬',
    titulo: 'WhatsApp',
    desc: 'Envie uma mensagem agora e receba resposta em minutos.',
    label: 'Abrir WhatsApp',
    href: 'https://wa.me/5599981140494?text=Ol%C3%A1%20Erlane!%20Quero%20saber%20mais%20sobre%20os%20protocolos.',
    style: { background: 'var(--wpp)', color: 'white' },
  },
  {
    icone: '📧',
    titulo: 'Email',
    desc: 'Receba informações detalhadas direto no seu email.',
    label: 'Enviar Email',
    href: 'mailto:erlane@ev-suplementos.com',
    style: { background: 'var(--vinho)', color: 'white' },
  },
  {
    icone: '📋',
    titulo: 'Agendar Consulta',
    desc: 'Escolha um horário disponível na sua agenda.',
    label: 'Agendar Agora',
    href: '#agendar',
    style: { background: 'var(--dourado)', color: 'white' },
  },
]

export default function AvaliacaoGratuita() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--vinho-claro)' }}
          >
            Fale com a gente
          </p>
          <h2>Prefere Conversar Antes?</h2>
          <p>Fale direto com Erlane pelo canal que for mais fácil para você.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {canais.map((c, i) => (
            <motion.div
              key={c.titulo}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 48px rgba(107,39,55,0.15)' }}
              className="flex flex-col items-center text-center p-8 rounded-2xl transition-all"
              style={{ border: '1.5px solid var(--rosa-med)', background: 'white' }}
            >
              <div className="text-5xl mb-4">{c.icone}</div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: 'var(--vinho)', fontFamily: 'var(--font-playfair-display)' }}
              >
                {c.titulo}
              </h3>
              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: 'var(--texto-leve)' }}
              >
                {c.desc}
              </p>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-full py-3 rounded-lg text-sm font-semibold text-center transition-all hover:brightness-110 active:scale-95 min-h-[48px] flex items-center justify-center"
                style={c.style}
              >
                {c.label}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
