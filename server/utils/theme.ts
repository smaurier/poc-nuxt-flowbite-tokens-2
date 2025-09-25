import { promises as fs } from 'node:fs'
import { join } from 'node:path'

const TOKENS_DIR = join(process.cwd(), 'tokens')

export type TenantTokens = Record<string, string | number | boolean | null>

export async function loadTokens(tenantId: string): Promise<TenantTokens> {
  const filePath = join(TOKENS_DIR, `${tenantId}.tokens.json`)
  const raw = await fs.readFile(filePath, 'utf8')
  return JSON.parse(raw) as TenantTokens
}

const toString = (value: string | number | boolean | null | undefined): string => {
  if (value === undefined || value === null) {
    return ''
  }

  return String(value)
}

export function tokensToCssVars(tokens: TenantTokens): string {
  const primary = toString(tokens['color.primary'])
  const primaryContrast = toString(tokens['color.primary-contrast'])
  const background = toString(tokens['color.bg'])
  const text = toString(tokens['color.text'])
  const radiusMd = toString(tokens['radius.md'])
  const space2 = toString(tokens['space.2'])
  const space4 = toString(tokens['space.4'])
  const fontSans = toString(tokens['font.family.sans'])

  const cssLines = [
    ':root {',
    `  --color-primary: ${primary};`,
    `  --color-primary-contrast: ${primaryContrast};`,
    `  --color-bg: ${background};`,
    `  --color-text: ${text};`,
    `  --radius-md: ${radiusMd};`,
    `  --space-2: ${space2};`,
    `  --space-4: ${space4};`,
    `  --font-sans: ${fontSans};`,
    '}'
  ]

  const blocks = [cssLines.join('\n')]

  const darkEnabled = Boolean(tokens['dark.enabled'])
  if (darkEnabled && (background || text)) {
    const darkBackground = text || background
    const darkText = background || text

    blocks.push(
      [
        ':root[data-theme="dark"] {',
        `  --color-bg: ${darkBackground};`,
        `  --color-text: ${darkText};`,
        '}'
      ].join('\n')
    )
  }

  return blocks.join('\n')
}
