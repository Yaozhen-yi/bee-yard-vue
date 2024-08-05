<script setup>
import { useRouter } from 'vue-router';

const jumpRouter = (path) => {
    const router = useRouter();
    router.push(path);
}
import Img1 from '@/assets/images/banner1.jpg';
import Img2 from '@/assets/images/banner2.jpg';
import Img3 from '@/assets/images/banner3.jpg';
import leftProduct from "@/assets/images/product.jpg";
import Right1 from "@/assets/images/3、5kg.jpg";
import Right2 from "@/assets/images/suger.jpg";
import Right3 from "@/assets/images/Narrow_mouth.jpg";
import Right4 from "@/assets/images/portable.jpg";
</script>

<template>
    <!--輪播圖-->
<div class="lunbo">
    <v-carousel height="300" show-arrows="hover" cycle>
        <v-carousel-item :src='Img1'cover></v-carousel-item>
        <v-carousel-item :src='Img2'cover></v-carousel-item>
        <v-carousel-item :src='Img3'cover></v-carousel-item>
    </v-carousel>
</div>
<!--首頁 商品介紹-->
<div class="hd">商品介紹
    <span>Product
        <v-btn><router-link to="/product">查看全部</router-link></v-btn>
    </span>
</div>
<!---->
<div class="counter">
    <div class="bd-left">
         <v-img :src='leftProduct'max-hight="250" >
            <router-link to="/product"></router-link>
         </v-img>
    </div>
    <div class="bd-right">
        <router-link to="/product">
            <div class="list-container">
                <ul>
                    <li>
                        <v-img :src='Right1'></v-img>
                          <h4>3、5斤裝純蜜系列</h4>
                            <v-btn>more</v-btn>
                    </li>
                    <li>
                        <v-img :src='Right2'></v-img>
                        <h4>果瓶裝純蜜系列</h4>
                            <v-btn>more</v-btn>
                    </li>
                </ul>
                <ul>
                    <li>
                        <v-img :src='Right3'></v-img>
                        <h4>窄口瓶裝純蜜系列</h4>
                        <v-btn>more</v-btn>
                    </li>
                    <li>
                        <v-img :src='Right4'></v-img>
                        <h4>隨身瓶裝純蜜系列</h4>
                        <v-btn>more</v-btn>
                    </li>
                </ul>
            </div>
        </router-link>
            
    </div>
</div>

  </template>
  <style scoped>
  div{
    width: 1240px;
    margin:20px -10px;
}
.lunbo{
  margin-top: 40px;
  margin-left: 5px;
}
  .hd{
    height: 50px;
    position: relative;
    font-size: 30px;
    margin: 30px 0;
    margin-left: -30px;
  }
  .hd span{
    padding-left: 20px;
    color: red;
    font-size: 30px;
  }
  .hd .v-btn{
    float: right;
    margin-right: 20px;
  }
  .counter{
    width: 1240px;
  }
  .bd-left{
    float: left;
    width: 435px;
    margin-right: 10px;
    margin-top: -50px;
  }
  .bd-right{
    padding-left:20px ;
    width: 805px;
    position: relative;
    margin-top: -90px;

  }
  .bd-right .list-container ul{
    list-style-type: none;
    display: inline-block;
    padding: 0;
    margin: 0;
  }
  .bd-right .list-container li{
    display: inline-block;
    margin-right: 10px;
    width: 380px;
    height: 360px;
  }
  .bd-right .list-container li h4{
    font-size: 20px;
    font-weight: 700;
    margin-top: -20px;
    align-items: center;
    margin-left: 120px;
  }
  .bd-right .list-container li .v-btn{
    color: red;
    margin: 0px 150px;
  }
  </style>
  
