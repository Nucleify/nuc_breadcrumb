<template>
  <nav v-if="items.length" class="nuc-breadcrumb">
    <template v-for="(item, index) in items" :key="item.href">
      <NuxtLink
        v-if="index !== 0 && index < items.length - 1"
        :to="item.href"
        class="breadcrumb-item"
      >
        {{ item.label }}
      </NuxtLink>
      <span
        v-else
        class="breadcrumb-item"
        :class="{ 'breadcrumb-active':
             index === items.length - 1 }"
      >
        {{ item.label }}
      </span>
      <span v-if="index < items.length - 1" class="breadcrumb-separator">
        /
      </span>
    </template>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { translate_segment } from './utils/translate_segment'

const route = useRoute()
const { t, locale } = useI18n()
const items = computed(() => {
  const lang = (route.params.lang as string) || locale.value

  const segments = route.path.split('/').filter(Boolean).slice(1)

  if (segments.length === 0 || segments[0] === 'home') {
    return [
      {
        label: t('nav-home'),
        href: `/${lang}`,
      },
    ]
  }

  const breadcrumbs = [
    {
      label: t('nav-home'),
      href: `/${lang}`,
    },
  ]

  segments.forEach((segment, index) => {
    breadcrumbs.push({
      label: translate_segment(segment, t),
      href: `/${lang}/` + segments.slice(0, index + 1).join('/'),
    })
  })

  return breadcrumbs
})
</script>

<style lang="scss">
@import './index';
</style>
