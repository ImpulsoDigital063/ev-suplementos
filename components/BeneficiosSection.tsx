'use client'

import { motion } from 'framer-motion'

const beneficios = [
  {
    icone: '✨',
    titulo: 'Totalmente Seguro',
    desc: 'Desenvolvido por farmacêutica certificada com protocolos testados e aprovados.',
  },
  {
    icone: '🏥',
    titulo: 'Atendimento Domiciliar',
    desc: 'Conforto e privacidade do atendimento realizado na sua própria casa.',
  },
  {
    icone: '📊',
    titulo: 'Resultados Comprovados',
    desc: '150+ clientes com transformações reais e satisfação comprovada.',
  },
  {
    icone: '👩‍⚕️',
    titulo: 'Profissional Certificada',
    desc: 'Erlane possui CRF 4033-TO ativo e formação especializada em soroterapia.',
  },
  {
    icone: '💉',
    titulo: 'Protocolo Proprietário',
    desc: 'Fórmulas únicas desenvolvidas exclusivamente para EV Suplementos.',
  },
  {
    icone: '⚡',
    titulo: 'Rápido & Eficaz',
    desc: 'Resultados visíveis em semanas. Sem efeitos colaterais.',
  },
]

export default function BeneficiosSection() {
  return (
    <section className="py-24" style={{ background: 'var(--fundo)' }}>
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--vinho-claro)' }}>
            Nossos diferenciais
          </p>
          <h2>Por que Escolher os Protocolos da EV?</h2>
          <p>Cada detalhe foi pensado para garantir a sua segurança e os melhores resultados.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((b, i) => (
            <motion.div
              key={b.titulo}
              initial={{ opacity: 0, y: 25, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(107,39,55,0.12)' }}
              className="bg-white p-7 rounded-2xl transition-all"
              style={{ border: '1.5px solid var(--rosa-med)' }}
            >
              <div className="text-5xl mb-4">{b.icone}</div>
              <h3
                className="font-bold text-base mb-2"
                style={{ color: 'var(--vinho)', fontFamily: 'var(--font-playfair-display)' }}
              >
                {b.titulo}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--texto-leve)' }}>
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
