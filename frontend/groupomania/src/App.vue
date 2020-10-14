<template>
  <div id="app">
    <Header />

    <!-- <router-view /> -->

    <Footer />
  </div>
</template>




<script >
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
// import { ValidationProvider, extend } from 'vee-validate';
// import { required } from 'vee-validate/dist/rules';



export default {
  components: {
    Header,
    Footer
    
  },
};


</script>



<style lang='scss'>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

