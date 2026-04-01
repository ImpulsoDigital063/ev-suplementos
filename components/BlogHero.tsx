'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {
  titulo:    string
  subtitulo?: string
  data?:     string
  mins?:     number
}

const fadeUp = (delay: number) => ({
  initial:    { opacity: 0, y: 18 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.55, delay, ease: 'easeOut' as const },
})

export default function BlogHero({ titulo, subtitulo, data, mins }: Props) {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-end text-center overflow-hidden"
      style={{
        background:     'linear-gradient(145deg, #2C1A1D 0%, #6B2737 60%, #9B3F54 100%)',
        paddingTop:     'clamp(88px, 14vw, 128px)',
        paddingBottom:  'clamp(36px, 5vw, 60px)',
      }}
    >
      {/* glow dourado */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 90%, rgba(201,168,76,0.09) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 flex flex-col items-center gap-3 px-6 max-w-2xl mx-auto w-full">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <Image
            src="/logo-sem-fundo.png"
            alt="EV Suplementos Injetáveis"
            width={252}
            height={68}
            priority
            style={{
              width:  'clamp(120px, 28vw, 180px)',
              height: 'auto',
              filter: 'brightness(0) invert(1)',
              opacity: 0.92,
            }}
          />
        </motion.div>

        {/* Pill de categoria */}
        <motion.span
          {...fadeUp(0.15)}
          className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
          style={{
            background: 'rgba(201,168,76,0.18)',
            color:      'var(--dourado)',
            border:     '1px solid rgba(201,168,76,0.35)',
          }}
        >
          {subtitulo ?? 'Blog'}
        </motion.span>

        {/* Título */}
        <motion.h1
          {...fadeUp(0.25)}
          className="text-white font-bold"
          style={{
            fontFamily: 'var(--font-playfair-display)',
            fontSize:   'clamp(1.5rem, 4vw, 2.6rem)',
            lineHeight: 1.2,
          }}
        >
          {titulo}
        </motion.h1>

        {/* Meta — data e tempo de leitura */}
        {(data || mins) && (
          <motion.div
            {...fadeUp(0.38)}
            className="flex flex-wrap items-center justify-center gap-2 text-xs"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            {data  && <span>📅 {data}</span>}
            {data  && mins && <span style={{ opacity: 0.4 }}>•</span>}
            {mins  && <span>⏱ {mins} min de leitura</span>}
          </motion.div>
        )}
      </div>
    </section>
  )
}
