<script setup lang="ts">
// whitebtn 請填寫功能描述👈
</script>

<template>
  <div class="mt-12 text-center">
            <a class="btncolor px-10 py-3 text-white">
                <slot></slot>
            </a>
        </div>
</template>

<style lang="scss" scoped>
// 佈局
.redbtn {
    border: 1px solid #fff;
}

.btncolor {
    background-color: #db485d;
}
</style>
