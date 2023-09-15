<script setup lang="ts">
// form 請填寫功能描述👈
const hobbits = ref(['一週兩次以上', '一週一次', '無']);
const hobbitsvalue = ref('');
const location = ref(['台中市中區',
  '台中市東區',
  '台中市西區',
  '台中市南區',
  '台中市北區',
  '台中市西屯區',
  '台中市南屯區',
  '台中市北屯區、潭子區',
  '台中市大雅區、太平區',
  '台中市其他區域', '彰化縣市',
  '台南市',
  '其他縣市']);
const locationvalue = ref('');
const store = ref([
  'Fly High Yoga崇德尊爵館　台中市北屯區梅川東路五段131號2樓',
  'Fly High Yoga崇德旗艦館　台中市北屯區崇德路三段599號3樓',
  'Fly High Yoga精誠館　台中市西屯區精誠路72號2樓',
  'Fly High Yoga黎明館　台中市南屯區干城街328號2樓之1',
  'Fly High Yoga河南館　台中市西屯區河南路二段317號',
  'Fly High Yoga一中館　台中市北區太平路17號3樓',
  'Fly High Yoga崇善館　台南市東區崇善路435號1樓 ',
  'Active 健身私教 精誠館　台中市西屯區精誠路72號B1',
  'Active 健身私教 崇德館　台中市北屯區崇德路三段599號3樓',
  'O\'Power崇德尊爵館　台中市北屯區梅川東路五段131號3樓']);

const suject = ref(['一對一健身私人教練課 諮詢體驗(60分鐘) $600', '完整填妥表格，我們將由專人處理 並會在24H內回覆您並確認訂課，請您耐心等待']);
const sujectvalue = ref('');
</script>

<template>
    <div class="flex justify-center">
        <div class="formwidth">
        <p class="mb-5 mt-10 flex justify-start text-xs text-white">標記<span class="required">*</span>為必填項目</p>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center">
        <div class="formwidth mb-9">
            <p class="mb-2 flex justify-start text-base text-white">姓名<span class="required">*</span></p>
            <input type="text" placeholder="" class="inputcolor w-full px-4 py-2">
        </div>

        <div class="formwidth mb-9">
            <p class="mb-2 flex justify-start text-base text-white">電話<span class="required">*</span></p>
            <input type="text" placeholder="" class="inputcolor w-full px-4 py-2">
        </div>

        <div class="formwidth mb-9">
            <p class="mb-2 flex justify-start text-base text-white">E-mail<span class="required">*</span></p>
            <input type="text" placeholder="" class="inputcolor w-full px-4 py-2">
        </div>

        <div class="formwidth mb-9">
            <p class="mb-2 flex justify-start text-base text-white">運動習慣<span class="required">*</span></p>
            <select v-model="hobbitsvalue" type="text" placeholder="" class="inputcolor w-full px-4 py-2">
                <option disabled value=""></option>
                <option v-for="item in hobbits" :key="item" :value="item">{{ item }}</option>
            </select>
        </div>

        <div class="formwidth mb-9">
            <p class="mb-2 flex justify-start text-base text-white">居住區域<span class="required">*</span></p>
            <select v-model="locationvalue" type="text" placeholder="" class="inputcolor w-full px-4 py-2">
                <option disabled value=""></option>
                <option v-for="item in location" :key="item" :value="item">{{ item }}</option>
            </select>
        </div>
    </div>

    <div class="flex justify-center">
        <div class="formwidth">
        <p class="mt-10 flex justify-start text-base text-white">欲預約館別<span class="required">*</span></p>
        </div>
    </div>

    <div class="mb-9 flex justify-center">
        <div class="formwidth">
            <div v-for="item in store" id="" :key="item" class="py-2">
                <input type="checkbox" name="">
                <label for="" class="pl-7 text-base tracking-widest text-white">{{ item }}</label>
            </div>
        </div>
    </div>

    <div class="flex justify-center">
        <div class="formwidth">
            <div class="formwidth mb-9">
             <p class="mb-2 flex justify-start text-base text-white">欲體驗科目<span class="required">*</span></p>
                <select v-model="locationvalue" type="text" placeholder="" class="inputcolor w-full px-4 py-2">
                <option disabled value="">請選擇</option>
                <option v-for="item in suject" :key="item" :value="item" :v-model="sujectvalue">{{ item }}</option>
                </select>
            </div>

            <div class="formwidth mb-9">
             <p class="mb-2 flex justify-start text-base text-white">優惠碼</p>
             <input type="text" placeholder="" class="inputcolor w-full px-4 py-2">
            </div>

            <div class="my-14 text-center text-2xl text-white">完整填妥表格，我們將由專人處理 並會在24H內回覆您並確認訂課，請您耐心等待</div>
            <div class="linecolor mt-12 grid grid-cols-6 flex-wrap justify-center pb-4 pt-8">

                <div class="px-4">
                      <a href="#" class="mb-2 rounded p-2 linebtncolor flex justify-center">
                    <img src="@/assets/img/line-outline.png" alt="" class="w-6">
                    <p class="text-white">崇德館</p>
                </a>
                </div>

                <div class="px-4">
                      <a href="#" class="mb-2 rounded p-2 linebtncolor flex justify-center">
                    <img src="@/assets/img/line-outline.png" alt="" class="w-6">
                    <p class="text-white">精誠館</p>
                </a>
                </div>

                <div class="px-4">
                      <a href="#" class="mb-2 rounded p-2 linebtncolor flex justify-center">
                    <img src="@/assets/img/line-outline.png" alt="" class="w-6">
                    <p class="text-white">黎明館</p>
                </a>
                </div>

                <div class="px-4">
                      <a href="#" class="mb-2 rounded p-2 linebtncolor flex justify-center">
                    <img src="@/assets/img/line-outline.png" alt="" class="w-6">
                    <p class="text-white">河南館</p>
                </a>
                </div>

                <div class="px-4">
                      <a href="#" class="mb-2 rounded p-2 linebtncolor flex justify-center">
                    <img src="@/assets/img/line-outline.png" alt="" class="w-6">
                    <p class="text-white">一中館</p>
                </a>
                </div>

                <div class="px-4">
                      <a href="#" class="mb-2 rounded p-2 linebtncolor flex justify-center">
                    <img src="@/assets/img/line-outline.png" alt="" class="w-6">
                    <p class="text-white">崇善館</p>
                </a>
                </div>

            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
// 佈局
#form1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 750px;
    height: 100%;
}

.inputcolor{
    color: #fff;
    background-color: #d98683;
}

.formwidth{
    width: 750px;
}

.required{
    color: red;
}

.linecolor{
    background-color: #ea8c89;
}

.linebtncolor{
    background-color: #e24e64;
}

</style>
