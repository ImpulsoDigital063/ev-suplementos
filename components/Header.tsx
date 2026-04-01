'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { href: '#sobre',         label: 'Sobre'         },
  { href: '#protocolos',    label: 'Protocolos'    },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#faq',           label: 'FAQ'           },
  { href: '/blog',          label: 'Blog'          },
]

export default function Header() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const atTop = !scrolled

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[99] transition-all duration-300"
      style={{
        background:    atTop && !open ? 'transparent' : 'rgba(255,255,255,0.97)',
        backdropFilter: atTop && !open ? 'none' : 'blur(12px)',
        boxShadow:     atTop && !open ? 'none' : '0 1px 24px rgba(0,0,0,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

        {/* Logo + parceria */}
        <a href="/" className="flex flex-col leading-none gap-0.5 min-w-0">
          <span
            className="text-xl font-bold tracking-tight transition-colors duration-300 whitespace-nowrap"
            style={{
              color:      atTop && !open ? 'white' : 'var(--vinho)',
              fontFamily: 'var(--font-playfair-display)',
            }}
          >
            EV Suplementos
          </span>
        </a>

        {/* Nav — desktop */}
        <nav className="hidden md:flex items-center gap-7 flex-1 justify-center">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-75 whitespace-nowrap"
              style={{ color: atTop ? 'rgba(255,255,255,0.85)' : 'var(--texto)' }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA — desktop */}
        <a
          href="https://wa.me/5599981140494"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90 whitespace-nowrap min-h-[44px]"
          style={{ backgroundColor: 'var(--wpp)' }}
        >
          💬 Agendar
        </a>

        {/* Hambúrguer — mobile */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden flex flex-col justify-center gap-[6px] w-10 h-10 p-1.5 flex-shrink-0"
        >
          {[
            { transform: open ? 'translateY(8px) rotate(45deg)'  : 'none', hide: false },
            { transform: 'none',                                             hide: open },
            { transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none', hide: false },
          ].map((line, i) => (
            <span
              key={i}
              className="block h-0.5 rounded-full transition-all duration-300 origin-center"
              style={{
                backgroundColor: atTop && !open ? 'white' : 'var(--vinho)',
                transform:       line.transform,
                opacity:         line.hide ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Menu mobile — drawer animado */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="md:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-6 pb-6 pt-3"
              style={{ borderTop: '1px solid rgba(107,39,55,0.1)' }}
            >
              {navLinks.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.18 }}
                  className="py-3 text-sm font-medium border-b transition-colors"
                  style={{ color: 'var(--texto)', borderColor: 'rgba(0,0,0,0.06)' }}
                >
                  {label}
                </motion.a>
              ))}
              <a
                href="https://wa.me/5599981140494"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-white text-sm font-semibold w-full min-h-[48px]"
                style={{ backgroundColor: 'var(--wpp)' }}
              >
                💬 Agendar Avaliação Gratuita
              </a>
              <div
                className="mt-3 flex flex-wrap gap-2 justify-center pt-2"
                style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}
              >
                <span
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ background: 'var(--rosa)', color: 'var(--vinho)', border: '1px solid var(--rosa-med)' }}
                >
                  🏥 STINPHARMA
                </span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
