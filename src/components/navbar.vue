<script setup>
import Logo from "@/assets/吳家養蜂場.png";
</script>
<template>
    <div class="d-flex align-center border-xl">
      <v-sheet class="ma-2 pa-2 border-e-lg">
        <router-link to="/" class="custom-link">
          <div class="img"><v-img width='100' :src='Logo'></v-img></div>
        </router-link>
      </v-sheet>
      <v-sheet class="ma-2 pa-2 border-e-lg">
        <router-link to="/" class="custom-link">吳家養蜂場</router-link>
      </v-sheet>
      <v-sheet class="ma-2 pa-2 border-e-lg">
        <router-link to="/"  class="custom-link">Home</router-link>
      </v-sheet>
      <v-sheet class="ma-2 pa-2 border-e-lg">
        <router-link to="/about"  class="custom-link">關於我們</router-link>
     </v-sheet>
      <v-sheet class="ma-2 pa-2 border-e-lg">
        <router-link to="/honey_myth" class="custom-link">蜂蜜迷思</router-link>
     </v-sheet>
      <v-sheet class="ma-2 pa-2 border-e-lg">
        <router-link to="/product" class="custom-link">產品介紹</router-link>
     </v-sheet>
    
    </div>
  </template>

<style scope>
div{
    width: 1240px;
    margin: 20px;
}
.img{
  width: 100%;
  height: 100%;
}

div v-sheet:nth-child(1){
    color: #fff;
    padding: auto;
}
div v-btn{
    background-color: #fff;
}
.custom-link{
  position: relative;
  float: left;
  font-size: 30px;

}
.v-img{
  margin-left: 20px;
}
</style>