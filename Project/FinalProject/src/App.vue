<template>
  <div id="app">
    <NavBar/>
    <router-view />
    <FooterSection/> 
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';
export default {
  name:"App",
  components:{
    NavBar,
    FooterSection,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

a {
  text-decoration: none;
}

#app {
  background: url('./components/img/cow-img.jpg');
  background-size: 100vw 100vh;
  background-attachment: fixed;
  height: auto; 
}
</style>
