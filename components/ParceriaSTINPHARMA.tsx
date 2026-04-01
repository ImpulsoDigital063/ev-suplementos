'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const bullets = [
  'Laboratório especializado em soroterapia funcional',
  'Fórmulas testadas, comprovadas e certificadas',
  'Qualidade farmacêutica de padrão hospitalar',
  'Procedimentos seguros com rastreabilidade total',
]

export default function ParceriaSTINPHARMA() {
  return (
    <section
      className="py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, var(--rosa) 0%, white 60%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Coluna esquerda — só logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div
              className="relative rounded-2xl overflow-hidden w-full flex items-center justify-center"
              style={{
                maxWidth: 420,
                height: 200,
                background: 'white',
                border: '1.5px solid var(--rosa-med)',
                boxShadow: '0 4px 20px rgba(107,39,55,0.08)',
              }}
            >
              <Image
                src="/images/stinpharma-logo.jpg"
                alt="StinPharma — Parceiro Oficial EV Suplementos"
                fill
                style={{ objectFit: 'contain', padding: '1.5rem' }}
              />
            </div>
          </motion.div>

          {/* Coluna direita — texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: 'var(--vinho-claro)' }}
            >
              Nossa parceria
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold mb-5 leading-tight"
              style={{ color: 'var(--vinho-esc)', fontFamily: 'var(--font-playfair-display)' }}
            >
              Protocolos Desenvolvidos em Parceria com{' '}
              <span style={{ color: 'var(--vinho)' }}>StinPharma</span>
            </h2>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'var(--texto-leve)' }}
            >
              A StinPharma é referência nacional em manipulação e soroterapia farmacêutica.
              Cada protocolo EV é formulado com insumos certificados, rastreados e dentro
              dos mais rígidos padrões da ANVISA, garantindo segurança e eficácia
              comprovada em cada aplicação.
            </p>

            <ul className="space-y-3 mb-8">
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: 'var(--texto)' }}
                >
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: 'var(--vinho-claro)' }}
                  >
                    ✓
                  </span>
                  {b}
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mb-6">
              <a
                href="#"
                className="btn-primary"
                style={{ fontSize: '0.875rem' }}
              >
                Conhecer StinPharma →
              </a>
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: 'var(--rosa)', border: '1px solid var(--rosa-med)', color: 'var(--vinho)' }}
              >
                🏥 Parceiro Oficial
              </div>
            </div>

            {/* Produto — ampolas StinPharma, após o texto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden w-full shadow-lg"
              style={{ height: 220, border: '1.5px solid var(--rosa-med)' }}
            >
              <Image
                src="/images/stinpharma-produto.jpg"
                alt="StinPharma STI — Ampolas para Soroterapia"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div
                className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg text-xs font-semibold text-white backdrop-blur-sm"
                style={{ background: 'rgba(107,39,55,0.75)' }}
              >
                🧪 StinPharma STI — Sistema de Tratamento Individual
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
