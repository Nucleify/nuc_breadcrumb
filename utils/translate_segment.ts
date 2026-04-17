import type { Composer } from 'vue-i18n'

import { breadcrumb_map } from '../constants/breadcrumb_map'
import { format_label } from './format_label'

const segment_alias_map: Record<string, string> = {
  'ecommerce-stores': 'ecommerce',
  'terms-of-service': 'terms',
  'terms-of-services': 'terms',
}
const resolve_translation = (key: string, t: Composer['t']) => {
  const val = t(key)
  return val !== key ? val : null
}

export const translate_segment = (segment: string, t: Composer['t']) => {
  const normalized = segment_alias_map[segment] || segment
  const rootKey = breadcrumb_map[normalized]
  if (rootKey) {
    const val = resolve_translation(rootKey, t)
    if (val) return val
  }
  const footerVal = resolve_translation(`footer-${normalized}`, t)
  if (footerVal) return footerVal
  const breadcrumbVal = resolve_translation(`breadcrumb-${normalized}`, t)
  if (breadcrumbVal) return breadcrumbVal
  return format_label(segment)
}
