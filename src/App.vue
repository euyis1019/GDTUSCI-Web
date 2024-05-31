<script setup>
import Header from './components/HeaderVue.vue'
import Footer from './components/FooterVue.vue'
</script>

<template>
  <div class="box">
    <Header />
    <router-view />
    <Footer />

  </div>
</template>



<style>
@font-face {
  font-family: 'HarmonyOS_Sans_SC';
  src: url('./assets/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Thin';
  src: url('./assets/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Thin.ttf') format('truetype');
}

@font-face {
  font-family: 'Light';
  src: url('./assets/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Light.ttf') format('truetype');
}

@font-face {
  font-family: 'Regular';
  src: url('./assets/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Bold';
  src: url('./assets/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Bold.ttf') format('truetype');
}

@font-face {
  font-family: 'Medium';
  src: url('./assets/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Medium.ttf') format('truetype');
}

html {
  background-color: black;
}

body {
  background-color: #fff;
  font-family: 'HarmonyOS_Sans_SC';
}

* {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}
</style>