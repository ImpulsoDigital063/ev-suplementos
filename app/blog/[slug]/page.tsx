import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogHero from '@/components/BlogHero'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Post = {
  titulo:      string
  resumo:      string
  data:        string
  autor:       string
  conteudo:    string
  relacionados: string[]
}

const posts: Record<string, Post> = {
  'o-que-e-soroterapia': {
    titulo:   'O que é Soroterapia e quais os benefícios?',
    resumo:   'Entenda como a soroterapia funciona, quais nutrientes são utilizados e por que os resultados são tão rápidos.',
    data:     '15 de março de 2026',
    autor:    'Erlane Vieira',
    relacionados: ['soroterapia-emagrecimento', 'imunidade-vitamina-c', 'glutationa-iv-antioxidante'],
    conteudo: `## O que é a soroterapia?

A soroterapia — também chamada de nutrição intravenosa ou terapia IV — é a administração direta de vitaminas, minerais, aminoácidos e outros compostos bioativos na corrente sanguínea por meio de um acesso venoso. Ao contornar completamente o trato digestivo, o organismo absorve 100% dos nutrientes infundidos, algo fisiologicamente impossível pela via oral, onde fatores como pH gástrico, enzimas digestivas e a capacidade absortiva do intestino limitam e degradam grande parte do que é ingerido.

## Uma técnica com décadas de evidência

A terapia intravenosa de micronutrientes tem suas raízes no trabalho do médico John Myers na década de 1960, que desenvolveu o que ficou conhecido como "Myers' Cocktail" — uma combinação de magnésio, cálcio, vitaminas do complexo B e vitamina C. Desde então, décadas de uso clínico e um crescente corpo de pesquisas documentaram a eficácia da via IV para diversas condições, desde fadiga crônica até suporte oncológico complementar. A medicina funcional moderna evoluiu esses protocolos com composições muito mais precisas e personalizadas.

## Por que a via intravenosa é superior à oral?

A absorção de nutrientes pela via oral é limitada por múltiplos fatores: a acidez do estômago destrói parte das vitaminas sensíveis, o intestino delgado tem capacidade de transporte saturável (especialmente para vitamina C, magnésio e zinco), e o fígado metaboliza uma fração dos compostos antes que cheguem à circulação sistêmica — o chamado "efeito de primeira passagem". A via IV elimina todas essas barreiras: os nutrientes entram diretamente na corrente sanguínea em concentrações que seriam impossíveis de atingir com qualquer suplementação oral, mesmo em megadoses.

## Os principais nutrientes utilizados nos protocolos

Cada protocolo é formulado com ativos específicos para o objetivo de cada paciente. Os compostos mais utilizados incluem: vitamina C em altas doses, com potente ação antioxidante e estimuladora de colágeno; complexo B (B1, B2, B3, B5, B6, B9 e B12) para energia celular e função neurológica; magnésio, fundamental para mais de 300 reações enzimáticas; zinco e selênio, cofatores imunes e antioxidantes; glutationa, o principal antioxidante intracelular do organismo; aminoácidos essenciais para síntese proteica e recuperação muscular; e ácido hialurônico para hidratação profunda da pele.

## Quais condições a soroterapia pode beneficiar?

A amplitude de aplicações é um dos aspectos mais relevantes da terapia IV. Entre os usos mais documentados estão: fadiga crônica e síndrome do esgotamento, imunidade baixa com infecções frequentes, recuperação pós-treino e performance atlética, envelhecimento cutâneo e rejuvenescimento, suporte ao emagrecimento e aceleração metabólica, desintoxicação hepática, enxaqueca e dores de cabeça recorrentes, e preparação ou recuperação de procedimentos estéticos. Para saber mais sobre os protocolos de [emagrecimento](/blog/soroterapia-emagrecimento) ou [imunidade](/blog/imunidade-vitamina-c), confira os artigos específicos aqui no blog.

## Como é uma sessão de soroterapia?

A sessão começa com uma anamnese conduzida pela farmacêutica Erlane Vieira (CRF 4033-TO), que avalia o histórico de saúde, queixas, objetivos e possíveis contraindicações. Com base nessa avaliação, o protocolo é formulado de forma individualizada. Durante a infusão, o paciente fica confortavelmente reclinado enquanto a solução é administrada por via intravenosa em um acesso periférico. A duração varia entre 30 e 60 minutos dependendo do protocolo. Após a sessão, é comum sentir aumento imediato de energia e bem-estar.

## Segurança e quem pode fazer

A soroterapia é considerada segura quando realizada por profissional habilitado, com materiais estéreis e descartáveis e soluções manipuladas em farmácia de manipulação registrada. Na EV Suplementos, todos os procedimentos são realizados com rigor técnico pela farmacêutica responsável. As principais contraindicações incluem insuficiência renal avançada, alergia conhecida a algum dos componentes do protocolo, e gravidez (dependendo dos ativos). Grávidas, lactantes e pessoas com condições sistêmicas devem consultar seu médico antes de iniciar qualquer protocolo IV.

## Quantas sessões são necessárias?

Diferente de medicamentos com efeito pontual, a soroterapia produz resultados cumulativos. Os primeiros efeitos percebidos são aumento de energia e bem-estar, geralmente já após a primeira sessão. Benefícios estruturais — como melhora de pele, fortalecimento imune e composição corporal — se consolidam ao longo de um ciclo de 4 a 12 sessões, dependendo do protocolo e do objetivo. A manutenção mensal sustenta e aprofunda os resultados obtidos.`,
  },

  'soroterapia-emagrecimento': {
    titulo:   'Soroterapia para Emagrecimento: como funciona?',
    resumo:   'Descubra como os protocolos IV podem acelerar o metabolismo e complementar sua rotina de saúde.',
    data:     '22 de março de 2026',
    autor:    'Erlane Vieira',
    relacionados: ['o-que-e-soroterapia', 'soroterapia-pos-treino', 'imunidade-vitamina-c'],
    conteudo: `## Emagrecimento e metabolismo: o que realmente importa

Emagrecer vai muito além de "comer menos e se exercitar mais". O metabolismo é uma rede complexa de reações bioquímicas que converte alimentos em energia, regula hormônios, controla o armazenamento de gordura e determina a disposição para atividades físicas. Quando há deficiência de micronutrientes-chave — vitaminas do complexo B, magnésio, zinco, carnitina — essas reações ficam comprometidas e o organismo entra em modo de economia energética: queima menos gordura, retém mais líquido e produz mais hormônios do estresse como o cortisol, que estimula o acúmulo de gordura abdominal.

## O papel das vitaminas do complexo B no metabolismo

As vitaminas B1, B2, B3, B5 e B6 são cofatores indispensáveis nas reações que transformam carboidratos, proteínas e gorduras em energia celular (ATP). Sem elas, o ciclo de Krebs — a principal via de geração energética do organismo — opera em capacidade reduzida. O resultado prático é uma sensação constante de cansaço mesmo sem grande esforço físico, dificuldade de perder peso mesmo com dieta controlada e pouca disposição para exercícios. A reposição IV dessas vitaminas restaura a eficiência metabólica de forma rápida e completa.

## Compostos lipolíticos: quebrando gordura de dentro para fora

O Protocolo Emagrecimento da EV Suplementos inclui compostos com ação lipolítica direta — substâncias que estimulam a liberação de ácidos graxos dos adipócitos (células de gordura) para serem utilizados como combustível. Entre os principais estão a L-carnitina, responsável por transportar ácidos graxos para dentro das mitocôndrias onde são queimados; a colina, que previne o acúmulo de gordura no fígado e favorece a lipólise; e o inositol, que melhora a sensibilidade à insulina e reduz o armazenamento de gordura visceral. Administrados por via IV, esses compostos chegam às células adiposas em concentrações muito superiores às possíveis pela via oral.

## Aminoácidos termogênicos e síntese muscular

O músculo é o principal tecido metabolicamente ativo do organismo — quanto mais massa muscular, maior a taxa metabólica basal. O protocolo inclui aminoácidos essenciais que estimulam a síntese de massa magra enquanto preservam o músculo existente durante o processo de emagrecimento. Essa combinação é fundamental: emagrecer sem preservar a massa muscular resulta em redução da taxa metabólica basal, tornando cada vez mais difícil manter o peso perdido.

## O papel da hidratação e dos eletrólitos

A desidratação crônica — mesmo moderada — reduz o metabolismo em até 3% e prejudica a queima de gordura. Muitas pessoas confundem sede com fome, ingerindo calorias desnecessárias. Além disso, baixos níveis de magnésio estão associados à resistência à insulina, ao aumento do cortisol e à maior tendência ao acúmulo de gordura abdominal. A infusão de eletrólitos balanceados pela via IV corrige essas deficiências rapidamente, otimizando o ambiente metabólico para o emagrecimento. Para entender melhor o papel da vitamina C e de outros antioxidantes nesse processo, leia também nosso artigo sobre [Vitamina C IV](/blog/imunidade-vitamina-c).

## Resultados: o que esperar e em quanto tempo

A soroterapia para emagrecimento não substitui uma alimentação equilibrada e a prática de exercícios — ela potencializa e acelera os resultados de quem já adota essas práticas. Nas primeiras sessões, os efeitos mais imediatos são aumento significativo de energia e disposição, redução do inchaço e melhora do humor. Com a continuidade do protocolo (geralmente 8 a 12 sessões), pacientes relatam redução visível de medidas, especialmente abdominal, melhora na composição corporal com preservação de massa magra e metabolismo mais ativo ao longo do dia.

## Para quem é indicado?

O protocolo é indicado para pessoas com dificuldade de perder peso apesar de dieta e exercício, fadiga que compromete a consistência nos treinos, suspeita de deficiências nutricionais que travam o metabolismo, síndrome metabólica ou resistência à insulina, e quem busca potencializar resultados de um programa de emagrecimento já em curso. Para quem treina, a combinação com o [Protocolo Pós-Treino](/blog/soroterapia-pos-treino) maximiza tanto a queima de gordura quanto a preservação muscular.

## Frequência e acompanhamento

A farmacêutica Erlane Vieira (CRF 4033-TO) realiza uma avaliação completa antes de iniciar o protocolo, considerando histórico de saúde, exames laboratoriais disponíveis e objetivos individuais. O ciclo padrão é de uma sessão semanal por 8 a 12 semanas, com ajuste das concentrações conforme a resposta de cada paciente. Após o ciclo inicial, sessões de manutenção quinzenais ou mensais sustentam os resultados obtidos.`,
  },

  'imunidade-vitamina-c': {
    titulo:   'Vitamina C IV: por que a via intravenosa é mais eficaz',
    resumo:   'A absorção via oral tem limite. Saiba por que a infusão direta potencializa os efeitos da vitamina C no organismo.',
    data:     '28 de março de 2026',
    autor:    'Erlane Vieira',
    relacionados: ['o-que-e-soroterapia', 'glutationa-iv-antioxidante', 'soroterapia-pele-rejuvenescimento'],
    conteudo: `## A vitamina C e o sistema imune: uma relação fundamental

A vitamina C (ácido ascórbico) é um dos micronutrientes mais estudados da medicina. Ela é indispensável para o funcionamento adequado do sistema imune: estimula a produção e a função de neutrófilos e linfócitos (células de defesa), aumenta a síntese de anticorpos, e fortalece as barreiras físicas do organismo — pele e mucosas — contra a entrada de patógenos. Além disso, atua como antioxidante potente, neutralizando radicais livres gerados pela inflamação e protegendo as próprias células imunes do dano oxidativo que acompanha o combate a infecções.

## O problema da absorção oral

O grande limitante da suplementação oral de vitamina C é a saturação intestinal. O intestino absorve a vitamina C por meio de transportadores ativos (SVCT1 e SVCT2) que têm capacidade limitada. Acima de 200 mg por dose, a eficiência de absorção começa a cair. Com 1 g, absorve-se cerca de 50% da dose. Com 2 g ou mais, menos de 20% é aproveitado — o restante é eliminado pelo intestino, causando o famoso efeito laxativo. Isso significa que, independentemente da dose oral ingerida, os níveis plasmáticos máximos de vitamina C ficam limitados a cerca de 220 µmol/L.

## O que a via intravenosa muda

A infusão IV de vitamina C contorna completamente os transportadores intestinais. Concentrações plasmáticas de 1.000 a 5.000 µmol/L — mais de 10 a 20 vezes o máximo oral — podem ser atingidas e sustentadas durante a sessão. Nessas concentrações elevadas, a vitamina C exerce efeitos que simplesmente não ocorrem com a suplementação oral: ação pró-oxidante seletiva contra células danificadas, síntese massiva de colágeno, efeito antiviral documentado e suporte imune muito mais intenso. Para compreender como outros antioxidantes como a [glutationa IV](/blog/glutationa-iv-antioxidante) complementam esse efeito, confira nosso artigo dedicado ao tema.

## Síntese de colágeno: vitamina C como cofator essencial

Um dos papéis mais críticos da vitamina C é como cofator obrigatório nas enzimas prolil e lisil hidroxilase — responsáveis por estabilizar a estrutura tripla-hélice do colágeno. Sem vitamina C suficiente, as fibras de colágeno ficam instáveis e se degradam rapidamente. Em concentrações elevadas via IV, a vitamina C acelera a produção de colágeno nos fibroblastos, fortalecendo pele, articulações, tendões e vasos sanguíneos. Isso explica por que pacientes relatam pele mais firme e luminosa após ciclos de vitamina C IV — um benefício explorado com mais profundidade no artigo sobre [soroterapia para pele](/blog/soroterapia-pele-rejuvenescimento).

## Ação antiviral e proteção contra infecções

Estudos clínicos demonstram que altas doses de vitamina C IV reduzem significativamente a duração e a gravidade de infecções virais respiratórias. O mecanismo envolve múltiplas vias: estimulação da produção de interferon (proteínas antivirais endógenas), inibição direta da replicação viral em algumas espécies, e proteção das células imunes — que consomem vitamina C em grandes quantidades durante o combate a infecções — contra o dano oxidativo. Em contextos de imunidade comprometida, a vitamina C IV pode ser a diferença entre uma recuperação rápida e uma infecção prolongada.

## Zinco e selênio: o trio da imunidade completa

O Protocolo Imunidade da EV Suplementos combina vitamina C IV com zinco e selênio — dois minerais críticos para a função imune que frequentemente estão deficientes na população geral. O zinco é essencial para o desenvolvimento e a função de células T, B e NK; sua deficiência está diretamente associada a infecções recorrentes. O selênio é cofator da glutationa peroxidase, enzima antioxidante fundamental para proteger as células imunes. Juntos, esses três compostos formam uma defesa imune completa e sinérgica, abordando múltiplas vias de proteção simultaneamente.

## Quem mais se beneficia

O protocolo é especialmente indicado para pessoas com infecções recorrentes (gripes, resfriados, herpes), profissionais de saúde com alta exposição a patógenos, pessoas em períodos de estresse intenso — que depleta rapidamente a vitamina C tecidual —, fumantes (que necessitam de 35% mais vitamina C que não fumantes), idosos com imunidade naturalmente reduzida, e quem está se recuperando de cirurgias, procedimentos ou doenças que exigiram esforço imune elevado.

## Frequência e protocolo personalizado

Para suporte imune preventivo, uma sessão mensal mantém os níveis plasmáticos otimizados. Em períodos de maior exposição ao risco (viagens, inverno, estresse) ou na fase aguda de uma infecção, sessões de 2 a 3 vezes por semana são indicadas. A farmacêutica Erlane Vieira (CRF 4033-TO) define a concentração de vitamina C — que pode variar de 7,5 g a 25 g por sessão — e os ativos complementares com base na avaliação individualizada de cada paciente.`,
  },

  'glutationa-iv-antioxidante': {
    titulo:   'Glutationa IV: o antioxidante mais poderoso do organismo',
    resumo:   'Conheça a glutationa, a molécula responsável por desintoxicar células, clarear a pele e combater o envelhecimento precoce.',
    data:     '3 de abril de 2026',
    autor:    'Erlane Vieira',
    relacionados: ['imunidade-vitamina-c', 'soroterapia-pele-rejuvenescimento', 'o-que-e-soroterapia'],
    conteudo: `## O que é a glutationa?

A glutationa é um tripeptídeo formado por três aminoácidos — glicina, cisteína e ácido glutâmico — produzido naturalmente por todas as células do organismo. Ela é considerada o "mestre antioxidante" da medicina funcional por atuar em praticamente todos os sistemas do corpo: neutraliza radicais livres, regenera outros antioxidantes como a [vitamina C](/blog/imunidade-vitamina-c) e a vitamina E, e é peça-chave na desintoxicação hepática de metais pesados, pesticidas e medicamentos.

## Por que os níveis caem com o tempo?

A produção de glutationa começa a declinar a partir dos 20 anos e pode cair até 50% até os 40 anos. Fatores que aceleram esse processo: exposição contínua a poluentes e toxinas ambientais, dieta pobre em vegetais crucíferos, uso frequente de medicamentos, consumo de álcool, privação de sono e estresse crônico. Quando os níveis caem, as células ficam mais vulneráveis ao dano oxidativo, o fígado sobrecarregado, a pele opaca e o sistema imune menos eficiente.

## Via oral versus via intravenosa: por que faz diferença?

A glutationa administrada por via oral é amplamente degradada no trato digestivo antes de chegar à corrente sanguínea — estima-se que menos de 5% da dose ingerida chegue efetivamente às células. A via intravenosa contorna completamente esse problema: 100% da dose entra diretamente na corrente sanguínea, atingindo as células em minutos. Estudos clínicos demonstram que uma única sessão IV eleva os níveis plasmáticos de glutationa em até 10 vezes em relação à suplementação oral.

## Benefícios documentados

A reposição IV de glutationa produz efeitos amplos e mensuráveis. No sistema imune, aumenta a atividade das células NK (natural killer), que combatem vírus e células tumorais. No fígado, acelera a eliminação de toxinas e metabólitos, aliviando o estresse hepático. Na pele, inibe a enzima tirosinase, responsável pela síntese de melanina — resultando em clareamento progressivo, redução de manchas e tom mais uniforme. Na neurologia, protege neurônios do dano oxidativo, com pesquisas apontando benefícios no envelhecimento cerebral.

## Glutationa e saúde da pele

Um dos efeitos mais buscados da glutationa IV é a transformação da pele. A inibição da tirosinase reduz progressivamente a produção de melanina, uniformizando o tom e clareando manchas causadas por sol, hormônios (melasma) ou inflamação pós-acne. Paralelamente, a proteção antioxidante preserva o colágeno e a elastina existentes, enquanto o ambiente celular mais saudável estimula a renovação. Para quem busca um protocolo focado na saúde da pele, o artigo sobre [soroterapia para pele](/blog/soroterapia-pele-rejuvenescimento) complementa bem este conteúdo.

## Quem mais se beneficia?

A glutationa IV é indicada para pessoas que experimentam fadiga crônica sem causa definida, pele com manchas ou opacidade persistente, exposição ocupacional a metais pesados (dentistas, pintores, mecânicos), histórico de consumo elevado de medicamentos ou álcool, e quem busca um protocolo de longevidade e antienvelhecimento. Também é frequentemente utilizada por atletas de alta performance para acelerar a recuperação e reduzir o dano oxidativo gerado pelo exercício intenso.

## Quantas sessões são necessárias?

Os resultados variam conforme o objetivo. Para detox e disposição, melhoras são relatadas já nas primeiras 2 a 3 sessões. Para clareamento de pele e redução de manchas, o protocolo padrão é de 8 a 12 sessões semanais, com manutenção mensal após esse período. A farmacêutica Erlane Vieira (CRF 4033-TO) avalia cada paciente individualmente e define a concentração, frequência e combinação de ativos ideais para cada caso.

## O Protocolo Detox & Luminosidade da EV Suplementos

O protocolo desenvolvido pela EV Suplementos vai além da glutationa isolada. A infusão combina glutationa reduzida (a forma biologicamente ativa), vitamina C em alta dose — que recicla a glutationa oxidada de volta à forma ativa, amplificando o efeito —, ácido alfa-lipóico, que atua de forma sinérgica potencializando a ação antioxidante, e selênio, mineral cofator essencial para a síntese endógena de glutationa. Essa combinação produz resultados superiores aos de qualquer componente usado de forma isolada.

## Segurança e contraindicações

A glutationa IV é considerada segura quando administrada por profissional habilitado em concentrações adequadas. Grávidas, lactantes e pessoas com hipersensibilidade conhecida aos componentes devem consultar um médico antes do procedimento. Na EV Suplementos, toda sessão é precedida de uma anamnese detalhada conduzida pela farmacêutica Erlane Vieira, garantindo que o protocolo seja seguro e personalizado para cada paciente.`,
  },

  'soroterapia-pele-rejuvenescimento': {
    titulo:   'Soroterapia para Pele: hidratação profunda e rejuvenescimento',
    resumo:   'Descubra como a infusão de colágeno, biotina e vitaminas transforma a saúde da pele de dentro para fora.',
    data:     '8 de abril de 2026',
    autor:    'Erlane Vieira',
    relacionados: ['glutationa-iv-antioxidante', 'imunidade-vitamina-c', 'o-que-e-soroterapia'],
    conteudo: `## A pele como reflexo da nutrição celular

A pele é o maior órgão do corpo humano e, ao mesmo tempo, o último a receber os nutrientes absorvidos pela alimentação — o organismo prioriza coração, cérebro e órgãos vitais. Isso significa que, mesmo com uma dieta equilibrada, a pele pode continuar recebendo uma fração mínima dos nutrientes de que precisa para se renovar e manter a firmeza. É aqui que a soroterapia estética muda o jogo: ao entregar os ativos diretamente na corrente sanguínea, os nutrientes chegam às células da pele em concentrações que a via oral nunca conseguiria atingir.

## Por que cremes e colágeno oral têm limitações?

Cremes hidratantes e antienvelhecimento atuam exclusivamente na camada mais superficial da pele (epiderme), sem penetrar nas camadas mais profundas onde o colágeno é realmente produzido (derme). O colágeno oral, por sua vez, é quebrado em aminoácidos durante a digestão antes de ser absorvido — o organismo decide para onde esses aminoácidos vão, e a pele não tem prioridade. A via intravenosa supera ambas as limitações: os ativos chegam à derme pela circulação sanguínea, estimulando fibroblastos a produzirem novo colágeno no local certo.

## Os ativos do Protocolo Pele e o que cada um faz

A [vitamina C IV](/blog/imunidade-vitamina-c) é cofator indispensável na síntese de colágeno — sem ela, os fibroblastos não conseguem montar as fibras de colágeno corretamente. Em altas doses IV, também atua como potente antioxidante, neutralizando o dano causado pela radiação UV e pela poluição. A biotina (vitamina B7) fortalece a estrutura de queratina em unhas, cabelos e pele, reduzindo a descamação e a fragilidade. O zinco regula a produção de sebo, tem ação anti-inflamatória e é fundamental para a cicatrização e renovação celular. O complexo B (B1, B2, B3, B5, B6 e B12) melhora a microcirculação cutânea, reduz vermelhidão e auxilia na regulação hormonal que afeta diretamente a oleosidade da pele.

## Colágeno e elastina: a estrutura de suporte da pele

A firmeza e a elasticidade da pele dependem de duas proteínas estruturais: colágeno e elastina. A produção de ambas declina progressivamente após os 25 anos — cerca de 1% ao ano — e acelera com exposição solar, tabagismo, glicose elevada e estresse oxidativo. A soroterapia com vitamina C IV e aminoácidos essenciais fornece os blocos de construção e os cofatores necessários para que os fibroblastos retomem a síntese dessas proteínas em ritmo mais acelerado, revertendo parte da perda acumulada.

## Glutationa: o brilho que vem de dentro

A [glutationa IV](/blog/glutationa-iv-antioxidante) é frequentemente combinada ao Protocolo Pele por seu duplo benefício: protege as células da pele do dano oxidativo e inibe a tirosinase, enzima responsável pela síntese de melanina. O resultado é uma pele progressivamente mais uniforme, com redução de manchas e aquele efeito "glow" que muitos associam erroneamente apenas a filtros de imagem. É um dos diferenciais mais valorizados pelas pacientes da EV Suplementos.

## Hidratação celular: muito além da água

Hidratação profunda não se resume a beber água. As células da pele precisam de eletrólitos e minerais específicos para manter o gradiente osmótico adequado e reter água dentro da célula. O Protocolo Pele da EV Suplementos inclui magnésio, potássio e sódio em proporções fisiológicas, além de ácido hialurônico de baixo peso molecular — que se integra à matriz extracelular da pele e retém até 1.000 vezes seu peso em água. O resultado é uma hidratação que vai muito além da superfície: a pele fica mais preenchida, com menos linhas finas e aparência mais jovem.

## Quem mais se beneficia?

O protocolo é especialmente indicado para pessoas com pele ressecada, opaca ou com perda de firmeza; presença de manchas e hiperpigmentação; acne ativa ou pós-acne com marcas residuais; unhas quebradiças e queda de cabelo; quem deseja potencializar os resultados de procedimentos estéticos como bioestimuladores, preenchimentos ou lasers; e pessoas em fase de envelhecimento que buscam um cuidado preventivo antes que os sinais se tornem mais pronunciados.

## Resultados: o que esperar e quando

As primeiras mudanças perceptíveis aparecem entre a 2ª e a 4ª sessão: pele mais luminosa, hidratada e com tom mais uniforme. Entre a 6ª e a 8ª sessão, é comum observar redução visível de manchas, melhora na textura e firmeza. Resultados mais expressivos de remodelação estrutural (colágeno e elastina) são notados após 12 semanas de protocolo contínuo. A manutenção mensal após o ciclo inicial sustenta e aprofunda os resultados ao longo do tempo.

## Combinação com procedimentos estéticos

A soroterapia para pele potencializa e prolonga os resultados de praticamente todos os procedimentos estéticos modernos. Aplicada nos dias anteriores a um laser ou peeling, prepara a pele com máximo aporte nutricional, acelerando a cicatrização. Após bioestimuladores de colágeno, fornece os cofatores necessários para que o estímulo se converta em colágeno efetivo. É um complemento natural que amplifica investimentos já feitos em saúde e estética.`,
  },

  'soroterapia-pos-treino': {
    titulo:   'Soroterapia Pós-Treino: recuperação muscular acelerada',
    resumo:   'Atletas e praticantes de exercício já descobriram como a reposição IV encurta o tempo de recuperação e melhora a performance.',
    data:     '14 de abril de 2026',
    autor:    'Erlane Vieira',
    relacionados: ['soroterapia-emagrecimento', 'o-que-e-soroterapia', 'imunidade-vitamina-c'],
    conteudo: `## O que acontece com o corpo após um treino intenso?

Durante o exercício físico intenso, o organismo passa por um processo de destruição controlada: fibras musculares sofrem microrrupturas, estoques de glicogênio são depletados, eletrólitos são perdidos pelo suor e o estresse oxidativo gerado pelo aumento do consumo de oxigênio produz uma carga elevada de radicais livres. É justamente nessa fase de recuperação — e não durante o treino — que o músculo cresce, se fortalece e melhora sua capacidade. Quanto mais rápido e completo for esse processo, maior o ganho e menor o risco de lesão.

## O gargalo da suplementação oral

Shakes de proteína, creatina, BCAAs e vitaminas orais são amplamente usados, mas têm uma limitação fisiológica importante: dependem do processo digestivo completo para serem absorvidos. Após um treino intenso, o fluxo sanguíneo está concentrado nos músculos e na pele — o intestino recebe menos irrigação, reduzindo sua capacidade absortiva justamente quando a demanda é maior. Além disso, aminoácidos e vitaminas B sofrem o chamado "efeito de primeira passagem" hepática, onde parte é metabolizada antes de chegar à circulação sistêmica. O resultado: uma fração menor do que foi ingerido chega onde precisa.

## A janela anabólica e por que a via IV é decisiva

A soroterapia pós-treino contorna completamente o trato digestivo. Os nutrientes entram diretamente na corrente sanguínea e chegam ao músculo em minutos, não em horas. Estudos de fisiologia do exercício mostram que a janela anabólica — o período de maior receptividade muscular após o treino — dura entre 30 e 60 minutos. A infusão IV atua exatamente dentro dessa janela, entregando aminoácidos e cofatores quando os músculos estão mais receptivos, maximizando a síntese proteica e a reconstrução das fibras danificadas.

## Os ativos do Protocolo Performance e suas funções

A glutamina é o aminoácido mais abundante no músculo esquelético e é o primeiro a ser depletado em treinos intensos. Sua reposição IV acelera a síntese proteica e fortalece o sistema imune, que fica temporariamente suprimido após exercícios de alta intensidade. O magnésio participa de mais de 300 reações enzimáticas ligadas à contração muscular e à síntese de ATP — sua deficiência é diretamente associada a câimbras, fadiga e recuperação lenta. O complexo B (especialmente B1, B3, B5 e B12) é fundamental para a geração de energia celular via ciclo de Krebs. A [vitamina C IV](/blog/imunidade-vitamina-c) neutraliza os radicais livres gerados pelo exercício, reduzindo a inflamação muscular e acelerando a síntese de colágeno nos tendões e ligamentos.

## Dor muscular tardia (DOMS): o que é e como reduzir

A dor muscular que aparece 24 a 48 horas após o treino — conhecida como DOMS (Delayed Onset Muscle Soreness) — resulta da combinação de microrrupturas musculares, acúmulo de metabólitos inflamatórios e edema local. A soroterapia pós-treino reduz o DOMS por três mecanismos simultâneos: acelera a reparação das fibras musculares com aminoácidos disponíveis imediatamente, neutraliza mediadores inflamatórios com vitamina C e zinco, e repõe magnésio que atua como relaxante muscular natural. Pacientes relatam redução de 50 a 70% na intensidade e duração da dor pós-treino após as primeiras sessões.

## Eletrólitos: o componente frequentemente negligenciado

Em um treino moderado de 60 minutos, é possível perder até 1,5 litros de suor contendo sódio, potássio, magnésio e cloreto. A reposição inadequada desses eletrólitos compromete a contração muscular, a condução nervosa e a hidratação intracelular. Bebidas esportivas comuns contêm doses insuficientes e elevada quantidade de açúcar. A soroterapia IV repõe eletrólitos em concentrações fisiológicas exatas, restaurando o equilíbrio hídrico e mineral do organismo em uma única sessão de forma precisa e controlada.

## Sinergia com o emagrecimento

Para quem treina com objetivo de emagrecimento, o Protocolo Performance tem um benefício extra: ao preservar a massa muscular durante o processo de perda de gordura, mantém a taxa metabólica basal elevada — o principal fator que diferencia quem sustenta o peso perdido de quem o recupera. Combinado ao [Protocolo Emagrecimento](/blog/soroterapia-emagrecimento), forma uma estratégia completa de composição corporal.

## Para quem é indicado e frequência

O Protocolo Performance da EV Suplementos é indicado para praticantes de musculação, crossfit, corrida, ciclismo, natação e qualquer modalidade de alta intensidade. O timing ideal para a sessão é nas primeiras 2 horas após o treino. Para atletas em fase de intensificação, uma sessão semanal já produz resultados expressivos. Para preparação de competições ou períodos de treinos diários, duas sessões semanais podem ser indicadas. A farmacêutica Erlane Vieira (CRF 4033-TO) personaliza a concentração dos ativos, a frequência e a duração de cada sessão — que em média dura entre 40 e 60 minutos.`,
  },
}

