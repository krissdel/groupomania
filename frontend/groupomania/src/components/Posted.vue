<template>

  <div class="card" style="width: 30rem">
    <div class="posted-post" for="allPosts">
      <img :src="image" v-if="image !== null" />
      <p v-if="image !== ''">{{ text }}</p>
      
      <button type="button" class="btn btn-primary btn-sm">edit</button>
<button type="submit" class="btn btn-secondary btn-sm" @click="deletePost">delete</button><!-- v-if si admin -->
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
    async deletePost() {
      
      try {
        let response = await axios.delete('post/auth/post/' + this.id, {
          headers: auth.addHeader(),
        });

        this.$router.go({
          name: "allPosts",
          query: { view: "allPosts" },
        });

        console.log("delete", response, auth);
        auth.init(response.data);
        alert(
          `   post supprimé !`
        );
        console.log(" post supprimé ! ");
      } catch (err) {
        console.log("------------- :)",err);
      }
    }
  }
};
</script>


<style scoped lang="scss">
.card {
  height: 65px;
  color: blue;
  //  background-color: lightblue;
}
</style>