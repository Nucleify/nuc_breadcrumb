<template>
  <ad-breadcrumb
    :items="items"
    separator="prime:angle-right"
    class="nuc-breadcrumb"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { AnchorInterface } from 'nucleify'

const items = ref<AnchorInterface[]>([
  {
    label: 'backoffice',
    href: '/',
    icon: 'mdi:home',
  },
  {
    label: 'About',
    href: '/about',
  },
])
</script>

<style lang="scss">
@import 'index'
</style>