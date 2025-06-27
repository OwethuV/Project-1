<template>
  <aside :class="app">

    <NavBarComp/>
    <router-view/>

  </aside>
</template>
<script>
import NavBarComp from './components/NavBarComp.vue';
export default {
  components: {
    NavBarComp 
  },data() {
    return {
      app: ""
    }
  },
  methods: {
    changeBackground(){
      if(this.$route.path === '/employment' ||
        this.$route.path === '/attendance' 
      ) {
        this.app = "employment-view";
      }else{
        this.app = "";
      }
    }
  },
  watch: {
    $route(newValue){
      this.changeBackground()
    }
},
  mounted() {
    this.changeBackground();
  }
}
</script>
<style>
.employment-view{
  background: url('https://i.pinimg.com/736x/5d/28/06/5d2806f9404075d2e8ad32cd7aab6767.jpg');
  background-repeat: no-repeat;         /* Prevents tiling */
  background-size: cover;               /* Makes image cover the whole area */
  background-position: center center;   /* Centers the image */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
