import Image from 'next/image'

const links = {
  rapidos: [
    { label: 'Sobre Erlane',  href: '#sobre'         },
    { label: 'Protocolos',    href: '#protocolos'    },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'FAQ',           href: '#faq'           },
    { label: 'Blog',          href: '/blog'          },
  ],
  redes: [
    { label: 'Instagram', href: 'https://www.instagram.com/ev.suplementosinjetaveis/', icon: '📸' },
    { label: 'WhatsApp',  href: 'https://wa.me/5599981140494',                         icon: '💬' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--vinho-esc)', color: 'rgba(255,255,255,0.8)' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Logo + parceria */}
          <div>
            <div className="mb-3">
              <Image
                src="/logo-sem-fundo.png"
                alt="EV Suplementos Injetáveis"
                width={220}
                height={42}
                style={{
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.92,
                }}
              />
            </div>
            <p className="text-sm leading-relaxed opacity-70 mb-4">
              Protocolos de soroterapia proprietários com atendimento domiciliar
              em Palmas–TO. Segurança, ciência e resultados reais.
            </p>
            <span
              className="inline-block text-xs px-3 py-1 rounded-full font-semibold mb-3"
              style={{ background: 'rgba(201,168,76,0.2)', color: 'var(--dourado)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              CRF 4033-TO ✓
            </span>
            {/* Logos parceiros */}
            <div className="flex gap-3 mt-3">
              <div
                className="rounded-lg overflow-hidden flex items-center justify-center"
                style={{ width: 90, height: 36, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Image src="/images/stinpharma-logo.svg" alt="STINPHARMA" width={80} height={28} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.6 }} />
              </div>
            </div>
          </div>

          {/* Col 2 — Links rápidos */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--dourado)' }}>
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {links.rapidos.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors hover:text-white opacity-70 hover:opacity-100"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contato */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--dourado)' }}>
              Contato
            </h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <span>📱</span>
                <a href="https://wa.me/5599981140494" className="hover:text-white hover:opacity-100 transition-colors">
                  +55 99 98114-0494
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:erlane@ev-suplementos.com" className="hover:text-white hover:opacity-100 transition-colors">
                  erlane@ev-suplementos.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Palmas – TO, Brasil</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Seg–Sáb: 8h às 19h</span>
              </li>
            </ul>
          </div>

          {/* Col 4 — Redes sociais */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--dourado)' }}>
              Redes Sociais
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {links.redes.map(r => (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg transition-all hover:text-white"
                  style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <span>{r.icon}</span>
                  <span className="opacity-70">{r.label}</span>
                </a>
              ))}
            </div>
            {/* Política */}
            <a
              href="/politica-de-privacidade"
              className="text-xs opacity-50 hover:opacity-80 transition-opacity underline"
            >
              Política de Privacidade
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs opacity-40"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <span>© {new Date().getFullYear()} EV Suplementos Injetáveis. Todos os direitos reservados.</span>
          <span>Farmacêutica Erlane Vieira — CRF 4033-TO</span>
        </div>
      </div>
    </footer>
  )
}
