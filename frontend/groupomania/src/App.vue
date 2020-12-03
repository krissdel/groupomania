<template>
  <div >
    <!-- v-if="first_name !== null" -->
    <div class="container-header">
      <Header
        
       v-bind:test= 0
       
       

      />
 <!-- v-bind:user_id="data.user_id"
        v-bind:first_name="this.first_name"
        v-bind:last_name="this.last_name" -->
     
    </div>

    <Footer />
  </div>
</template>




<script >
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
 
  data() {
    return {
      // logged: 0,
       App: null,
    };
  },
  components: {
    Header,
    Footer,
  },

  methods: {
    // updateMessage(payload) {
    //   this.message = payload.message;
    // },
    // islogged: function (payload) {
    //   // this.islogged = payload.islogged
    //   this.islogged = payload.islogged;
    //   // sessionStorage.clear();
    //   // if (last_name !== undefined) return true;
    // },
  },

  //  islogged: function () {
  //       console.log("----- this.first_name", this.first_name);
  //       // if (this.logged === 0) return true;
  //       // if (this.logged === -1) return false;
  //       const first_name = sessionStorage.getItem("first_name");
  //       const last_name = sessionStorage.getItem("last_name");

  //       console.log(".......", first_name);

  //       if (first_name !== undefined) return true;
  //       if (last_name !== undefined) return true;

  //       return false();
  //     },

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

