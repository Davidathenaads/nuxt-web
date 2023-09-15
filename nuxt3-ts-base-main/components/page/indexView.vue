<script setup lang="ts">
import infoBox from '@/components/page/home/infoBox.vue';
import formVue from '@/components/page/home/form.vue';
import whitebtn from '@/components/page/home/whitebtn.vue';
import redbtn from '@/components/page/home/redbtn.vue';
//  請填寫功能描述👈
const img1 = '_nuxt/assets/img/img1.jpeg';
const img2 = '_nuxt/assets/img/img2.jpeg';
const img3 = '_nuxt/assets/img/img3.png';

const title1 = '普發6000珈倍術';
const title2 = '大受歡迎的流動瑜珈︰幫你提升肌力、提振精神';
const title3 = '暑期快閃！！讓你的孩子能靜也能動的反重力兒童空中瑜珈';

const text1 = `Fly High Yoga為你超前部署母親節好禮
還能幫你一秒放大現金

獻給媽咪最頂級的極致寵愛`;
const text2 = '流動瑜珈這幾年在台灣大受歡迎，主要是因為是相對於哈達瑜珈來說，它是一門節奏比較快、停頓的時間較短、強度也較高的瑜珈，對於想要提升心肺、肌力的人來說，它的效果非常不錯……';
const text3 = `無需飛往外太空，
只要參加反重力兒童空中瑜伽，
孩子就能夠享受漂浮在空中的感覺，
開啟一段全新的瑜伽之旅`;
</script>

<template>
  <div>
    <img src="@/assets/img/page-slide-about.jpg" alt="" class="h-full sm:h-full xl:h-1/2">
  </div>
  <div class="bordercolor flex justify-around border-b-2 py-6">
    <div class="flex items-center">
      <img src="@/assets/img/member.png" alt="" class="w-10">
      <div class="ml-2">
        <p class="text-sm text-white">體驗課程<br>Trial Class</p>
      </div>
      <p></p>
    </div>

    <div class="flex items-center">
      <img src="@/assets/img/booking.png" alt="" class="w-10">
      <div class="ml-2">
        <p class="text-sm text-white">課程介紹<br>Course Introduction</p>
      </div>
    </div>

    <div class="flex items-center">
      <img src="@/assets/img/offer.png" alt="" class="w-10">
      <div class="ml-2">
        <p class="text-sm text-white">優惠訊息<br>Discount</p>
      </div>
    </div>

    <div class="flex items-center">
      <img src="@/assets/img/member-only.png" alt="" class="w-10">
      <div class="ml-2">
        <p class="text-sm text-white">會員專區<br>Ｍember Only</p>
      </div>
    </div>
  </div>

  <div class="container mx-auto flex">
    <div class="mx-5  grid grid-cols-3 justify-center gap-9 py-32">
      <div>
        <infoBox :img="img1" :title="title1" :text="text1"></infoBox>
      </div>

      <div>
        <infoBox :img="img2" :title="title2" :text="text2"></infoBox>
      </div>

      <div>
       <infoBox :img="img3" :title="title3" :text="text3"></infoBox>
     </div>

    </div>
  </div>

  <div class="flex justify-center pb-28">
      <whitebtn><a href="https://www.flyhighyoga.com.tw/press">MORE</a></whitebtn>
  </div>
  <div class="middlebanner relative">
    <div class="left10 absolute top-1/2">
      <p class="text-5xl text-white">My Yoga Life</p>
      <p class="mb-10 text-3xl text-white">將瑜伽融入生活，隨時來場身體探險。</p>
        <redbtn class="flex justify-start"><a href="＃">關於我們</a></redbtn>
    </div>
  </div>
  <div class="my-28">
    <div class="container mx-auto mb-14">
      <h2 class="mb-4 text-center text-4xl font-medium text-white">三大授課結構</h2>
      <p class="text-center text-sm font-light text-white opacity-50">TEACHING STRUCTURE</p>
    </div>

    <div class="flex justify-center">
      <div class="mb-5 w-1/3 px-5">
        <div class="cardcolorleft rounded-2xl px-10 pb-16 pt-12">
          <div>
            <div>
              <p class="text-xl font-bold text-white">反重力課程</p>
              <p class="font-light text-white">AntiGravity® Fitness</p>
            </div>
            <div class="my-14 text-3xl tracking-widest text-white">
              <p>感受空中伸展的<br>藝術之美。</p>
            </div>
          </div>
          <div>
            <div class="flex">
              <whitebtn><a href="＃">一般課程</a></whitebtn>
            </div>

          </div>

        </div>

      </div>

      <div class="mb-5 w-1/3 px-5">
        <div class="cardcolorright rounded-2xl px-10 pb-16 pt-12">
          <div>
            <div>
              <p class="text-xl font-bold text-white">大地課程</p>
              <p class="font-light text-white">Yoga</p>

            </div>
            <div class="my-14 text-3xl tracking-widest text-white">
              <p>從豐富的課中<br>摸索自我。</p>
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

    <div class="mb-16 mt-36">
            <div class="flex justify-center gap-20">
              <whitebtn><a href="＃">師資介紹</a></whitebtn>
              <whitebtn><a href="＃">據點介紹</a></whitebtn>
            </div>
    </div>

    <div class="middlebanner2 relative">
      <div class="right10 absolute top-1/2">
      <p class="text-5xl text-white">My Yoga Life</p>
      <p class="mb-10 text-3xl text-white">將瑜伽融入生活，隨時來場身體探險。</p>
        <redbtn class="flex justify-start"><a href="＃">關於我們</a></redbtn>
     </div>
    </div>

    <div class="anti pb-32 pt-36">
       <div class="container mx-auto">
          <p class="mb-9 text-center text-4xl text-white">台灣唯一官方認證單位</p>
          <p class="text-center text-6xl text-white">AntiGravity® Taiwan</p>

          <div class="mb-12 mt-20">
            <div class="flex justify-center gap-40">
              <whitebtn><a href="＃">私教課程</a></whitebtn>
              <whitebtn><a href="＃">企業包班</a></whitebtn>
            </div>
          </div>
       </div>
    </div>

    <div class="pt-28 ">
      <div class="container mx-auto px-4">
        <div class="mb-4 text-center text-4xl text-white">預約體驗</div>
        <div class="mb-14 text-center text-sm font-normal text-white opacity-50">RESERVATION</div>
        <div></div>
      </div>
    </div>

    <formVue></formVue>

    <div class="mb-12 mt-20">
            <div class="flex justify-center gap-40">
              <whitebtn><a href="＃">送出預約</a></whitebtn>
            </div>
          </div>
            </div>
</template>

<style lang="scss" scoped>
// 佈局
.homebanner{
  width: 100%;
  height: 560px;
  object-fit: cover;
}

.middlebanner{
  background-image: url("@/assets/img/home-banner-1.jpg");
  height: 560px;
}

.middlebanner2{
  background-image: url("@/assets/img/home-banner-3.jpeg");
  height: 740px;
}

.left10{
  left: 10%;
}

.right10{
  right: 10%;
}

.bordercolor{
  border-color: #d93b57;
}

.cardcolorleft{
  background-color: #e84860;
}

.cardcolorright{
  background-color: #eec8a1;
}

.anti{
  background-color: #d93b57;
}

.linecolor{
    background-color: #ea8c89;
}

.linebtncolor{
    background-color: #e24e64;
}
</style>
