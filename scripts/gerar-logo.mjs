import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir  = path.join(__dirname, '..', 'public')
const srcJpeg    = 'C:/Users/DELL/Downloads/WhatsApp Image 2026-03-30 at 22.11.42.jpeg'

// ─── 1. Extrai o monograma EV da foto original e remove o fundo vinho ────────
// Estratégia: pixels escuros (fundo vinho) → transparente, pixels claros → branco

const evCrop = await sharp(srcJpeg)
  .extract({ left: 30, top: 20, width: 260, height: 180 })
  .resize(96, 66, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer()

// Lê pixel a pixel: se luminância < 140, torna transparente
const { data, info } = await sharp(evCrop)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const px = new Uint8ClampedArray(data)
for (let i = 0; i < px.length; i += 4) {
  const r = px[i], g = px[i+1], b = px[i+2]
  const lum = 0.299 * r + 0.587 * g + 0.114 * b
  if (lum < 140) {
    px[i + 3] = 0  // fundo vinho → transparente
  } else {
    // mantém o branco; normaliza para branco puro
    const intensity = Math.min(255, Math.round(lum * 1.15))
    px[i]     = intensity
    px[i + 1] = intensity
    px[i + 2] = intensity
  }
}

const evSemFundo = await sharp(px, {
  raw: { width: info.width, height: info.height, channels: 4 },
}).png().toBuffer()

// ─── 2. Logo header — compacta (EV + uma linha de texto) ────────────────────
// Canvas mais estreito para não ocupar espaço demais no menu

// Canvas estreito: EV ocupa ~38% da largura → visível mesmo em tamanho pequeno
const canvasW = 252
const canvasH = 68

const textSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${canvasW}" height="${canvasH}">
  <!-- divisor -->
  <line x1="104" y1="8" x2="104" y2="60" stroke="white" stroke-width="1" opacity="0.4"/>

  <!-- nome da empresa -->
  <text x="114" y="28"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="13" font-weight="700" fill="white"
  >EV Suplementos</text>

  <!-- linha 2 -->
  <text x="114" y="44"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="13" font-weight="700" fill="white"
  >Injet&#225;veis</text>

  <!-- CRF -->
  <text x="114" y="59"
    font-family="Arial, Helvetica, sans-serif"
    font-size="9" fill="white" opacity="0.60"
  >Erlane Vieira  |  CRF 4033-TO</text>
</svg>`

await sharp({
  create: { width: canvasW, height: canvasH, channels: 4,
            background: { r: 0, g: 0, b: 0, alpha: 0 } },
})
.composite([
  { input: evSemFundo, left: 4, top: Math.round((canvasH - 66) / 2) },
  { input: Buffer.from(textSvg) },
])
.png()
.toFile(path.join(publicDir, 'logo-sem-fundo.png'))

console.log('✓ logo-sem-fundo.png gerada')

// ─── 3. Banner para cards e artigos do blog ──────────────────────────────────
// EV original (com cores) sobre fundo vinho escuro + texto à direita

const bannerW = 800
const bannerH = 300

// Recorta o EV maior para o banner
const evBanner = await sharp(srcJpeg)
  .extract({ left: 30, top: 20, width: 260, height: 180 })
  .resize(220, 152, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer()

// Remove fundo do EV para o banner também
const { data: d2, info: i2 } = await sharp(evBanner)
  .ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const px2 = new Uint8ClampedArray(d2)
for (let i = 0; i < px2.length; i += 4) {
  const lum = 0.299 * px2[i] + 0.587 * px2[i+1] + 0.114 * px2[i+2]
  if (lum < 140) px2[i + 3] = 0
}
const evBannerSemFundo = await sharp(px2, {
  raw: { width: i2.width, height: i2.height, channels: 4 },
}).png().toBuffer()

const bannerTextSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${bannerW}" height="${bannerH}">
  <!-- divisor vertical -->
  <line x1="290" y1="70" x2="290" y2="230"
    stroke="white" stroke-width="1" opacity="0.3"/>

  <!-- nome -->
  <text x="312" y="${bannerH/2 - 20}"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="28" font-weight="700" fill="white" dominant-baseline="middle"
  >EV Suplementos Injet&#225;veis</text>

  <!-- farmacêutica -->
  <text x="312" y="${bannerH/2 + 16}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="16" fill="white" opacity="0.75" dominant-baseline="middle"
  >Erlane Vieira</text>

  <!-- CRF -->
  <text x="312" y="${bannerH/2 + 46}"
    font-family="Arial, Helvetica, sans-serif"
    font-size="11" fill="white" opacity="0.5" letter-spacing="1.5" dominant-baseline="middle"
  >FARMAC&#202;UTICA  |  CRF 4033-TO</text>
</svg>`

// Fundo vinho + glow dourado via SVG de fundo
const bgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${bannerW}" height="${bannerH}">
  <rect width="${bannerW}" height="${bannerH}" fill="#3D1520"/>
  <radialGradient id="g" cx="65%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#C9A84C" stop-opacity="0.10"/>
    <stop offset="100%" stop-color="#3D1520" stop-opacity="0"/>
  </radialGradient>
  <rect width="${bannerW}" height="${bannerH}" fill="url(#g)"/>
</svg>`

await sharp(Buffer.from(bgSvg))
  .composite([
    { input: evBannerSemFundo,
      left: 40,
      top: Math.round((bannerH - 152) / 2) },
    { input: Buffer.from(bannerTextSvg) },
  ])
  .png()
  .toFile(path.join(publicDir, 'logo-banner.png'))

console.log('✓ logo-banner.png gerada')

// Remove arquivo de teste
import { unlinkSync, existsSync } from 'fs'
const tmp = path.join(publicDir, '_ev-crop-test.png')
if (existsSync(tmp)) unlinkSync(tmp)
