<script setup lang="ts">
// infobox 請填寫功能描述👈
import redbtn from '@/components/page/home/redbtn.vue';

const props = defineProps({
  img: {
    type: String,
    default: '_nuxt/assets/img/img1.jpeg'
  },
  title: {
    type: String,
    default: 'title'
  },
  text: {
    type: String,
    default: 'text'
  }
});

console.log(props);

</script>

<template>
    <div class="flex flex-col justify-center ">
        <img :src="props.img" alt="" class="">
        <p class="mt-6 text-center text-xs font-light text-white opacity-50">SPECIAL OFFER</p>
        <div class="my-5 border-b-2 pb-5">
            <p class="mt-6 text-center text-xl font-medium text-white ">
                {{props.title}}
            </p>
        </div>
        <div>
            <pre class="text-center text-white whitespace-pre-wrap">{{props.text }}</pre>
        </div>
        <redbtn>閱讀更多</redbtn>
    </div>
</template>

<style lang="scss" scoped>
// 佈局

.infobox {
    background-color: #db485d;
}
</style>
