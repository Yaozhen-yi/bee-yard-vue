<script setup>
import { ref, computed,defineComponent } from "vue";
import { useRouter } from 'vue-router';

/*圖片載入 */
import Ph1 from "@/assets/images/3、5kg.jpg";
import PH2 from "@/assets/images/Narrow_mouth.jpg";
import PH3 from "@/assets/images/suger.jpg";
import PH4 from "@/assets/images/portable.jpg";
import GB1 from "@/assets/images/gift_wide_mouth.jpg";
import GB2 from "@/assets/images/gift_Narrow_mouth.jpg";
import Other1 from "@/assets/images/lip_balm.jpg";
import Other2 from "@/assets/images/Honey_loquat.jpg";
import Other3 from "@/assets/images/pollen_grains.jpg";
import Other4 from "@/assets/images/Propolis.jpg";
import Other5 from "@/assets/images/Queen_Bee_Capsule.jpg";
import Other6 from "@/assets/images/Fruit_enzyme.jpg";
import Other7 from "@/assets/images/honey_vinegar.jpg";


// /* 跳轉路由*/
const router = useRouter();

// 用來存放輸入框的資料
const inputKG = ref('');
const inputNarrow = ref('');
const inputSuger = ref('');
const inputPortable = ref('');
const inputGiftWide = ref('');
const inputGiftNarrow = ref('');
const inputlipBalm = ref('');
const inputHoneyLoquat = ref('');
const inputPollenGrains = ref('');
const inputPropolis = ref('');
const inputQueen = ref('');
const inputFruit = ref('');
const inputhHoneyVinegar = ref('');
const inputMoney = ref('');

/*發送定義事件, 向父組件發送數據 */
const emit = defineEmits(['send-data']);

const sendData = () => {
  const data = {
    inputKG: inputKG.value,
    inputNarrow: inputNarrow.value,
    inputSuger: inputSuger.value,
    inputPortable: inputPortable.value,
    inputGiftWide: inputGiftWide.value,
    inputGiftNarrow: inputGiftNarrow.value,
    inputlipBalm : inputlipBalm.value,
    inputHoneyLoquat : inputHoneyLoquat.value,
    inputPollenGrains : inputPollenGrains.value,
    inputPropolis : inputPropolis.value,
    inputQueen : inputQueen.value,
    inputFruit : inputFruit.value,
    inputhHoneyVinegar : inputhHoneyVinegar.value,
    inputMoney: inputMoney.value,

  };
  // 觸發 send-data 事件，並傳遞數據給父組件
  emit('send-data', data);
  console.log("輸入的數據是:",data)

  /*將data數據儲存到sessionStorage,在formDisplay中顯示 */
  sessionStorage.setItem('formData', JSON.stringify(data));
  //跳轉到formDisplay頁面
  router.push('/formDisplay');
};

</script>


