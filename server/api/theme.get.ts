import { defineEventHandler } from 'h3'

import { DEFAULT_TENANT } from '../middleware/tenant'
import { loadTokens } from '../utils/theme'

export default defineEventHandler(async (event) => {
  const tenantId = (event.context.tenantId as string | undefined) ?? DEFAULT_TENANT
  const tokens = await loadTokens(tenantId)

  return tokens
})
