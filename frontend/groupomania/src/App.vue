<template>
  <div id="app">
    <div class="container-header" v-if="first_name !== null"> 
      <Header
        @onSubmit="islogged"
        v-bind:first_name="this.first_name"
      />
  </div> 



    <Footer />
  </div>
</template>




<script >
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "app",

  data() {
    return {
      logged: 0,
    };
  },
  components: {
    Header,
    Footer,
    
  },

  methods: {
    islogged: function (payload) {
      // this.islogged = payload.islogged
      this.islogged = payload.islogged;
      // sessionStorage.clear();
      // if (last_name !== undefined) return true;
    },
  },


 islogged: function () {
      console.log("----- this.first_name", this.first_name);
      // if (this.logged === 0) return true;
      // if (this.logged === -1) return false;
      const first_name = sessionStorage.getItem("first_name");
      const last_name = sessionStorage.getItem("last_name");

      console.log(".......", first_name);

      if (first_name !== undefined) return true;
      if (last_name !== undefined) return true;

      return false();
    },



  //  logout() {
  //       // const first_name = sessionStorage.getItem("first_name");
  //       console.log("logout2...");
  //       sessionStorage.clear();
  //     },
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

