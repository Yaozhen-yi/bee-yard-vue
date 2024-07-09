<script setup>
import { defineComponent, ref, onMounted } from 'vue';
import Form from './webform.vue';

const formData = ref({
  inputKG: '',
  inputNarrow: '',
  inputSuger: '',
  inputPortable: '',
  inputGiftWide: '',
  inputGiftNarrow: '',
  inputlipBalm:'',
  inputHoneyLoquat:'',
  inputPollenGrains:'',
  inputPropolis:'',
  inputQueen:'',
  inputFruit:'',
  inputhHoneyVinegar: '',
  inputMoney: ''
});

// 從 sessionStorage 中獲取數據
onMounted(() => {
  const storedData = sessionStorage.getItem('formData');
  if (storedData) {
    formData.value = JSON.parse(storedData);
  }
});



</script>

<template>
    <div>
       
        <h2>訂購資訊</h2>
        <!--純蜜-->
        <div class="pure_honey">
            <h3>純蜜系列</h3>
            <p>3/5斤裝純蜜的口味及数量：<span>{{ formData.inputKG }}</span></p>
            <p>窄口瓶的口味及数量：<span>{{ formData.inputNarrow }}</span></p>
            <p>果糖瓶裝的口味及数量：<span>{{ formData.inputSuger }}</span></p>
            <p>隨身瓶的口味及数量：<span>{{ formData.inputPortable }}</span></p>
        </div>
         <!--裡盒-->
        <div class="gift_box">
            <h3>禮盒系列</h3>
            <p>蜂蜜禮盒(寬口瓶)的口味及数量：<span>{{ formData.inputGiftWide }}</span></p>
            <p>蜂蜜禮盒(窄口瓶)的口味及数量：<span>{{ formData.inputGiftNarrow }}</span></p>
        </div>
       <!--其他相關產品-->
        <div class="other">
            <h3>相關產品系列</h3>
            <p>護唇膏口味及数量：<span>{{ formData.inputlipBalm }}</span></p>
            <p>蜂蜜枇杷喉糖数量：<span>{{ formData.inputHoneyLoquat }}</span></p>
            <p>罐裝花粉粒口味及数量：<span>{{ formData.inputPollenGrains }}</span></p>
            <p>蜂膠数量：<span>{{ formData.inputPropolis }}</span></p>
            <p>蜂王乳/膠囊数量：<span>{{ formData.inputQueen }}</span></p>
            <p>蜂蜜水果酵素数量：<span>{{ formData.inputFruit }}</span></p>
            <p>蜂蜜醋数量：<span>{{ formData.inputhHoneyVinegar }}</span></p>
            <p>商品總金額: <span>{{ formData.inputMoney}}</span></p>
        </div>
    </div>
     <Form/>
  </template>
<style>
div{
    width:1240px;
}
h2{
    font-size: 40px;
    font-weight: 700;
    margin: 20px;
}
/*純蜜 */

.pure_honey h3{
    font-size: 30px;
    margin-bottom: 20px;
}
.pure_honey p{
    margin-bottom: 10px;
}
.pure_honey span{
    color: #EF5350;
}
/*裡盒 */
.gift_box h3{
    font-size: 30px;
    margin-bottom: 20px;
}
.gift_box p{
    margin-bottom: 10px;
}
.gift_box span{
    color: #EF5350;
}
/*相關產品 */
.other h3{
    font-size: 30px;
    margin-bottom: 20px;
}
.other p{
    margin-bottom: 10px;
}
.other span{
    color: #EF5350;
}
</style>
