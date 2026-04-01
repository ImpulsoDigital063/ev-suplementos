import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const posts: Record<string, {
  titulo:  string
  resumo:  string
  data:    string
  autor:   string
  conteudo: string
}> = {
  'o-que-e-soroterapia': {
    titulo:   'O que é Soroterapia e quais os benefícios?',
    resumo:   'Entenda como a soroterapia funciona, quais nutrientes são utilizados e por que os resultados são tão rápidos.',
    data:     '15 de março de 2026',
    autor:    'Erlane Vasconcelos',
    conteudo: `A soroterapia é a administração direta de vitaminas, minerais e aminoácidos na corrente sanguínea por via intravenosa (IV). Ao contornar o trato digestivo, o organismo absorve 100% dos nutrientes administrados — algo impossível pela via oral.

Os principais benefícios incluem: hidratação profunda, aumento de energia, fortalecimento imunológico, melhora da pele e cabelos, além de suporte ao emagrecimento e à recuperação muscular.

Cada protocolo é formulado de forma personalizada pela farmacêutica Erlane Vasconcelos (CRF 4033-TO), com base na avaliação individual de cada paciente.`,
  },
  'soroterapia-emagrecimento': {
    titulo:   'Soroterapia para Emagrecimento: como funciona?',
    resumo:   'Descubra como os protocolos IV podem acelerar o metabolismo e complementar sua rotina de saúde.',
    data:     '22 de março de 2026',
    autor:    'Erlane Vasconcelos',
    conteudo: `O Protocolo Emagrecimento da EV Suplementos combina compostos lipolíticos, vitaminas do complexo B e aminoácidos termogênicos administrados diretamente na corrente sanguínea.

A ação é dupla: estimula o metabolismo e favorece a quebra de gordura localizada, especialmente quando associada à alimentação equilibrada e à prática de exercícios físicos.

Os resultados são visíveis a partir da primeira semana, com redução de medidas e aumento de disposição.`,
  },
  'imunidade-vitamina-c': {
    titulo:   'Vitamina C IV: por que a via intravenosa é mais eficaz',
    resumo:   'A absorção via oral tem limite. Saiba por que a infusão direta potencializa os efeitos da vitamina C no organismo.',
    data:     '28 de março de 2026',
    autor:    'Erlane Vasconcelos',
    conteudo: `A vitamina C oral tem absorção limitada pelo intestino — doses acima de 1g por dia simplesmente são eliminadas pelo organismo. A via intravenosa supera essa barreira e permite concentrações plasmáticas muito mais elevadas.

Com altas doses de vitamina C IV, o organismo recebe suporte antioxidante potente, acelera a síntese de colágeno, fortalece o sistema imune e recupera mais rápido de infecções e estresses físicos.

O Protocolo Imunidade da EV Suplementos inclui vitamina C IV combinada a zinco, selênio e complexo B para uma resposta imune completa.`,
  },
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: 'Artigo não encontrado' }
  return {
    title:       `${post.titulo} | Blog EV Suplementos`,
    description: post.resumo,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()

  return (
    <>
      <Header />

      <main className="pt-28 pb-24 min-h-screen" style={{ background: 'var(--rosa)' }}>
        <div className="max-w-3xl mx-auto px-6">

          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" style={{ color: 'var(--texto-leve)' }}>
            <a href="/" className="hover:underline">Início</a>
            <span className="mx-2">›</span>
            <a href="/blog" className="hover:underline">Blog</a>
            <span className="mx-2">›</span>
            <span style={{ color: 'var(--vinho)' }}>{post.titulo}</span>
          </nav>

          <article className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Banner */}
            <div
              className="w-full flex items-center justify-center"
              style={{ height: '220px', background: 'linear-gradient(135deg, var(--vinho) 0%, var(--vinho-claro) 100%)' }}
            >
              <span style={{ fontSize: '4rem' }}>💉</span>
            </div>

            <div className="p-8 md:p-12 flex flex-col gap-6">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--texto-leve)' }}>
                <span>📅 {post.data}</span>
                <span>✍️ {post.autor} — Farmacêutica CRF 4033-TO</span>
              </div>

              {/* Título */}
              <h1
                style={{
                  fontFamily: 'var(--font-playfair-display)',
                  color:      'var(--vinho)',
                  fontSize:   'clamp(1.6rem, 4vw, 2.4rem)',
                  fontWeight: 700,
                  lineHeight: 1.25,
                }}
              >
                {post.titulo}
              </h1>

              {/* Resumo */}
              <p
                className="text-base font-medium"
                style={{ color: 'var(--dourado)', lineHeight: 1.6 }}
              >
                {post.resumo}
              </p>

              {/* Conteúdo */}
              <div style={{ color: 'var(--texto)', lineHeight: 1.8, fontSize: '1rem' }}>
                {post.conteudo.split('\n\n').map((paragrafo, i) => (
                  <p key={i} className="mb-5">{paragrafo}</p>
                ))}
              </div>

              {/* CTA */}
              <div
                className="mt-4 p-6 rounded-xl text-center flex flex-col gap-4"
                style={{ background: 'var(--rosa)', border: '1px solid var(--rosa-med)' }}
              >
                <p style={{ color: 'var(--vinho)', fontWeight: 600 }}>
                  Quer saber qual protocolo é ideal para você?
                </p>
                <a
                  href="https://wa.me/5599981140494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-90 mx-auto min-h-[48px]"
                  style={{ backgroundColor: 'var(--wpp)' }}
                >
                  💬 Agendar Avaliação Gratuita
                </a>
              </div>
            </div>
          </article>

          <div className="mt-8 text-center">
            <a href="/blog" className="text-sm font-medium hover:underline" style={{ color: 'var(--vinho)' }}>
              ← Voltar ao Blog
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
