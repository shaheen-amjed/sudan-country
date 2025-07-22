import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const dir = path.join(process.cwd(), 'public/images')
  const files = fs.readdirSync(dir)

  const images = files.map(file => `/images/${file}`)

  return NextResponse.json(images)
}
