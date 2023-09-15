<script setup lang="ts">
import 'virtual:svg-icons-register'; // icons
const storeI18n = StoreI18n();

</script>

<template lang="pug">
el-config-provider(:locale="storeI18n.elLocale")
  nuxt-loading-indicator(color="#baeacb87")
  nuxt-layout
</template>
