'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

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
        height: open ? 'auto' : undefined,
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between gap-4"
        style={{ height: open ? 'auto' : 'clamp(48px, 7vw, 60px)' }}
      >

        {/* Logo */}
        <a href="/" className="flex items-center min-w-0 flex-shrink-0 translate-y-2 md:translate-y-0">
          <Image
            src="/images/ev-logo-header.png"
            alt="EV Suplementos Injetáveis"
            width={436}
            height={307}
            priority
            style={{
              height: '50px',
              width:  'auto',
              display: 'block',
              filter: atTop && !open
                ? 'brightness(0) invert(1)'
                : 'none',
              transition: 'filter 0.3s ease',
            }}
          />
        </a>

        {/* Nav — desktop */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-7 flex-1 justify-center">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-xs lg:text-sm font-medium transition-colors duration-200 hover:opacity-75 whitespace-nowrap"
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
          className="hidden md:inline-flex items-center gap-2 px-3 lg:px-5 py-2 lg:py-2.5 rounded-lg text-white text-xs lg:text-sm font-semibold transition-opacity hover:opacity-90 whitespace-nowrap min-h-[36px] lg:min-h-[44px]"
          style={{ backgroundColor: 'var(--wpp)' }}
        >
          💬 Agendar
        </a>

        {/* Blog + Hambúrguer — mobile */}
        <div className="md:hidden flex items-center gap-2 ml-auto flex-shrink-0">
          <a
            href="/blog"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-white text-xs font-semibold"
            style={{ backgroundColor: 'var(--vinho)' }}
          >
            📝 Blog
          </a>
          <a
            href="https://wa.me/5599981140494"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-white text-xs font-semibold"
            style={{ backgroundColor: 'var(--wpp)' }}
          >
            💬 Agendar
          </a>
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1 flex-shrink-0"
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