function readingTime(text: string): number {
  return Math.max(1, Math.ceil(text.replace(/##[^\n]*/g, '').split(/\s+/).length / 200))
}

function parseInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/)
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (m) {
      return (
        <a
          key={i}
          href={m[2]}
          style={{
            color:                'var(--vinho)',
            textDecoration:       'underline',
            textDecorationColor:  'var(--vinho-claro)',
            textUnderlineOffset:  '3px',
          }}
        >
          {m[1]}
        </a>
      )
    }
    return part
  })
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

  const mins = readingTime(post.conteudo)

  const relacionadosList = post.relacionados
    .map((s) => posts[s] ? { slug: s, titulo: posts[s].titulo } : null)
    .filter(Boolean) as { slug: string; titulo: string }[]

  return (
    <>
      <Header />

      <BlogHero
        titulo={post.titulo}
        subtitulo="Blog"
        data={post.data}
        mins={mins}
      />

      <main className="pb-24 min-h-screen" style={{ background: 'var(--rosa)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8">

          {/* Breadcrumb */}
          <nav className="mb-8 text-sm flex flex-wrap items-center gap-1" style={{ color: 'var(--texto-leve)' }}>
            <a href="/" className="hover:underline">Início</a>
            <span className="mx-1">›</span>
            <a href="/blog" className="hover:underline">Blog</a>
            <span className="mx-1">›</span>
            <span className="line-clamp-1" style={{ color: 'var(--vinho)' }}>{post.titulo}</span>
          </nav>

          <article className="bg-white rounded-2xl shadow-md overflow-hidden">

            <div className="p-6 sm:p-10 md:p-14 flex flex-col gap-5">

              {/* Meta — autor */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium" style={{ color: 'var(--texto-leve)' }}>
                <span>✍️ {post.autor} — Farmacêutica CRF 4033-TO</span>
              </div>

              {/* Título */}
              <h1
                style={{
                  fontFamily: 'var(--font-playfair-display)',
                  color:      'var(--vinho)',
                  fontSize:   'clamp(1.55rem, 4vw, 2.3rem)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {post.titulo}
              </h1>

              {/* Resumo */}
              <p
                className="text-base font-medium pb-2"
                style={{
                  color:         'var(--dourado)',
                  lineHeight:    1.65,
                  borderBottom:  '1px solid var(--rosa-med)',
                }}
              >
                {post.resumo}
              </p>

              {/* Conteúdo */}
              <div style={{ color: 'var(--texto)', lineHeight: 1.85, fontSize: '1.0625rem' }}>
                {post.conteudo.split('\n\n').map((bloco, i) => {
                  if (bloco.startsWith('## ')) {
                    return (
                      <h2
                        key={i}
                        className="mt-10 mb-3"
                        style={{
                          fontFamily:  'var(--font-playfair-display)',
                          color:       'var(--vinho)',
                          fontSize:    'clamp(1.1rem, 2.5vw, 1.3rem)',
                          fontWeight:  700,
                          lineHeight:  1.3,
                          paddingTop:  '0.5rem',
                          borderTop:   '2px solid var(--rosa-med)',
                        }}
                      >
                        {bloco.slice(3)}
                      </h2>
                    )
                  }
                  return (
                    <p key={i} className="mb-5">
                      {parseInline(bloco)}
                    </p>
                  )
                })}
              </div>

              {/* Leia também */}
              {relacionadosList.length > 0 && (
                <div
                  className="mt-4 p-5 rounded-xl flex flex-col gap-3"
                  style={{ background: 'var(--rosa)', border: '1px solid var(--rosa-med)' }}
                >
                  <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--vinho-claro)' }}>
                    Leia também
                  </p>
                  <ul className="flex flex-col gap-2">
                    {relacionadosList.map((r) => (
                      <li key={r.slug}>
                        <a
                          href={`/blog/${r.slug}`}
                          className="text-sm font-medium hover:underline flex items-center gap-1.5"
                          style={{ color: 'var(--vinho)' }}
                        >
                          → {r.titulo}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div
                className="mt-2 p-6 rounded-xl text-center flex flex-col gap-4"
                style={{ background: 'linear-gradient(135deg, var(--vinho) 0%, var(--vinho-claro) 100%)' }}
              >
                <p className="text-white font-semibold text-base">
                  Quer saber qual protocolo é ideal para você?
                </p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Avaliação gratuita com a farmacêutica Erlane Vieira — CRF 4033-TO
                </p>
                <a
                  href="https://wa.me/5599981140494"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold transition-opacity hover:opacity-90 mx-auto min-h-[48px] text-sm"
                  style={{ backgroundColor: 'var(--wpp)' }}
                >
                  💬 Agendar pelo WhatsApp
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
