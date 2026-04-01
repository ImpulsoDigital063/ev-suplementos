import Header               from '@/components/Header'
import Hero                 from '@/components/Hero'
import BeneficiosComBadges  from '@/components/BeneficiosComBadges'
import NumerosSection       from '@/components/NumerosSection'
import SobreSection         from '@/components/SobreSection'
import ProtocoloCard        from '@/components/ProtocoloCard'
import BeneficiosSection    from '@/components/BeneficiosSection'
import ComoFuncionaSection  from '@/components/ComoFuncionaSection'
import AmparoLegalSection   from '@/components/AmparoLegalSection'
import ParceriaSTINPHARMA   from '@/components/ParceriaSTINPHARMA'
import AvaliacaoGratuita    from '@/components/AvaliacaoGratuita'
import FAQSection           from '@/components/FAQSection'
import CTAFinalSection      from '@/components/CTAFinalSection'
import Footer               from '@/components/Footer'
import { prisma }           from '@/lib/prisma'

export default async function Home() {
  const protocolos = await prisma.protocolo.findMany({
    where:   { ativo: true },
    orderBy: { nome: 'asc' },
  })

  return (
    <>
      <Header />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Badges de credibilidade */}
      <BeneficiosComBadges />

      {/* 3. Números */}
      <NumerosSection />

      {/* 5. Protocolos */}
      <section id="protocolos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-header">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--vinho-claro)' }}>
              Nossos serviços
            </p>
            <h2>Protocolos Proprietários</h2>
            <p>Desenvolvidos especialmente para você. Resultados reais em semanas.</p>
          </div>

          {protocolos.length === 0 ? (
            <p className="text-center" style={{ color: 'var(--texto-leve)' }}>
              Protocolos em breve.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {protocolos.map((p, i) => (
                <ProtocoloCard
                  key={p.id}
                  index={i}
                  protocolo={{
                    id:                  p.id,
                    nome:                p.nome,
                    icone:               p.icone,
                    resultado_esperado:  p.resultado_esperado,
                    descricao_curta:     p.descricao_curta,
                    clientes_atendidos:  p.clientes_atendidos,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 6. Sobre */}
      <SobreSection />

      {/* 7. Por que escolher */}
      <BeneficiosSection />

      {/* 7. Como Funciona */}
      <ComoFuncionaSection />

{/* 9. Amparo Legal */}
      <AmparoLegalSection />

      {/* 10. Parceria STINPHARMA */}
      <ParceriaSTINPHARMA />

      {/* 11. Avaliação / Contato */}
      <AvaliacaoGratuita />

      {/* 12. FAQ */}
      <FAQSection />

      {/* 13. CTA Final */}
      <CTAFinalSection />

      {/* 14. Footer */}
      <Footer />
    </>
  )
}
