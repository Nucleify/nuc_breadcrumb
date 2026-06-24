import type { App } from 'vue'

import { NucBreadcrumb } from 'nucleify'

export function registerNucBreadcrumb(app: App<Element>): void {
  app.component('nuc-breadcrumb', NucBreadcrumb)
}
