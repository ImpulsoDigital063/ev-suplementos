'use client'

import { motion } from 'framer-motion'

const badges = [
  { icon: '🔒', text: 'CRF 4033-TO Ativa'           },
  { icon: '🏠', text: 'Atendimento Domiciliar'        },
  { icon: '⭐', text: '150+ Clientes Satisfeitos'     },
]

export default function BeneficiosComBadges() {
  return (
    <section
      className="py-5"
      style={{ background: 'white', borderBottom: '1px solid var(--rosa-med)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((b, i) => (
            <motion.div
              key={b.text}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold select-none"
              style={{
                background: 'var(--rosa)',
                border: '1.5px solid var(--rosa-med)',
                color: 'var(--vinho)',
              }}
            >
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
