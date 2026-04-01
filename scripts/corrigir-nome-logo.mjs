import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'
import { unlinkSync } from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const original = 'C:/Users/DELL/Downloads/Firefly_agora_deixe_o_texto_mais_visivel_356371-removebg-preview.png'
const out      = path.join(__dirname, '..', 'public', 'images', 'ev-logo-header.png')
const tmp      = path.join(__dirname, '..', 'public', 'images', '_tmp.png')

// ── 1. Trim do original ──────────────────────────────────────────────────────
const trimBuf = await sharp(original).trim({ threshold: 20 }).png().toBuffer()
const { data, info } = await sharp(trimBuf).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const { width, height } = info
console.log(`${width}x${height}`)

// ── 2. Apaga pixels de "Eilane Vieira" (coordenadas confirmadas) ─────────────
const rX1 = 183, rX2 = 435
const rY1 = 65,  rY2 = 95

const px = new Uint8ClampedArray(data)
let apagados = 0
for (let y = rY1; y < rY2; y++) {
  for (let x = rX1; x < rX2; x++) {
    const i = (y * width + x) * 4
    const a = px[i + 3]
    if (a > 30) {          // pixel não-transparente → apaga
      px[i + 3] = 0
      apagados++
    }
  }
}
console.log(`pixels apagados: ${apagados}`)

await sharp(px, { raw: { width, height, channels: 4 } }).png().toFile(tmp)

// ── 3. Escreve "Erlane Vieira" na mesma posição e estilo ─────────────────────
const svgTexto = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
  <text
    x="${rX1}"
    y="${rY2 - 6}"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="21"
    font-weight="400"
    fill="#6B2737"
  >Erlane Vieira</text>
</svg>`

await sharp(tmp)
  .composite([{ input: Buffer.from(svgTexto) }])
  .png()
  .toFile(out)

unlinkSync(tmp)
console.log('✓ Salvo em', out)
