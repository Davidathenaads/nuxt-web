<script setup lang="ts">
import infoBox from '@/components/page/home/infoBox.vue';
import formVue from '@/components/page/home/form.vue';
import whitebtn from '@/components/page/home/whitebtn.vue';
import redbtn from '@/components/page/home/redbtn.vue';
import stringAll from '@/components/stringAll';

//  請填寫功能描述👈
// const img1 = '_nuxt/assets/img/img1.jpeg';
// const img2 = '_nuxt/assets/img/img2.jpeg';
// const img3 = '_nuxt/assets/img/img3.png';

// const title1 = '普發6000珈倍術';
// const title2 = '大受歡迎的流動瑜珈︰幫你提升肌力、提振精神';
// const title3 = '暑期快閃！！讓你的孩子能靜也能動的反重力兒童空中瑜珈';

// const text1 = `Fly High Yoga為你超前部署母親節好禮
// 還能幫你一秒放大現金

// 獻給媽咪最頂級的極致寵愛`;
// const text2 = '流動瑜珈這幾年在台灣大受歡迎，主要是因為是相對於哈達瑜珈來說，它是一門節奏比較快、停頓的時間較短、強度也較高的瑜珈，對於想要提升心肺、肌力的人來說，它的效果非常不錯……';
// const text3 = `無需飛往外太空，
// 只要參加反重力兒童空中瑜伽，
// 孩子就能夠享受漂浮在空中的感覺，
// 開啟一段全新的瑜伽之旅`;
</script>

