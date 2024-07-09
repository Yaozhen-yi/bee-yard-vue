<script setup>
import About1 from "@/assets/images/bd_left.jpg";
import About2 from "@/assets/images/talent.jpg";
import About3 from "@/assets/images/first_class.jpg";
</script>

<template>
    <div class="about"> 
      <h1>關於我們</h1>
      <div class="container">
        <v-img :src='About1'max-hight="250" width="350">
        </v-img>
        <v-img :src='About2'max-hight="250" width="350">
        </v-img>
        <v-img :src='About2'max-hight="250" width="350">
        </v-img>
      </div>
      <span>在阿里山山脈上，嘉南平原上的大林鎮三角里上林頭，有三棵超過百年的老樹，吳氏家族就住在老樹下，這裡的村民都很長壽，吳家蜂場就是其中一戶，受到老樹的庇護，這裡的蜜蜂有優渥的環境，讓來到這裡品嘗現挖有溫度的蜂蜜和新鮮花粉的客人讚不絕口，還可以讓您了解蜂蜜的生態以及體驗農村生活，來到吳家蜂場會讓您流連忘返，好吃 好玩又健康。</span>
    </div>
    <router-view></router-view>
  </template>
  <style scoped>
  .container{
    display: flex;
    width: 1220px;
    margin-top: 20px;
    margin-left: -20px;
  }
  .container .v-img{
    padding-left: 20px;
  }
  span{
    font-weight: 700;
    font-size: 20px;
  }
  </style>