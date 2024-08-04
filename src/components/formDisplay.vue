<script setup>
import { ref, onMounted } from 'vue';

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

const peopleData = ref({
    name:'',
    phone: '',
    address: '',
    emailField: '',
})
// 從 sessionStorage 中獲取數據
onMounted(() => {
    //訂購人資料
    const storedPeopleData = sessionStorage.getItem('peopleData');
  if (storedPeopleData) {
    peopleData.value = JSON.parse(storedPeopleData);
  }

  //訂購商品資料
  const storedData = sessionStorage.getItem('formData');
  if (storedData) {
    formData.value = JSON.parse(storedData);
  }
});

// 檢查值是否不為空
const isVisible = (value) => value !== '';
</script>

<template>
    <div>
        <div class="people">
        <h2>訂購人資訊</h2>
            <p id="information1">姓名: {{ peopleData.name }}</p>
            <p id="information2">電話: {{ peopleData.phone }}</p>
            <p id="information3">地址: {{ peopleData.address }}</p>
            <p id="information4">E-mail: {{ peopleData.emailField }}</p>
        </div>
        <h2>訂購資訊</h2>
        <div class="product">
            <div class="pure_honey" v-show="isVisible(formData.inputKG) || isVisible(formData.inputNarrow) || isVisible(formData.inputSuger) || isVisible(formData.inputPortable)">
            <h3>純蜜系列</h3>
            <p v-show="isVisible(formData.inputKG)">3/5斤裝純蜜的口味及数量：<span>{{ formData.inputKG }}</span></p>
            <p v-show="isVisible(formData.inputNarrow)">窄口瓶的口味及数量：<span>{{ formData.inputNarrow }}</span></p>
            <p v-show="isVisible(formData.inputSuger)">果糖瓶裝的口味及数量：<span>{{ formData.inputSuger }}</span></p>
            <p v-show="isVisible(formData.inputPortable)">隨身瓶的口味及数量：<span>{{ formData.inputPortable }}</span></p>
        </div>
    
        <div class="gift_box" v-show="isVisible(formData.inputGiftWide) || isVisible(formData.inputGiftNarrow)">
            <h3>禮盒系列</h3>
            <p v-show="isVisible(formData.inputGiftWide)">蜂蜜禮盒(寬口瓶)的口味及数量：<span>{{ formData.inputGiftWide }}</span></p>
            <p v-show="isVisible(formData.inputGiftNarrow)">蜂蜜禮盒(窄口瓶)的口味及数量：<span>{{ formData.inputGiftNarrow }}</span></p>
        </div>
    
        <div class="other" v-show="isVisible(formData.inputlipBalm) || isVisible(formData.inputHoneyLoquat) || isVisible(formData.inputPollenGrains) || isVisible(formData.inputPropolis) || isVisible(formData.inputQueen) || isVisible(formData.inputFruit) || isVisible(formData.inputhHoneyVinegar) || isVisible(formData.inputMoney)">
            <h3>相關產品系列</h3>
            <p v-show="isVisible(formData.inputlipBalm)">護唇膏口味及数量：<span>{{ formData.inputlipBalm }}</span></p>
            <p v-show="isVisible(formData.inputHoneyLoquat)">蜂蜜枇杷喉糖数量：<span>{{ formData.inputHoneyLoquat }}</span></p>
            <p v-show="isVisible(formData.inputPollenGrains)">罐裝花粉粒口味及数量：<span>{{ formData.inputPollenGrains }}</span></p>
            <p v-show="isVisible(formData.inputPropolis)">蜂膠数量：<span>{{ formData.inputPropolis }}</span></p>
            <p v-show="isVisible(formData.inputQueen)">蜂王乳/膠囊数量：<span>{{ formData.inputQueen }}</span></p>
            <p v-show="isVisible(formData.inputFruit)">蜂蜜水果酵素数量：<span>{{ formData.inputFruit }}</span></p>
            <p v-show="isVisible(formData.inputhHoneyVinegar)">蜂蜜醋数量：<span>{{ formData.inputhHoneyVinegar }}</span></p>
            <p v-show="isVisible(formData.inputMoney)">商品總金額: <span>{{ formData.inputMoney }}</span></p>
        </div>
        </div>
        
    </div>
  </template>
<style>
div{
    width:1240px;
    margin: auto;
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
    margin-left: 30px;
    font-weight: 700;
}
.pure_honey p{
    margin-left: 40px;
    font-weight: 400;
}
.pure_honey span{
    color: #EF5350;
}
/*禮盒 */
.gift_box h3{
    font-size: 30px;
    margin: 10px 30px 20px;
    font-weight: 700;
}
.gift_box p{
    margin-left: 40px;
    font-weight: 400;
}
.gift_box span{
    color: #EF5350;
}
/*相關產品 */
.other h3{
    font-size: 30px;
    margin: 10px 30px 20px;
    font-weight: 700;
}
.other p{
    margin-left: 40px;
    font-weight: 400;
}
.other span{
    color: #EF5350;
}
</style>