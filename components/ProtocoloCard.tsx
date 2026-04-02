'use client'

import { motion } from 'framer-motion'

export interface Protocolo {
  id:                  string
  nome:                string
  icone:               string
  resultado_esperado:  string
  descricao_curta?:    string
  clientes_atendidos:  number
}

interface Props {
  protocolo: Protocolo
  index?:    number
}

export default function ProtocoloCard({ protocolo, index = 0 }: Props) {
  const { nome, icone, resultado_esperado, clientes_atendidos } = protocolo

  const handleAgendar = () => {
    const msg = encodeURIComponent(`Olá! Tenho interesse no protocolo "${nome}".`)
    window.open(`https://wa.me/5599981140494?text=${msg}`, '_blank')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(107,39,55,0.18)' }}
      whileTap={{ scale: 0.98 }}
      className="shimmer-card bg-white rounded-xl p-8 shadow-md w-full flex flex-col gap-4 cursor-default"
      style={{ borderLeft: '4px solid var(--vinho-claro)' }}
    >
      {/* Ícone */}
      <div style={{ fontSize: '3rem', lineHeight: 1 }}>{icone}</div>

      {/* Nome */}
      <h3
        style={{
          color:      'var(--vinho)',
          fontFamily: 'var(--font-playfair-display)',
          fontSize:   '1.35rem',
          fontWeight: 700,
          lineHeight: 1.25,
        }}
      >
        {nome}
      </h3>

      {/* Resultado esperado */}
      <p style={{ color: 'var(--dourado)', fontSize: '0.95rem', fontWeight: 600 }}>
        ✨ {resultado_esperado}
      </p>

      {protocolo.descricao_curta && (
        <p className="text-sm text-texto-leve">{protocolo.descricao_curta}</p>
      )}

      {/* Selo + clientes */}
      <div className="flex flex-col gap-1.5 mt-auto">
        <p className="text-xs italic" style={{ color: 'var(--vinho-esc)' }}>
          🔒 Protocolo Proprietário EV
        </p>
        <p className="text-xs" style={{ color: 'var(--texto-leve)' }}>
          👥 +{clientes_atendidos} clientes transformados
        </p>
      </div>

      {/* CTA */}
      <button
        onClick={handleAgendar}
        className="w-full py-3 rounded-lg font-semibold text-white text-sm transition-all hover:brightness-110 active:scale-95 min-h-[48px]"
        style={{ background: 'var(--vinho)' }}
      >
        💬 Agendar Avaliação
      </button>
    </motion.div>
  )
}
