<script setup>
import Container from "./container.vue";
</script>

<template>
  <v-app>
    <!--頁面內容-->
    <v-main>
      
      <Container />
      
    </v-main>
  </v-app>
  <router-view></router-view>
</template>