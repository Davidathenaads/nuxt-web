<script setup lang="ts">
// layout

</script>

<template>
<div class="cont1 text-white">
  <a href="" class="logolink">
    <img src="@/assets/img/logo.svg" alt="" height="40px">
    <span class="cont1-title">
      <p>AntiGravity® Taiwan</p>
    </span>
  </a>
 <ul>
  <li class="text-sm">品牌介紹</li>
  <li class="text-sm">官方訊息</li>
  <li class="text-sm">課程資訊</li>
  <li class="text-sm">據點介紹</li>
  <li class="text-sm">師資認證</li>
  <li class="text-sm">報名資訊</li>
  <li class="text-sm">聯絡我們</li>
 </ul>
 <button class="rounded-s-sm border-2 px-2 py-1 text-xs">會員登入</button>
</div>

</template>

<style lang="scss" scoped>
img{
  height: 40px;
}

.logolink{
  display: flex;
  align-items: center;

  .cont1-title{
    margin-left: 20px;
  }
}

.cont1{
  display: flex;
  align-items: center;
  justify-content: space-around;

ul{
  display: flex;
  align-items: center;
  justify-content: space-around;
}

li{
  margin: 20px;
}
}

</style>
