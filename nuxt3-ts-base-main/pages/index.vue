<script setup lang="ts">
import banner from '@/components/page/home/banner.vue';
import bannerMenuVue from '@/components/page/home/bannerMenuVue.vue';
import postVue from '@/components/page/home/postVue.vue';
import bannerSecond from '@/components/page/home/bannerSecond.vue';
import classVue from '@/components/page/home/classVue.vue';
import classSecond from '@/components/page/home/classSecond.vue';
import bannerThird from '@/components/page/home/bannerThird.vue';
import formVue from '@/components/page/home/form.vue';
import eleForm from '@/components/page/home/eleForm.vue';
import message from '@/components/page/home/message.vue';
// home 首頁
</script>

<template>
  <div>
    <banner></banner>
    <bannerMenuVue></bannerMenuVue>
    <postVue></postVue>
    <bannerSecond></bannerSecond>
    <classVue></classVue>
    <bannerThird></bannerThird>
    <classSecond></classSecond>
    <formVue></formVue>
    <eleForm></eleForm>
    <message></message>
  </div>

</template>

<style lang="scss" scoped>
// 佈局
#home {
  width: 100%;
}

</style>
