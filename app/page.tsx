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
export default function Home() {
 const protocolos = [
  {
    id: '1',
    nome: 'Emagrecimento',
    icone: '🔥',
    resultado_esperado: 'Redução de medidas e gordura corporal',
    descricao_curta: 'Acelere o metabolismo e elimine gordura localizada com segurança.',
    clientes_atendidos: 120
  },
  {
    id: '2',
    nome: 'Energia & Foco',
    icone: '⚡',
    resultado_esperado: 'Mais disposição e clareza mental',
    descricao_curta: 'Recupere sua energia e aumente seu foco no dia a dia.',
    clientes_atendidos: 95
  },
  {
    id: '3',
    nome: 'Beleza - Cabelo, Pele e Unhas',
    icone: '✨',
    resultado_esperado: 'Mais viço, força e hidratação',
    descricao_curta: 'Fortaleça cabelos, unhas e melhore a qualidade da pele.',
    clientes_atendidos: 80
  },
  {
    id: '4',
    nome: 'Massa Muscular',
    icone: '💪',
    resultado_esperado: 'Ganho de massa e recuperação muscular',
    descricao_curta: 'Potencialize seus resultados físicos com suporte nutricional.',
    clientes_atendidos: 70
  },
  {
    id: '5',
    nome: 'Imunidade',
    icone: '🛡️',
    resultado_esperado: 'Sistema imune fortalecido',
    descricao_curta: 'Aumente sua resistência e proteção contra doenças.',
    clientes_atendidos: 110
  }
]

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
