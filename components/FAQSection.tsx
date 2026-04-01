'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'A soroterapia é segura? Quem pode fazer?',
    a: 'A soroterapia é um procedimento seguro quando realizado por profissional habilitado. É indicada para adultos em bom estado de saúde geral. Em nossa avaliação inicial identificamos qualquer contraindicação para garantir a segurança total do procedimento.',
  },
  {
    q: 'Preciso de receita médica?',
    a: 'Para a maioria dos nossos protocolos não é necessária receita médica prévia. Nossa farmacêutica CRF 4033-TO possui habilitação plena para prescrever e aplicar os protocolos de soroterapia. Casos específicos serão avaliados individualmente.',
  },
  {
    q: 'Quanto tempo dura uma sessão?',
    a: 'A duração varia conforme o protocolo escolhido. Em média, uma sessão de soroterapia IV dura entre 45 minutos e 1h30. Aplicações IM são mais rápidas, em torno de 15 minutos. A avaliação inicial dura aproximadamente 30 minutos.',
  },
  {
    q: 'Quais bairros de Palmas você atende?',
    a: 'Atendemos toda a região de Palmas–TO, incluindo os principais bairros e quadras sul e norte. O atendimento domiciliar cobre a maioria dos endereços da capital. Entre em contato para confirmar a disponibilidade na sua região.',
  },
  {
    q: 'Em quanto tempo vejo resultados?',
    a: 'Os primeiros efeitos são perceptíveis já nas primeiras sessões — energia, disposição e bem-estar melhoram rapidamente. Resultados mais expressivos como perda de gordura ou ganho muscular são observados a partir da 2ª–4ª semana de protocolo contínuo.',
  },
  {
    q: 'Como faço para agendar?',
    a: 'O agendamento é feito diretamente pelo WhatsApp, de forma simples e rápida. Basta clicar no botão "Agendar Avaliação" em qualquer parte desta página, enviar uma mensagem e combinar horário, endereço e protocolo desejado.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--vinho-claro)' }}>
            Tire suas dúvidas
          </p>
          <h2>Perguntas Frequentes</h2>
          <p>Respondemos as principais dúvidas sobre nossos protocolos e atendimento.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid var(--rosa-med)' }}
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
                style={{
                  background: openIndex === i ? 'var(--rosa)' : 'white',
                  color: 'var(--texto)',
                }}
              >
                <span className="font-semibold text-sm pr-4" style={{ color: openIndex === i ? 'var(--vinho)' : 'var(--texto)' }}>
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-lg font-light"
                  style={{ color: 'var(--vinho-claro)' }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' as const }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p
                      className="px-5 pb-5 pt-1 text-sm leading-relaxed"
                      style={{ color: 'var(--texto-leve)' }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-sm mb-4" style={{ color: 'var(--texto-leve)' }}>
            Ainda tem dúvidas? Fale diretamente conosco.
          </p>
          <a
            href="https://wa.me/5599981140494"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            💬 Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
