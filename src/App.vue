<script setup>
import Header from './components/HeaderVue.vue'
import Footer from './components/FooterVue.vue'
</script>

<template>
  <div class="box">
    <Header/>
    <router-view/>
    <Footer/>
   
  </div>
</template>

<style >
 

 @font-face {
  font-family: 'Thin';
  src:url('./assets/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Thin.ttf'),
   
}
@font-face {
  font-family: 'Light';
  src:url('./assets/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Light.ttf'),
   
}

@font-face {
  font-family: 'Regular';
  src:url('./assets/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Regular.ttf'),
   
}

@font-face {
  font-family: 'Bold';
  src:url('./assets/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Bold.ttf'),
   
}
@font-face {
  font-family: 'Medium';
  src:url('./assets/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Medium.ttf'),
   
}
*{
  padding: 0;
  margin: 0;
  font-family: 'Thin';
 }

 a{
  text-decoration: none;
 }
 

</style>
