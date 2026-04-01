'use client'

import { motion } from 'framer-motion'

const passos = [
  {
    numero: '01',
    icone:  '📋',
    titulo: 'Avaliação Personalizada',
    desc:   'Realizamos uma avaliação completa do seu estado de saúde, objetivos e histórico. Cada protocolo é desenhado sob medida para o seu perfil único.',
  },
  {
    numero: '02',
    icone:  '🏠',
    titulo: 'Atendimento na Sua Casa',
    desc:   'Nossa farmacêutica vai até você. Sem filas, sem deslocamento. Todo o conforto do seu lar com a segurança de um atendimento clínico profissional.',
  },
  {
    numero: '03',
    icone:  '📈',
    titulo: 'Acompanhamento Contínuo',
    desc:   'Monitoramos sua evolução a cada sessão, ajustando o protocolo conforme necessário para garantir os melhores resultados possíveis.',
  },
]

export default function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="py-24" style={{ background: 'var(--fundo)' }}>
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--vinho-claro)' }}>
            Simples e transparente
          </p>
          <h2>Como Funciona</h2>
          <p>Do primeiro contato ao resultado, estamos com você em cada etapa.</p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Linha conectora vertical */}
          <div
            className="absolute left-[2.25rem] top-8 bottom-8 w-px hidden md:block"
            style={{ background: 'linear-gradient(to bottom, var(--vinho-claro), transparent)' }}
          />

          <div className="space-y-10">
            {passos.map((passo, i) => (
              <motion.div
                key={passo.numero}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="flex gap-6 items-start"
              >
                {/* Ícone circulado */}
                <div
                  className="relative z-10 flex-shrink-0 w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center text-2xl shadow-md"
                  style={{
                    background: 'white',
                    border: '2px solid var(--vinho-claro)',
                    boxShadow: '0 4px 16px rgba(107,39,55,0.12)',
                  }}
                >
                  {passo.icone}
                </div>

                {/* Texto */}
                <div
                  className="flex-1 p-6 rounded-2xl"
                  style={{
                    background: 'white',
                    border: '1px solid var(--rosa-med)',
                    boxShadow: '0 2px 12px rgba(107,39,55,0.06)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold tracking-widest"
                      style={{ color: 'var(--vinho-claro)' }}
                    >
                      PASSO {passo.numero}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: 'var(--vinho)', fontFamily: 'var(--font-playfair-display)' }}
                  >
                    {passo.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--texto-leve)' }}>
                    {passo.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/5599981140494?text=Ol%C3%A1%20Erlane!%20Quero%20agendar%20minha%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            💬 Começar Agora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
