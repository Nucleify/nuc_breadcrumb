import type { Composer } from 'vue-i18n'

import { breadcrumb_map, format_label } from 'nucleify'

const segment_alias_map: Record<string, string> = {
  'ecommerce-stores': 'ecommerce',
  'terms-of-service': 'terms',
  'terms-of-services': 'terms',
}
const resolve_translation = (
  key: string,
  t: Composer['t'],
  te: Composer['te']
) => {
  if (!te(key)) return null
  return t(key)
}

export const translate_segment = (
  segment: string,
  t: Composer['t'],
  te: Composer['te']
) => {
  const normalized = segment_alias_map[segment] || segment
  const rootKey = breadcrumb_map[normalized]
  if (rootKey) {
    const val = resolve_translation(rootKey, t, te)
    if (val) return val
  }
  const footerVal = resolve_translation(`footer-${normalized}`, t, te)
  if (footerVal) return footerVal
  const breadcrumbVal = resolve_translation(`breadcrumb-${normalized}`, t, te)
  if (breadcrumbVal) return breadcrumbVal
  return format_label(segment)
}
