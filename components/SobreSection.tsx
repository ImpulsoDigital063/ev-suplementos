'use client'

import Image  from 'next/image'
import { motion } from 'framer-motion'

const credentials = [
  { icon: '🎓', text: 'Graduada em Farmácia — 2023'                        },
  { icon: '✅', text: 'CRF 4033-TO — Ativo e Regularizado'                 },
  { icon: '🏥', text: 'RT (Responsável Técnica) — Rede Drogasil'           },
  { icon: '📍', text: 'Filial Palmas-TO'                                    },
  { icon: '💉', text: 'Certificada em Soroterapia — 30h (Fev/2026)'        },
  { icon: '🏠', text: 'Atendimento Domiciliar em Palmas–TO'                 },
]

export default function SobreSection() {
  return (
    <section id="sobre" className="overflow-hidden" style={{ background: 'var(--rosa)' }}>
      {/* Faixa decorativa topo */}
      <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, var(--vinho-esc), var(--vinho-claro), var(--dourado))' }} />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, var(--rosa-med), transparent)', opacity: 0.6 }}
              />
              <div
                className="relative rounded-2xl overflow-hidden shadow-xl"
                style={{ width: 320, height: 420 }}
              >
                <Image
                  src="/erlane-sobre.jpg"
                  alt="Erlane Vasconcelos — Farmacêutica CRF 4033-TO"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="320px"
                  priority
                />
              </div>

              {/* Badge CRF */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl shadow-lg text-white text-sm font-bold"
                style={{ background: 'var(--vinho)' }}
              >
                CRF 4033-TO ✓
              </div>

              {/* Badge RT */}
              <div
                className="absolute -top-4 -left-4 px-3 py-2 rounded-xl shadow-lg text-sm font-semibold"
                style={{ background: 'var(--dourado)', color: 'white' }}
              >
                🏥 RT Oficial
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--vinho-claro)' }}>
              Conheça a profissional
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-2 leading-tight"
              style={{ color: 'var(--vinho-esc)', fontFamily: 'var(--font-playfair-display)' }}
            >
              Farmacêutica Certificada<br />
              <span style={{ color: 'var(--vinho)' }}>CRF 4033-TO</span>
            </h2>

            {/* Selo RT */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{ background: 'var(--vinho)', color: 'white' }}
            >
              🏥 Responsável Técnica Oficial — Drogasil
            </div>

            <div className="space-y-4 mb-8" style={{ color: 'var(--texto-leve)', lineHeight: '1.75' }}>
              <p>
                Erlane é farmacêutica formada com expertise em soroterapia funcional.
                Atua como Responsável Técnica na Rede Drogasil em Palmas-TO, garantindo
                os mais altos padrões de qualidade e segurança em cada protocolo.
              </p>
              <p>
                Em parceria com a STINPHARMA, desenvolveu protocolos exclusivos que
                combinam ciência farmacêutica avançada com cuidado personalizado,
                entregando resultados mensuráveis em semanas.
              </p>
            </div>

            {/* Credenciais */}
            <div className="space-y-3 mb-8">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-xl">{c.icon}</span>
                  <span className="text-sm font-medium" style={{ color: 'var(--texto)' }}>{c.text}</span>
                </motion.div>
              ))}
            </div>

            <a href="#protocolos" className="btn-primary">
              Ver Protocolos →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
