<template>
  <!-- <div class="container"> -->
    <div class="container" :style="{ 'background-image': 'url(' + imageUrl + ')' }">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default{
  
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      imageUrl:'https://t3.ftcdn.net/jpg/03/48/43/20/360_F_348432037_5YBPEMo559vb1IFjvOIMRVGANwsDMNsI.jpg'
    };
  }
}

</script>

<style>


.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  
  color: #2c3e50;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
