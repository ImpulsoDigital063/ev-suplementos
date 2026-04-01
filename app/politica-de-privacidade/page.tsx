import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | EV Suplementos Injetáveis',
  description: 'Saiba como a EV Suplementos coleta, usa e protege seus dados pessoais em conformidade com a LGPD.',
}

const secoes = [
  {
    titulo: '1. Quem somos',
    texto: `A EV Suplementos Injetáveis é um serviço de soroterapia domiciliar conduzido pela farmacêutica Erlane Vieira (CRF 4033-TO), com sede em Palmas – TO, Brasil. Somos responsáveis pelo tratamento dos dados pessoais coletados por meio deste site e dos canais de atendimento (WhatsApp e Instagram).`,
  },
  {
    titulo: '2. Quais dados coletamos',
    texto: `Podemos coletar os seguintes dados pessoais:\n\n• Nome completo e nome social\n• Número de telefone (WhatsApp)\n• Endereço de e-mail\n• Endereço residencial (para atendimento domiciliar)\n• Informações de saúde fornecidas voluntariamente durante a anamnese (dados sensíveis)\n• Dados de navegação (cookies e logs de acesso ao site)\n\nDados de saúde são coletados exclusivamente para fins de elaboração e segurança dos protocolos de soroterapia, com base no consentimento explícito do titular.`,
  },
  {
    titulo: '3. Como usamos seus dados',
    texto: `Utilizamos seus dados para:\n\n• Agendar e realizar os atendimentos de soroterapia\n• Elaborar protocolos personalizados com segurança\n• Enviar confirmações, lembretes e orientações via WhatsApp\n• Responder dúvidas e solicitações de contato\n• Melhorar a experiência de navegação no site\n• Cumprir obrigações legais e regulatórias do Conselho Federal de Farmácia (CFF)\n\nNão utilizamos seus dados para envio de publicidade não solicitada nem os compartilhamos para fins comerciais com terceiros.`,
  },
  {
    titulo: '4. Base legal para o tratamento',
    texto: `O tratamento dos seus dados pessoais é fundamentado nas seguintes bases legais previstas na Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018):\n\n• Consentimento: para dados de saúde e comunicações de marketing\n• Execução de contrato: para realização dos atendimentos agendados\n• Legítimo interesse: para melhoria dos serviços e comunicações operacionais\n• Cumprimento de obrigação legal ou regulatória: para registros exigidos pelo CFF`,
  },
  {
    titulo: '5. Compartilhamento de dados',
    texto: `Seus dados pessoais não são vendidos. Podemos compartilhá-los somente nas seguintes situações:\n\n• Com fornecedores de tecnologia que operam o site (hospedagem, analytics) sob acordos de confidencialidade\n• Com autoridades públicas, quando exigido por lei ou ordem judicial\n• Com outros profissionais de saúde, com seu consentimento expresso, para fins de encaminhamento ou acompanhamento clínico\n\nTodos os parceiros estão sujeitos a obrigações contratuais de proteção de dados compatíveis com a LGPD.`,
  },
  {
    titulo: '6. Armazenamento e segurança',
    texto: `Seus dados são armazenados em ambientes com controle de acesso, criptografia e boas práticas de segurança da informação. Dados de saúde são tratados com nível adicional de proteção, conforme exigido pela LGPD para dados sensíveis.\n\nMantemos seus dados pelo tempo necessário para cumprimento das finalidades descritas ou por prazo mínimo exigido pela legislação aplicável (incluindo obrigações fiscais e regulatórias).`,
  },
  {
    titulo: '7. Seus direitos como titular',
    texto: `Nos termos da LGPD, você tem direito a:\n\n• Confirmar a existência de tratamento dos seus dados\n• Acessar os dados que temos sobre você\n• Corrigir dados incompletos, inexatos ou desatualizados\n• Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários\n• Revogar o consentimento a qualquer momento\n• Solicitar a portabilidade dos dados a outro fornecedor\n• Obter informações sobre o compartilhamento dos seus dados\n\nPara exercer qualquer desses direitos, entre em contato pelo WhatsApp: +55 99 98114-0494 ou pelo e-mail erlane@ev-suplementos.com. Responderemos em até 15 dias úteis.`,
  },
  {
    titulo: '8. Cookies e dados de navegação',
    texto: `Este site pode utilizar cookies técnicos essenciais para o funcionamento correto das páginas. Não utilizamos cookies de rastreamento de terceiros para publicidade. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a experiência de navegação.`,
  },
  {
    titulo: '9. Links externos',
    texto: `Este site pode conter links para plataformas externas como WhatsApp e Instagram. Não somos responsáveis pelas políticas de privacidade dessas plataformas. Recomendamos que você leia as respectivas políticas antes de fornecer seus dados.`,
  },
  {
    titulo: '10. Alterações nesta política',
    texto: `Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nos nossos serviços ou na legislação aplicável. A data da última atualização estará sempre indicada no rodapé desta página. O uso continuado do site após as alterações implica na aceitação da versão vigente.`,
  },
  {
    titulo: '11. Contato e Encarregado (DPO)',
    texto: `Dúvidas, solicitações ou reclamações relacionadas ao tratamento dos seus dados pessoais podem ser encaminhadas para:\n\nErlane Vieira — Responsável pelo tratamento de dados\nE-mail: erlane@ev-suplementos.com\nWhatsApp: +55 99 98114-0494\nEndereço: Palmas – TO, Brasil\n\nVocê também tem o direito de registrar reclamação junto à Autoridade Nacional de Proteção de Dados (ANPD): www.gov.br/anpd`,
  },
]

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section
        className="w-full text-center"
        style={{
          background:    'linear-gradient(145deg, #2C1A1D 0%, #6B2737 60%, #9B3F54 100%)',
          paddingTop:    'clamp(88px, 14vw, 128px)',
          paddingBottom: 'clamp(36px, 5vw, 56px)',
        }}
      >
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-3">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{ background: 'rgba(201,168,76,0.18)', color: 'var(--dourado)', border: '1px solid rgba(201,168,76,0.35)' }}
          >
            Transparência
          </span>
          <h1
            className="text-white font-bold"
            style={{
              fontFamily: 'var(--font-playfair-display)',
              fontSize:   'clamp(1.7rem, 4vw, 2.6rem)',
              lineHeight: 1.2,
            }}
          >
            Política de Privacidade
          </h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Última atualização: 1 de abril de 2026
          </p>
        </div>
      </section>

      <main className="pb-24 min-h-screen" style={{ background: 'var(--rosa)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10">
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 md:p-14 flex flex-col gap-10">

            {/* Introdução */}
            <p style={{ color: 'var(--texto)', lineHeight: 1.85, fontSize: '1rem' }}>
              A EV Suplementos Injetáveis valoriza e respeita a privacidade de seus clientes e visitantes. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos seus dados pessoais, em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong> e demais normas aplicáveis.
            </p>

            {/* Seções */}
            {secoes.map((s) => (
              <section key={s.titulo}>
                <h2
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-playfair-display)',
                    color:      'var(--vinho)',
                    fontSize:   '1.15rem',
                    fontWeight: 700,
                    paddingBottom: '0.5rem',
                    borderBottom: '2px solid var(--rosa-med)',
                  }}
                >
                  {s.titulo}
                </h2>
                <div style={{ color: 'var(--texto)', lineHeight: 1.85, fontSize: '0.9375rem' }}>
                  {s.texto.split('\n\n').map((bloco, i) => (
                    <p key={i} className="mb-3">{bloco}</p>
                  ))}
                </div>
              </section>
            ))}

            {/* CTA de contato */}
            <div
              className="p-6 rounded-xl text-center flex flex-col gap-4"
              style={{ background: 'linear-gradient(135deg, var(--vinho) 0%, var(--vinho-claro) 100%)' }}
            >
              <p className="text-white font-semibold">
                Dúvidas sobre sua privacidade?
              </p>
              <a
                href="https://wa.me/5599981140494"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90 mx-auto min-h-[48px]"
                style={{ backgroundColor: 'var(--wpp)' }}
              >
                💬 Falar pelo WhatsApp
              </a>
            </div>

          </div>

          <div className="mt-8 text-center">
            <a href="/" className="text-sm font-medium hover:underline" style={{ color: 'var(--vinho)' }}>
              ← Voltar ao início
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
