<script setup>
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";

</script>

<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    
    <Footer />
  </v-app>
  
</template>


<style scoped lang="scss">

</style>
