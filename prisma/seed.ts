import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'
import { PrismaClient } from '../app/generated/prisma/client'
import path from 'path'

const raw     = (process.env.DATABASE_URL ?? 'file:./dev.db').replace(/^file:/, '')
const url     = path.resolve(process.cwd(), raw)
const adapter = new PrismaBetterSqlite3({ url })
const prisma  = new PrismaClient({ adapter })

async function main() {
  await prisma.protocolo.deleteMany()

  await prisma.protocolo.createMany({
    data: [
      {
        nome:               'Emagrecimento',
        slug:               'emagrecimento',
        tipo:               'IV',
        icone:              '✨',
        resultado_esperado: 'Queima de gordura acelerada em 4 semanas',
        descricao:          'Acelere o metabolismo, queime gordura localizada e reduza medidas de forma segura.',
        descricao_curta:    'Acelere o metabolismo, queime gordura localizada e reduza medidas de forma segura.',
        keywords:           JSON.stringify(['emagrecimento', 'iv', 'soroterapia', 'palmas']),
        clientes_atendidos: 120,
        ativo:              true,
      },
      {
        nome:               'Energia & Foco',
        slug:               'energia-foco',
        tipo:               'IV',
        icone:              '⚡',
        resultado_esperado: 'Energia e clareza mental duradoura',
        descricao:          'Para quem se desdobra em mil e sente que a energia não acompanha o ritmo.',
        descricao_curta:    'Para quem se desdobra em mil e sente que a energia não acompanha o ritmo.',
        keywords:           JSON.stringify(['energia', 'foco', 'iv', 'soroterapia']),
        clientes_atendidos: 95,
        ativo:              true,
      },
      {
        nome:               'Beleza - Cabelo, Pele e Unhas',
        slug:               'beleza-cabelo-pele-unhas',
        tipo:               'IV',
        icone:              '💎',
        resultado_esperado: 'Pele radiante e cabelos fortes',
        descricao:          'Cabelos mais fortes, unhas resistentes e pele com mais viço e hidratação.',
        descricao_curta:    'Cabelos mais fortes, unhas resistentes e pele com mais viço e hidratação.',
        keywords:           JSON.stringify(['beleza', 'pele', 'cabelo', 'iv']),
        clientes_atendidos: 110,
        ativo:              true,
      },
      {
        nome:               'Massa Muscular',
        slug:               'massa-muscular',
        tipo:               'IV',
        icone:              '💪',
        resultado_esperado: 'Ganho de massa magra + definição',
        descricao:          'Otimize a performance, melhore a recuperação e potencialize a construção muscular.',
        descricao_curta:    'Otimize a performance, melhore a recuperação e potencialize a construção muscular.',
        keywords:           JSON.stringify(['massa muscular', 'musculação', 'iv']),
        clientes_atendidos: 85,
        ativo:              true,
      },
      {
        nome:               'Imunidade',
        slug:               'imunidade',
        tipo:               'IV',
        icone:              '🛡️',
        resultado_esperado: 'Defesas potencializadas em dias',
        descricao:          'Fortaleça suas defesas e mantenha o sistema imune em alta o ano inteiro.',
        descricao_curta:    'Fortaleça suas defesas e mantenha o sistema imune em alta o ano inteiro.',
        keywords:           JSON.stringify(['imunidade', 'imune', 'defesa', 'iv']),
        clientes_atendidos: 105,
        ativo:              true,
      },
    ],
  })

  console.log('✅ Seed executado com sucesso! 5 protocolos inseridos.')
}

main()
  .catch((e) => { console.error('❌ Erro no seed:', e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