<template>
  <div class="counter">
    <h2>產品介紹</h2>
    <!-- 側邊攔 -->
    <div class="left">
      <v-btn><a href="#pure_honey">純蜜系列</a></v-btn>
      <v-btn><a href="#gift_box">禮盒系列</a></v-btn>
      <v-btn><a href="#other">相關產品系列</a></v-btn>
    </div>
    <!-- 商品內容 -->
    <div class="right">
    <!-- 純蜜系列 -->
      <div class="pure_honey" id="pure_honey">
        <h4>純蜜系列</h4>
        <ul>
        <li>
          <v-img :src='Ph1' width='450'></v-img>
          <p class="introduce">
            <b class="title">3/5斤裝純蜜<span style="color:red;">NT.700/NT.1000</span></b>
            <b class="taste">口味:百花蜜、咸豐草蜜、烏桕密</b><br>
            <b class="title">3/5斤裝純蜜<span style="color:red;">NT.800/NT.1100</span> </b>
            <b class="taste">口味:荔枝蜜</b><br>
            <b class="title">3/5斤裝純蜜<span style="color:red;">NT.900/NT1300</span> </b>
            <b class="taste">口味:龍眼蜜、千層蜜、紅柴蜜</b> 
          </p>
          <input v-model="inputKG" type="text" placeholder="(填口味及數量) ex.百花蜜, 3">
        </li> 
        <li>
          <v-img :src='PH2'width='450'></v-img>
          <p class="introduce">
            <b class="title">窄口瓶<span style="color:red;">NT.400</span></b>
            <b class="taste">口味:百花蜜、咸豐草蜜、烏桕密</b><br>
            <b class="title">窄口瓶<span style="color:red;">NT.450</span> </b>
            <b class="taste">口味:荔枝蜜、龍眼蜜、千層蜜、紅柴蜜</b><br>
            <b class="title">結晶蜜<span style="color:red;">NT.600</span> </b>
          </p>
          <input v-model="inputNarrow" type="text" placeholder="(填口味及數量) ex.百花蜜, 3">
        </li> 
        <li>
          <v-img :src='PH3'width='450'></v-img>
          <p class="introduce">
            <b class="title">果糖瓶裝<span style="color:red;">NT.250</span></b>
            <b class="taste">口味:百花蜜、咸豐草蜜、烏桕密</b><br>
            <b class="title">果糖瓶裝<span style="color:red;">NT.300</span> </b>
            <b class="taste">口味:荔枝蜜、龍眼蜜、千層蜜、紅柴蜜</b><br>
          </p>
          <input v-model="inputSuger" type="text" placeholder="(填口味及數量) ex.百花蜜, 3">
        </li> 
        <li>
          <v-img :src='PH4'width='450'></v-img>
          <p class="introduce">
            <b class="title">隨身瓶<span style="color:red;">NT.120</span></b><br>
            <b class="taste">口味:百花蜜、咸豐草蜜、烏桕密、荔枝蜜、龍眼蜜、千層蜜、紅柴蜜</b>
          </p>
          <input v-model="inputPortable" type="text" placeholder="(填口味及數量) ex.百花蜜, 3">
        </li> 
        </ul>
      </div>

    <!-- 禮盒系列 -->
      <div class="gift_box" id="gift_box">
        <h4>禮盒系列</h4>
        <ul>
        <li>
          <v-img :src='GB1' width='450'></v-img>
          <p class="introduce">
            <b class="title">蜂蜜禮盒(寬口瓶)<span style="color:red;">NT.500</span></b><br>
            <b class="taste">口味:百花蜜、咸豐草蜜、烏桕密、荔枝蜜、龍眼蜜、千層蜜、紅柴蜜</b>
          </p>
          <input v-model="inputGiftWide" type="text" placeholder="(填口味及數量) ex.百花蜜, 3">
        </li> 
        <li>
          <v-img :src='GB2'width='450'></v-img>
          <p class="introduce">
            <b class="title">蜂蜜禮盒(窄口瓶)<span style="color:red;">NT.500</span></b><br>
            <b class="taste">口味:百花蜜、咸豐草蜜、烏桕密、荔枝蜜、龍眼蜜、千層蜜、紅柴蜜</b>
          </p>
          <input v-model="inputGiftNarrow" type="text" placeholder="(填口味及數量) ex.百花蜜, 3">
          
        </li> 
        </ul>
      </div>
     
    <!-- 相關產品系列 -->
      <div class="other" id="other">
        <h4>相關產品系列</h4>
        <ul>
        <li>
          <v-img :src='Other1' width='450'></v-img>
          <p class="introduce">
            <b class="title">護唇膏<span style="color:red;">NT.80</span></b><br>
            <b class="taste">口味:綠茶香、香橙香、桂花香、天然香</b>
          </p>
          <input v-model="inputlipBalm" type="text" placeholder="(填口味及數量) ex.甜橙, 2">
        </li> 
        <li>
          <v-img :src='Other2'width='450'></v-img>
          <p class="introduce">
            <b class="title">蜂蜜枇杷喉糖大 380g/<span style="color:red;">NT.300</span></b><br>
            <b class="title">蜂蜜枇杷喉糖小 1200g/<span style="color:red;">NT.150</span></b><br>
          </p>
          <input v-model="inputHoneyLoquat" type="text" placeholder="(填大/小盒及數量) ex.大, 3">
        </li> 
        <li>
          <v-img :src='Other3'width='450'></v-img>
          <p class="introduce">
            <b class="title">罐裝花粉粒<span style="color:red;">NT.400</span></b><br>
            <b class="taste">口味:茶花、咸豐草花、油菜花、小花蔓澤蘭花</b>
            <b class="title">罐裝花粉粒<span style="color:red;">NT.500</span></b><br>
            <b class="taste">口味:埔鹽花</b>
          </p>
          <input v-model="inputPollenGrains" type="text" placeholder="(填口味及數量) ex.百花蜜, 3">
        </li>
        <li>
          <v-img :src='Other4'width='450'></v-img>
          <p class="introduce">
            <b class="title">蜂膠<span style="color:red;">NT.1500</span></b><br>
            <b class="taste"></b>
          </p>
          <input v-model="inputPropolis" type="text" placeholder="(填口味及數量) ex.百花蜜, 3">
        </li> 
        <li>
          <v-img :src='Other5'width='450'></v-img>
          <p class="introduce">
            <b class="title">蜂王乳/膠囊<span style="color:red;">NT.1500</span></b><br>
            <b class="taste">分為膠囊以及蜂王乳罐裝</b>
          </p>
          <input v-model="inputQueen" type="text" placeholder="(填口味及數量) ex.膠囊,2">
        </li> 
        <li>
          <v-img :src='Other6'width='450'></v-img>
          <p class="introduce">
            <b class="title">蜂蜜水果酵素<span style="color:red;">NT.450</span></b><br>
            <b class="taste"></b>
          </p>
          <input v-model="inputFruit" type="text" placeholder="(填數量) ex. 3">
        </li> 
        <li >
          <v-img :src='Other7'width='450'></v-img>
          <p class="introduce">
            <b class="title">蜂蜜醋<span style="color:red;">NT.400</span></b><br>
            <b class="taste"></b>
          </p>
          <input v-model="inputhHoneyVinegar" type="text" placeholder="(填數量) ex.2">
        </li> 
        <li>
          <p class="money">
            <b>商品總金額</b>
            <input v-model="inputMoney" type="text" placeholder="請填入金額">
          </p>
           <button class="btn" @click="sendData">送出</button>
        </li>
       
         

        </ul>
      </div>
      
      </div>
  </div> 
