<script setup lang="ts">
// header
import { Close } from '@element-plus/icons-vue';

const menuOpen = ref(false);
const mobilebtnclick = () => {
  menuOpen.value = !menuOpen.value;
};

</script>

<template>
  <header>
    <transition name="mobilemenu">
      <div class="fixed left-[-100%] top-0 z-10 m-0 h-[100vh] w-full overflow-scroll bg-yoga-mobilecolor p-0  transition-all delay-0 duration-300" :class="{open: menuOpen}">
        <div class="absolute right-5 top-9">
          <el-icon :size="50" color="#fff" class="z-20" @click="mobilebtnclick"><Close /></el-icon>
        </div>

        <ul class="text-white">
          <li class="m-5 py-2 text-sm">品牌介紹 Introduction</li>
          <li class="m-5 py-2 text-sm">官方訊息 News</li>
          <li class="m-5 py-2 text-sm">課程資訊 Course Info.</li>
          <li class="m-5 py-2 text-sm">師資認證 Teacher Training</li>
          <li class="m-5 py-2 text-sm">據點介紹 Location</li>
          <li class="m-5 py-2 text-sm">報名資訊 Activity</li>
          <li class="m-5 py-2 text-sm">聯絡我們 Contact Us</li>
        </ul>
      </div>
    </transition>

    <div class="my-5 flex items-center justify-around text-white xl:flex">
      <div class=" relative h-4 w-5 justify-start sm:hidden" @click="mobilebtnclick">
        <span class="absolute left-0 block h-[1px] w-full rounded-[9px] bg-white opacity-100"></span>
        <span class="absolute left-0 top-[6px] block h-[1px] w-full rounded-[9px] bg-white opacity-100"></span>
        <span class="absolute left-0 top-3 block h-[1px] w-full rounded-[9px] bg-white opacity-100"></span>
      </div>
      <a href="" class=" flex select-none items-center xl:flex">
        <img src="@/assets/img/logo.svg" alt="" class="h-8 xl:h-10">
        <span class="ml-5">
          <p class="hidden xl:block">AntiGravity® Taiwan</p>
        </span>
      </a>
      <ul class="hidden items-center justify-around xl:flex">
        <li class="m-5 text-sm">品牌介紹</li>
        <li class="m-5 text-sm">官方訊息</li>
        <li class="m-5 text-sm">課程資訊</li>
        <li class="m-5 text-sm">據點介紹</li>
        <li class="m-5 text-sm">師資認證</li>
        <li class="m-5 text-sm">報名資訊</li>
        <li class="m-5 text-sm">聯絡我們</li>
      </ul>
      <button class="rounded-s-sm border-2 px-2 py-1 text-xs">會員登入</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.open{
  left: 0 !important;
  transition: all 0.3s ease 0;
}

</style>
