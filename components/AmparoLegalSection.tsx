'use client'

import { motion } from 'framer-motion'

const leis = [
  {
    codigo: 'Lei 13.021/2014',
    desc:   'Dispõe sobre o exercício e a fiscalização das atividades farmacêuticas, assegurando a atuação do farmacêutico em soroterapia.',
  },
  {
    codigo: 'Resolução CFF 499/2008',
    desc:   'Regulamenta as atribuições do farmacêutico na área de análises clínicas, toxicológicas e quimioterapia antineoplásica.',
  },
  {
    codigo: 'Resolução CFF 572/2013',
    desc:   'Regulamenta a indicação farmacêutica de produtos e serviços de saúde, incluindo protocolos de reposição nutricional.',
  },
  {
    codigo: 'RDC ANVISA 44/2009',
    desc:   'Define boas práticas farmacêuticas para a reposição de nutrientes e insumos via endovenosa ou intramuscular.',
  },
]

export default function AmparoLegalSection() {
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
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--vinho-claro)' }}>
            Transparência e segurança
          </p>
          <h2>Amparo Legal</h2>
          <p>Nossa atuação é 100% respaldada pela legislação brasileira vigente.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leis.map((lei, i) => (
            <motion.div
              key={lei.codigo}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(107,39,55,0.12)' }}
              className="p-6 rounded-2xl transition-all"
              style={{
                border: '1.5px solid var(--rosa-med)',
                background: 'white',
              }}
            >
              <div className="text-3xl mb-4">📜</div>
              <h3
                className="font-bold text-sm mb-3 leading-snug"
                style={{ color: 'var(--vinho)' }}
              >
                {lei.codigo}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--texto-leve)' }}>
                {lei.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
