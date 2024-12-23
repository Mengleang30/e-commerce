<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue';

import MainView from './views/MainView.vue';

</script>

<template>
  <div class="app">
    <Header />
    <div class="main">
      <MainView />
    </div>
    <Footer/>
  </div>
</template>

<style>
.main{
  min-height: 60vh;
  display: flex;
}
*{

  box-sizing: border-box;
}

</style>