'use client'

import { motion } from 'framer-motion'

const temas = [
  '💉 Como funciona a soroterapia',
  '🔬 Ciência por trás dos protocolos',
  '🥗 Nutrição e suplementação',
  '✨ Cuidados com pele e cabelo',
]

export default function BlogPromoSection() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--vinho-esc) 0%, #4A1E2A 100%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex-1"
          >
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: 'rgba(201,168,76,0.18)', color: 'var(--dourado)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              ✦ Conteúdo gratuito
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight"
              style={{ fontFamily: 'var(--font-playfair-display)' }}
            >
              Aprenda antes de decidir.{' '}
              <em className="glow-gold" style={{ color: 'var(--dourado)', fontStyle: 'italic' }}>
                É grátis.
              </em>
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.65)' }}>
              No blog da EV você encontra artigos educativos escritos pela própria Erlane
              sobre soroterapia, nutrição e bem-estar — para você entender o que está
              recebendo e por quê funciona.
            </p>

            {/* Temas */}
            <div className="flex flex-wrap gap-2">
              {temas.map(t => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex-shrink-0 text-center"
          >
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-sm transition-all hover:brightness-110 active:scale-95 shadow-lg"
              style={{ background: 'var(--vinho-claro)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              📖 Ir para o Blog
            </a>
            <p className="text-xs mt-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Artigos novos toda semana
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
