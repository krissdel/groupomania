<template>
  <div class="container">
    <div class="jumbotron jumbotron-fluid">
      <div class='msg'>
      {{ msg }}
      </div>
      <div class="container">
        
      
        <div class="container-posts" v-if="allPosts !== null">

          <Posted 
          v-for="(data, index) in allPosts.reverse()" 
          v-bind:key="index"
          v-bind:image="data.image"
          v-bind:text="data.text"
          v-bind:id="data.id"
          >
          
          </Posted>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import Posted from "@/components/Posted.vue";

export default {
  
  

  name: "allPosts",
  data() {
    return {
      msg: "loading messages",
      allPosts: null,
      
    };
  },
  components: {
    Posted,
  },
  created() {
    
    switch (this.$route.query.view) {
      case "allPosts": {
        axios.get("/post/").then((res) => {
          this.allPosts = res.data.data;
          console.log("****", typeof res.data, res.data.data);
          console.log("++++++++++++", this.allPosts);
              
        });
        break;
      }

      case "allUserPosts": {
        axios.get("/post/:id").then((res) => {
          this.allUserPosts = res.data.data.index.id;
          console.log("===========", typeof res.data, res.data.data.index.id);
          console.log("vvvvvvvvvvvv", this.allUserPosts);
              
        });
        break;
      }

      default: {
        break;
      }
    }
  },
};
</script>



<style scoped langue="scss">
.card[data-v-6a48ebef] {
    height: 10pc;
    color: blue;
}

/* .card {
  width: 18rem;
  height: 18pc;
} */
.msg {
    text-align: center;
}
.container {

    justify-content: center;
    display: flex;

    
}

</style>

