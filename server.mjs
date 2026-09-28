import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, isAbsolute, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(fileURLToPath(new URL('.', import.meta.url)))
const staticRoot = resolve(projectRoot, 'dist')
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

const server = createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end()
    return
  }

  let pathname
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
  } catch {
    response.writeHead(400).end('Bad request')
    return
  }

  let filePath = resolve(staticRoot, `.${pathname}`)
  const fileRelativePath = relative(staticRoot, filePath)
  if (fileRelativePath.startsWith('..') || isAbsolute(fileRelativePath)) {
    response.writeHead(403).end('Forbidden')
    return
  }

  let fileInfo
  try {
    fileInfo = await stat(filePath)
    if (fileInfo.isDirectory()) {
      filePath = resolve(filePath, 'index.html')
      fileInfo = await stat(filePath)
    }
  } catch {
    if (extname(pathname)) {
      response.writeHead(404).end('Not found')
      return
    }

    filePath = resolve(staticRoot, 'index.html')
    try {
      fileInfo = await stat(filePath)
    } catch {
      response.writeHead(503).end('Site build is not available')
      return
    }
  }

  const isHashedAsset = relative(staticRoot, filePath).startsWith(`assets${process.platform === 'win32' ? '\\' : '/'}`)
    && /-[\w-]{8}\.[^.]+$/.test(filePath)
  response.writeHead(200, {
    'Content-Length': fileInfo.size,
    'Content-Type': mimeTypes[extname(filePath).toLowerCase()] ?? 'application/octet-stream',
    'Cache-Control': isHashedAsset ? 'public, max-age=31536000, immutable' : 'no-cache',
    'X-Content-Type-Options': 'nosniff',
  })

  if (request.method === 'HEAD') {
    response.end()
    return
  }

  createReadStream(filePath).pipe(response)
})

const port = Number(process.env.PORT || 3000)
server.listen(port, '0.0.0.0', () => {
  console.log(`Growth Station listening on port ${port}`)
})