</template>
<style>
a{
    text-decoration: none;
    color: #333;
}
ul li{
  list-style: none;
}

.counter{
  display: inline-block;
}
/*側邊攔*/ 
.left{
  position: relative;
  float: left;
  width: 150px;
  height: 250px;
  margin: 20px;
}
.left .v-btn{
  margin-top: 30px;
  font-size: 20px;
}

/*右邊商品介紹-純蜜系列*/
.right{
  float: left;
  width: 890px;
  margin-left: 20px;
}
.right .pure_honey{
  position: relative;
  float: left;
  margin-right: 10px;
}
.right .pure_honey h4{
  margin-left: 20px;
  font-size: 30px;
  font-weight: 700;
}
.right .pure_honey ul li {
  list-style: none;
  position: relative;
  float: left;
  margin:20px;
  width: 450px;
  height: 550px;
  text-align: center;
}
.right .pure_honey ul li .introduce{
  margin-bottom: 20px;
}
.right .pure_honey ul li .introduce b{
  font-size:20px;
}
.right .pure_honey ul li input{
  position: relative;
  float: left;
  width: 250px;
  height: 50px;
  margin-left: 100px;
  font-size: 20px;
  text-align: center;

}
/*右邊商品介紹-禮盒系列*/
.right .gift_box {
  position: relative;
  float: left;
  margin-right: 10px;
}
.right .gift_box h4{
  margin-left: 20px;
  font-size: 30px;
  font-weight: 700;
}
.right .gift_box ul li{
  list-style: none;
  position: relative;
  float: left;
  margin:20px;
  width: 450px;
  height: 600px;
  text-align: center;
}
.right .gift_box ul li .introduce{
  margin-bottom: 20px;
}
.right .gift_box ul li .introduce b{
  font-size:20px;
}
.right .gift_box ul li input{
  position: relative;
  float: left;
  width: 250px;
  height: 50px;
  margin-left: 100px;
  font-size: 20px;
  text-align: center;

}

/*右邊商品介紹-相關產品系列*/
.right .other {
  position: relative;
  float: left;
  margin-right: 10px;
  margin-top: 120px;
}
.right .other h4{
  margin-left: 20px;
  font-size: 30px;
  font-weight: 700;
}
.right .other ul li{
  list-style: none;
  position: relative;
  float: left;
  margin:20px;
  width: 450px;
  height: 600px;
  text-align: center;
}
.right .other ul li .introduce{
  margin-bottom: 20px;
}
.right .other ul li .introduce b{
  font-size:20px;
}
.right .other ul li input{
  position: relative;
  float: left;
  width: 250px;
  height: 50px;
  margin-left: 100px;
  font-size: 20px;
  text-align: center;

}

.right .other ul li .money{
  margin: 20px;
  width: 100%;
  height: 150px;
  border: 2px solid black;
 
}
.right .other ul li .money b {
  font-size: 30px;
}
.right .other ul li .money input{
  width: 150px;
  margin-bottom: 50px;
  margin-left: 150px;
}

/*btn */

.btn{
  width: 300px;
  height: 200px;
  font-size: 50px;
  font-weight: 700;
  background-color: #BBDEFB;
  margin-top: 150px;
}
</style>
