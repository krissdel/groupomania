<template>
  <div class="card" style="width: 20rem">
    <div class="posted-post" for="allPosts">
      <div class="image">
        <img
          :src="getImage()"
          v-if="image !== null"
          style="width: 35%"
          alt="image post"
        />
      </div>
      <p v-if="image !== ''">{{ text }}</p>
    </div>
    <!-- --------------- -->
    



    <div class="cont-cont" v-if="allowed()">
      <router-link to="/post/modifyPost">
        <button type="button" class="btn btn-primary btn-sm" @click="edit">
          edit
        </button>
      </router-link>
      &nbsp;
      <button
        type="submit"
        class="btn btn-secondary btn-sm"
        @click="deletePost"
      >
        delete
      </button>
    </div>
  </div>
</template>




<script>
import axios from "axios";
import auth from "../services/auth";

export default {
  name: "Posted",
  text: "",

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
    user_id: {
      type: Number,
    },
    refs: {
      type: Number,
    },
  },

  methods: {
    // edit() {
    //   axios.get("/post/").then((res) => {
    //     this.modifyPost = res.data.data;
    //     // console.log("****", typeof res.data, res.data.data);
    //     // console.log("++++++++++++", this.allPosts);
    //   });
    // },
    getImage() {
      const images = require.context(
        "../assets/upload/",
        false,
        /\.(png|jpe?g|svg|webp)$/
      );
      return images("./" + this.image);
    },

    allowed() {
          //  console.log("uuuussserrrrrid :",this.user_id);

      if (this.user_id == sessionStorage.getItem("id")) return true;
      if (sessionStorage.getItem("role") == 1) return true;
      return false;
    },

    async deletePost() {
      try {
        let response = await axios.delete("post/auth/post/" + this.id, {
          headers: auth.addHeader(),
        });console.log("tttttttttttttt", this.id);

        // this.$router.go({
        //   name: "allPosts",
        //   query: { view: "allPosts" },
        // });

        console.log("delete", response, auth);
        auth.init(response.data);
        // alert(`   post supprimé !`);
        console.log(" post supprimé ! ");
      } catch (err) {
        console.log("------------- :)", err);
      }
    },

    // editPost(){

    // },
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
  // computed:{
  //   imageUrl(){
  //     console.log("...", this.image);
  //     return require(this.image)
  //   }
  // },
};
</script>


<style scoped lang="scss">
button.btn.btn-primary.btn-sm {
  width: 5pc;
  background-color: #506a96;
  border-color: #0f2140;
}
button.btn.btn-secondary.btn-sm {
  width: 5pc;
  background-color: #a3afc4;
  border-color: #0f2140;
}
p {
  text-align: center;
  color: rgba(0, 0, 0, 0.671);
}
.image {
  display: flex;
  justify-content: center;
  padding: 10px;
}
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
  height: 13pc;
  color: blue;
}
</style>