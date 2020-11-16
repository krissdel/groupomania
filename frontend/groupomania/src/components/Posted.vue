<template>
  <div class="card" style="width: 30rem">
    <div class="posted-post" for="allPosts">
      <img :src="image" v-if="image !== null" />
      <p v-if="image !== ''">{{ text }}</p>
      
    </div>
    <div class="cont-cont">
    <div class="container-button">
      <button type="button" class="btn btn-primary btn-sm"  @click="modifyPost">modify</button>
      <button
        type="submit"
        class="btn btn-secondary btn-sm"
        @click="deletePost"
      >
        delete</button
      ><!-- v-if si admin -->
      </div>
  </div>
      
  </div>
</template>




<script>
import axios from "axios";
import auth from "../services/auth";

export default {
  name: "Posted",
  props: {
    image: {
      type: String,
    },
    text: {
      type: String,
    },
    id: {
      type: Number,
    },
  },

  methods: {
    async modifyPost() {
      try {
        let response = await axios.put("post/" + this.id, {
          headers: auth.addHeader(),
        });

        // this.$router.go({
        //   name: "allPosts",
        //   query: { view: "allPosts" },
        // });

        console.log("modify", response, auth);
        auth.init(response.data);
        alert(`   post modifié !`);
        console.log("  post modifié ! ");
      } catch (err) {
        console.log("------------- :)", err);
      }
    },



    
  },
};
</script>


<style scoped lang="scss">
.cont-cont {
    width: 100%;
    display: flex;
    justify-content: center;
}
.container-button {
  display: flex;
    justify-content: space-around;
    width: 30%;
} 
.card {
  height: 65px;
  color: blue;
  
}
</style>