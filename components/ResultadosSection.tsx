'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const resultados = [
  { protocolo: 'Energia & Foco',            percent: 97, desc: 'relataram melhora já na primeira sessão'        },
  { protocolo: 'Emagrecimento',              percent: 94, desc: 'viram redução de medidas em até 3 semanas'      },
  { protocolo: 'Imunidade',                  percent: 96, desc: 'sentiram fortalecimento em 2 semanas'           },
  { protocolo: 'Beleza — Pele & Cabelos',    percent: 91, desc: 'notaram diferença visível em pele e cabelos'    },
  { protocolo: 'Massa Muscular',             percent: 89, desc: 'obtiveram ganho perceptível em 4 semanas'       },
]

function Bar({ percent, delay }: { percent: number; delay: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="w-full rounded-full overflow-hidden" style={{ height: 10, background: 'var(--rosa-med)' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: inView ? `${percent}%` : 0 }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
        className="h-full rounded-full"
        style={{ background: 'linear-gradient(90deg, var(--vinho-claro), var(--dourado))' }}
      />
    </div>
  )
}

export default function ResultadosSection() {
  return (
    <section className="py-24" style={{ background: 'var(--rosa)' }}>
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--vinho-claro)' }}>
            Resultados comprovados
          </p>
          <h2>O que nossos clientes relatam</h2>
          <p>Percentual de clientes que reportaram melhora em cada protocolo.</p>
        </motion.div>

        <div className="space-y-8">
          {resultados.map((r, i) => (
            <motion.div
              key={r.protocolo}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-end justify-between mb-2">
                <span className="text-sm font-semibold" style={{ color: 'var(--vinho)' }}>
                  {r.protocolo}
                </span>
                <span className="text-lg font-bold" style={{ color: 'var(--dourado)', fontFamily: 'var(--font-playfair-display)' }}>
                  {r.percent}%
                </span>
              </div>
              <Bar percent={r.percent} delay={i * 0.1} />
              <p className="text-xs mt-1.5" style={{ color: 'var(--texto-leve)' }}>
                {r.percent}% dos clientes {r.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-xs mt-10"
          style={{ color: 'var(--texto-leve)' }}
        >
          * Baseado em relatos de clientes atendidos desde Fev/2026.
        </motion.p>

      </div>
    </section>
  )
}
