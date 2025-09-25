import { defineEventHandler, getQuery } from 'h3'

export const SUPPORTED_TENANTS = ['acme', 'beta', 'gamma'] as const
export const DEFAULT_TENANT = 'acme'

type TenantId = (typeof SUPPORTED_TENANTS)[number]

function resolveTenantFromHost(hostHeader?: string | string[]): TenantId | undefined {
  if (!hostHeader) {
    return undefined
  }

  const hostValue = Array.isArray(hostHeader) ? hostHeader[0] : hostHeader
  const hostname = hostValue.split(':')[0]?.toLowerCase() ?? ''
  const potentialTenant = hostname.split('.')[0]

  if (SUPPORTED_TENANTS.includes(potentialTenant as TenantId)) {
    return potentialTenant as TenantId
  }

  return undefined
}

function isValidTenant(candidate?: string | string[]): candidate is TenantId {
  if (!candidate || Array.isArray(candidate)) {
    return false
  }

  return SUPPORTED_TENANTS.includes(candidate.toLowerCase() as TenantId)
}

export default defineEventHandler((event) => {
  const headers = event.node.req.headers
  const hostHeader = headers['x-forwarded-host'] ?? headers.host
  let tenantId = resolveTenantFromHost(hostHeader) ?? DEFAULT_TENANT

  const query = getQuery(event)
  const requestedTenant = typeof query.tenant === 'string' ? query.tenant.toLowerCase() : undefined

  if (
    requestedTenant &&
    process.env.NODE_ENV !== 'production' &&
    isValidTenant(requestedTenant)
  ) {
    tenantId = requestedTenant as TenantId
  }

  event.context.tenantId = tenantId
})
