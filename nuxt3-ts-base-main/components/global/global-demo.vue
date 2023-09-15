<script setup lang="ts">
// global-demo 請填寫功能描述👈
const storeDemoObj = StoreDemo();

</script>

<template lang="pug">
#global-demo
  p global-demo
  p {{ storeDemoObj.count }}
  p {{ storeDemoObj.doubleCount }}
</template>