<template>
  <div class="relative h-[calc(100vh-80px)] bg-[url('@/assets/img/slide-1.jpg')] bg-cover bg-top bg-no-repeat xl:h-[100vh]">
    <div class="absolute left-[10%] top-1/4">
      <p class="text-lg text-white xl:text-4xl">the Perfect Place</p>
      <p class="mb-20 mt-[10px] text-3xl font-medium leading-9 tracking-widest text-white xl:text-7xl">From Beginner<br>to Master</p>
      <p class="mb-16 text-lg text-white xl:text-4xl">從初學到成為專精者的好地方。</p>
      <a href="#" class="bg-yogapink py-3 pl-12 pr-10 tracking-wider text-white">預約體驗</a>
    </div>
  </div>

  <div class="container mx-auto flex w-[96%] flex-wrap items-center justify-center border-b-2 border-primarycolor py-6 xl:flex xl:flex-nowrap">

    <div class="flex w-1/2 justify-start px-4">
      <div class="flex items-center justify-start">
        <img src="@/assets/img/member.png" alt="" class="w-4 xl:w-10">
        <div class="ml-2">
          <p class="text-sm text-white">體驗課程<br>Trial Class</p>
        </div>
      </div>
    </div>

    <div class="flex w-1/2 justify-start px-4">
      <div class="flex items-center justify-start">
        <img src="@/assets/img/booking.png" alt="" class="w-4 xl:w-10">
        <div class="ml-2">
          <p class="text-sm text-white">課程介紹<br>Course <br>Introduction</p>
        </div>
      </div>
    </div>

    <div class="flex w-1/2 justify-start px-4">
      <div class="flex items-center justify-start">
        <img src="@/assets/img/offer.png" alt="" class="w-4 xl:w-10">
        <div class="ml-2">
          <p class="text-sm text-white">優惠訊息<br>Discount</p>
        </div>
      </div>
    </div>

    <div class="flex w-1/2 justify-start px-4">
      <div class="flex items-center justify-start">
        <img src="@/assets/img/member-only.png" alt="" class="w-4 xl:w-10">
        <div class="ml-2">
          <p class="text-sm text-white">會員專區<br>Ｍember Only</p>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto flex w-[90%] pt-[60px]">
    <div class=" mx-auto xl:mx-5 xl:grid xl:grid-cols-3 xl:justify-center xl:gap-9 xl:pt-32">
      <div class="mx-4">
        <infoBox :img="stringAll.img1" :title="stringAll.title1" :text="stringAll.text1"></infoBox>
      </div>

      <div class="mx-4">
        <infoBox :img="stringAll.img2" :title="stringAll.title2" :text="stringAll.text2"></infoBox>
      </div>

      <div class="mx-4">
       <infoBox :img="stringAll.img3" :title="stringAll.title3" :text="stringAll.text3"></infoBox>
     </div>

    </div>
  </div>

  <div class="mb-20 mt-5 flex justify-center xl:mb-0 xl:mt-[100px] xl:pb-28">
      <whitebtn><a href="https://www.flyhighyoga.com.tw/press">MORE</a></whitebtn>
  </div>
  <div class=" relative h-60 bg-[url('@/assets/img/home-banner-1.jpg')] bg-cover xl:h-[560px]">
    <div class="absolute left-[10%] top-1/2 -translate-y-1/2">
      <p class="text-[26px] text-white xl:text-5xl">My Yoga Life</p>
      <p class=" mb-9 text-sm text-white xl:mb-10 xl:text-3xl">將瑜伽融入生活，隨時來場身體探險。</p>
        <redbtn class="flex justify-start"><a href="＃">關於我們</a></redbtn>
    </div>
  </div>
  <div class="pb-20 pt-[60px] xl:my-[120px]">
    <div class="container mx-auto pb-20">
      <h2 class="mb-2 text-center text-[28px] font-medium text-white xl:mb-4 xl:text-4xl">三大授課結構</h2>
      <p class="text-center text-sm font-light text-white opacity-50">TEACHING STRUCTURE</p>

      <div class="flex flex-col xl:flex xl:flex-row xl:justify-center">
        <div class="mx-[5%] mb-5 xl:mb-5 xl:w-1/3 xl:px-5">
          <div class="rounded-2xl bg-yoga-card-left p-6 xl:px-10 xl:pb-16 xl:pt-12">
            <div>
              <div class="flex items-center xl:block">
                <p class="text-sm font-bold text-white xl:text-xl">反重力課程</p>
                <p class="ml-1 text-xs text-white xl:ml-0">AntiGravity® Fitness</p>
              </div>
              <div class="mb-9 mt-3 text-[20px] tracking-widest text-white xl:my-14 xl:flex xl:flex-col xl:text-3xl">
                感受空中伸展的<span>藝術之美。</span>
              </div>
            </div>
            <div>
              <div class="flex">
                <whitebtn><a href="＃">一般課程</a></whitebtn>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-[5%] mb-5 xl:mb-5 xl:w-1/3 xl:px-5">
          <div class="rounded-2xl bg-yoga-card-right p-6 xl:px-10 xl:pb-16 xl:pt-12">
            <div>
              <div class="flex items-center xl:block">
                <p class="text-sm font-bold text-white xl:text-xl">大地課程</p>
                <p class="ml-1 text-xs text-white xl:ml-0">Yoga</p>
              </div>
              <div class="mb-9 mt-3 text-[20px] tracking-widest text-white xl:my-14 xl:flex xl:flex-col xl:text-3xl">
                從豐富的課中<span>摸索自我。</span>
              </div>
            </div>
            <div>
              <div class="flex">
                <whitebtn><a href="＃">一般課程</a></whitebtn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-[5%] mb-0 mt-5 xl:mb-16 xl:mt-36">
        <div class="flex justify-between xl:justify-center xl:gap-20">
          <whitebtn><a href="＃">師資介紹</a></whitebtn>
          <whitebtn><a href="＃">據點介紹</a></whitebtn>
        </div>
      </div>
    </div>

      <div class="relative h-60 bg-[url('@/assets/img/home-banner-3.jpeg')] bg-cover xl:h-[560px]">
        <div class="absolute left-[10%] top-1/2 -translate-y-1/2 xl:left-[unset] xl:right-[10%]">
          <p class="text-[26px] text-white xl:text-5xl">AntiGravity® Fitness</p>
          <p class=" mb-9 text-sm text-white xl:mb-10 xl:text-3xl">NASM AFAA YA 唯一世界認證空中系統</p>
          <redbtn class="flex justify-start"><a href="＃">了解更多</a></redbtn>
        </div>
      </div>

      <div class="bg-primarycolor py-20 xl:pb-32 xl:pt-36">
        <div class="container mx-auto">
          <p class="mb-2 text-center text-[18px] text-white xl:mb-9 xl:text-4xl">台灣唯一官方認證單位</p>
          <p class="text-center text-[26px] text-white xl:text-6xl">AntiGravity® Taiwan</p>
          <div class="mt-20 xl:mb-12">
            <div class="mx-auto flex w-[82%] justify-between xl:mx-0 xl:w-full xl:justify-center xl:gap-40">
              <whitebtn><a href="＃">私教課程</a></whitebtn>
              <whitebtn><a href="＃">企業包班</a></whitebtn>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-[60px] xl:pt-28">
        <div class="container mx-auto px-4">
          <div class="mb-2 text-center text-[28px] font-medium text-white xl:mb-4 xl:text-4xl">預約體驗</div>
          <div class="mb-14 text-center text-sm font-normal text-white opacity-50">RESERVATION</div>
        </div>
      </div>

      <formVue></formVue>

      <div class="mb-0 mt-[60px] xl:mb-12 xl:mt-20">
        <div class="flex justify-center gap-40">
          <whitebtn><a href="＃">送出預約</a></whitebtn>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
// 佈局

</style>
