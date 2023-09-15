<script setup lang="ts">
// layout

</script>

<template>
    <div class="footer">
        <div class="footerbody">
            <div class="mb-16">
                <p class="mb-4 text-center text-4xl font-medium text-white">關注我們</p>
                <p class="mb-4 text-center text-sm font-light text-white">FOLLOW US</p>
            </div>
            <div class="maildiv mb-20">
                <img src="@/assets/img/mail-white.png" alt="" class="h-6">

            </div>
        </div>
        <div class=" flex justify-around pb-20">
            <div>
                <div class="mb-5 w-40 border-b-2 pb-2 text-sm font-medium text-white">
                    <p class="">品牌介紹</p>
                </div>
                <ul class="text-white">
                    <li class="pb-2 text-sm font-medium">FLY HIGH YOGA</li>
                    <li class="pb-2 text-sm font-medium">AntiGravity® Fitness</li>
                </ul>
            </div>

            <div>
                <div class="mb-5 w-40 border-b-2 pb-2 text-sm font-medium text-white">
                    <p class="">官方訊息</p>
                </div>
                <ul class="text-white">
                    <li class="pb-2 text-sm font-medium">官方訊息</li>
                    <li class="pb-2 text-sm font-medium">優惠訊息</li>
                    <li class="pb-2 text-sm font-medium">課程分享</li>
                    <li class="pb-2 text-sm font-medium">特別活動</li>
                    <li class="pb-2 text-sm font-medium">部落格</li>
                </ul>
            </div>

            <div>
                <div class="mb-5 w-40 border-b-2 pb-2 text-sm font-medium text-white">
                    <p class="">課程資訊</p>
                </div>
                <ul class="text-white">
                    <li class="pb-2 text-sm font-medium">反重力一般課程</li>
                    <li class="pb-2 text-sm font-medium">反重力認證課程</li>
                    <li class="pb-2 text-sm font-medium">大地課程</li>
                    <li class="pb-2 text-sm font-medium">懸吊課程</li>
                    <li class="pb-2 text-sm font-medium">兒童課程</li>
                    <li class="pb-2 text-sm font-medium">私教課程</li>
                    <li class="pb-2 text-sm font-medium">企業包班</li>
                    <li class="pb-2 text-sm font-medium">師資介紹</li>
                    <li class="pb-2 text-sm font-medium">課程表</li>
                </ul>
            </div>

            <div>
                <div class="mb-5 w-40 border-b-2 pb-2 text-sm font-medium text-white">
                    <p class="">據點介紹</p>
                </div>
                <ul class="text-white">
                    <li class="pb-2 text-sm font-medium">台中崇德館</li>
                    <li class="pb-2 text-sm font-medium">台中精誠館</li>
                    <li class="pb-2 text-sm font-medium">台中黎明館</li>
                    <li class="pb-2 text-sm font-medium">台中河南館</li>
                    <li class="pb-2 text-sm font-medium">台中一中館</li>
                    <li class="pb-2 text-sm font-medium">台中崇德尊爵館</li>
                    <li class="pb-2 text-sm font-medium">台南崇善館</li>
                </ul>
            </div>

            <div>
                <div class="mb-5 w-40 border-b-2 pb-2 text-sm font-medium text-white">
                    <p class="">聯絡我們</p>
                </div>
                <ul class="text-white">
                    <li class="pb-2 text-sm font-medium">企業合作方案</li>
                    <li class="pb-2 text-sm font-medium">徵才資訊</li>
                    <li class="pb-2 text-sm font-medium">聯絡資訊</li>
                </ul>
            </div>

            <div>
                <div class="mb-5 w-40 border-b-2 pb-2 text-sm font-medium text-white">
                    <p class="">會員專區</p>
                </div>
                <ul class="text-white">
                    <li class="pb-2 text-sm font-medium">佈告欄</li>
                    <li class="pb-2 text-sm font-medium">線上訂課</li>
                    <li class="pb-2 text-sm font-medium">訂課詳情與規則</li>
                </ul>
            </div>

        </div>

        <div class="flex justify-between pb-5">
            <div>
                <a href="" class="logolink">
                    <img src="@/assets/img/logo.svg" alt="" height="40px">
                    <span class="cont1-title text-white">
                        <p>AntiGravity® Taiwan</p>
                    </span>
                </a>

            </div>
            <div class="text-right text-white text-sm">
                <p>Copyright © FLY HIGH YOGA. All Rights Reserved.
                <br>
                Designed by 超御設計 CROZMIND Design & Made by NEXTOP</p>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>

// 佈局
#layout {
  max-width: 100vw;
  min-height: 100vh;
}

.footerbody {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 80px;
    flex-direction: column;
}

.footer{
    padding-right: 5%;
    padding-left: 5%;
    background-color: #E74760;

}

.logolink {
    display: flex;
  align-items: center;

  .cont1-title{
    margin-left: 20px;
  }
}

.maildiv{
    display: flex;
  align-items: center;
  justify-content: center;
}

</style>
