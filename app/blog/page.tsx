import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Dicas e Informações sobre Soroterapia | EV Suplementos',
  description: 'Artigos sobre soroterapia, saúde, beleza e bem-estar por Erlane Vasconcelos, farmacêutica CRF 4033-TO.',
}

const posts = [
  {
    slug:    'o-que-e-soroterapia',
    titulo:  'O que é Soroterapia e quais os benefícios?',
    resumo:  'Entenda como a soroterapia funciona, quais nutrientes são utilizados e por que os resultados são tão rápidos.',
    data:    '15 de março de 2026',
    imagem:  null,
  },
  {
    slug:    'soroterapia-emagrecimento',
    titulo:  'Soroterapia para Emagrecimento: como funciona?',
    resumo:  'Descubra como os protocolos IV podem acelerar o metabolismo e complementar sua rotina de saúde.',
    data:    '22 de março de 2026',
    imagem:  null,
  },
  {
    slug:    'imunidade-vitamina-c',
    titulo:  'Vitamina C IV: por que a via intravenosa é mais eficaz',
    resumo:  'A absorção via oral tem limite. Saiba por que a infusão direta potencializa os efeitos da vitamina C no organismo.',
    data:    '28 de março de 2026',
    imagem:  null,
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />

      <main className="pt-28 pb-24 min-h-screen" style={{ background: 'var(--rosa)' }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Cabeçalho */}
          <div className="section-header mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--vinho-claro)' }}>
              Conteúdo
            </p>
            <h1 style={{ fontFamily: 'var(--font-playfair-display)', color: 'var(--vinho)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700 }}>
              Blog
            </h1>
            <p style={{ color: 'var(--texto-leve)', maxWidth: '520px', margin: '0 auto' }}>
              Dicas, ciência e informações sobre soroterapia, saúde e bem-estar.
            </p>
          </div>

          {/* Grid de artigos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col"
                style={{ borderLeft: '4px solid var(--vinho-claro)' }}
              >
                {/* Imagem placeholder */}
                <div
                  className="w-full flex items-center justify-center"
                  style={{ height: '180px', background: 'linear-gradient(135deg, var(--vinho) 0%, var(--vinho-claro) 100%)' }}
                >
                  <span style={{ fontSize: '3rem' }}>💉</span>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <p className="text-xs font-medium" style={{ color: 'var(--texto-leve)' }}>{post.data}</p>
                  <h2
                    style={{
                      fontFamily: 'var(--font-playfair-display)',
                      color:      'var(--vinho)',
                      fontSize:   '1.1rem',
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {post.titulo}
                  </h2>
                  <p className="text-sm flex-1" style={{ color: 'var(--texto-leve)', lineHeight: 1.65 }}>
                    {post.resumo}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-75"
                    style={{ color: 'var(--vinho)' }}
                  >
                    Ler mais →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
