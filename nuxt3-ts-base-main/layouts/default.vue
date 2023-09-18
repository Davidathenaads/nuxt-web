<script setup lang="ts">
// layout
import headerLayout from '@/components/layout/headerLayout.vue';
import footerLayout from '@/components/layout/footerLayout.vue';
</script>

<template>
<div id="layout">
  <header-layout></header-layout>
  <NuxtPage></NuxtPage>
  <footerLayout></footerLayout>
</div>

</template>

<style lang="scss">
body {
  background-color: #F09491;
}

// 佈局
#layout {
  max-width: 100%;
  min-height: 100vh;
}

</style>
