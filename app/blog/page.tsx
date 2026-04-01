import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogHero from '@/components/BlogHero'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Dicas e Informações sobre Soroterapia | EV Suplementos',
  description: 'Artigos sobre soroterapia, saúde, beleza e bem-estar por Erlane Vieira, farmacêutica CRF 4033-TO.',
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
  {
    slug:    'glutationa-iv-antioxidante',
    titulo:  'Glutationa IV: o antioxidante mais poderoso do organismo',
    resumo:  'Conheça a glutationa, a molécula responsável por desintoxicar células, clarear a pele e combater o envelhecimento precoce.',
    data:    '3 de abril de 2026',
    imagem:  null,
  },
  {
    slug:    'soroterapia-pele-rejuvenescimento',
    titulo:  'Soroterapia para Pele: hidratação profunda e rejuvenescimento',
    resumo:  'Descubra como a infusão de colágeno, biotina e vitaminas transforma a saúde da pele de dentro para fora.',
    data:    '8 de abril de 2026',
    imagem:  null,
  },
  {
    slug:    'soroterapia-pos-treino',
    titulo:  'Soroterapia Pós-Treino: recuperação muscular acelerada',
    resumo:  'Atletas e praticantes de exercício já descobriram como a reposição IV encurta o tempo de recuperação e melhora a performance.',
    data:    '14 de abril de 2026',
    imagem:  null,
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />

      <BlogHero
        titulo="Blog"
        subtitulo="Conteúdo"
      />

      <main className="pb-24 min-h-screen" style={{ background: 'var(--rosa)' }}>
        <div className="max-w-6xl mx-auto px-6 pt-14">

          {/* Grid de artigos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col"
                style={{ borderLeft: '4px solid var(--vinho-claro)' }}
              >
                {/* Thumbnail */}
                <div className="relative w-full overflow-hidden" style={{ height: '180px' }}>
                  <Image
                    src="/logo-banner.png"
                    alt="EV Suplementos"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
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
