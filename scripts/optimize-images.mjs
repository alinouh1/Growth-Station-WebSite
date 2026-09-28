import sharp from "sharp"
import { statSync } from "node:fs"

const jobs = [
  {
    // 828px covers a 414px mobile viewport at 2x density.
    input: "public/images/background-mobile-compressed.jpg",
    output: "public/images/background-mobile.webp",
    width: 828,
    quality: 70,
  },
  {
    input: "public/images/back-compressed.jpg",
    output: "public/images/back.webp",
    width: 1920,
    quality: 72,
  },
]

const kb = (path) => `${(statSync(path).size / 1024).toFixed(0)} KB`

for (const job of jobs) {
  await sharp(job.input)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality, effort: 6 })
    .toFile(job.output)

  console.log(`${job.input} (${kb(job.input)}) → ${job.output} (${kb(job.output)})`)
}
