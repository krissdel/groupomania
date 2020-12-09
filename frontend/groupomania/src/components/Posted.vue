<template>
  <div class="card" style="width: 20rem">
    <div class="posted-post" for="allPosts">
      <div class="image">
        <img
          :src="getImage()"
          v-if="image !== null"
          style="width: 40%"
          alt="image post"
        />
      </div>
      <p v-if="image !== ''">{{ text }}</p>
      <p>{{ this.showDate() }}</p>
    </div>
    <!-- -----[ bouton pour modifier un post]--------------------------------------------------------------------------- -->

    <div class="cont-cont" v-if="allowed()">
      <div class="cont-cont-btn">
      <router-link
        :to="{
          name: 'modifyPost',
          params: {
            id: this.id,
            text: this.text,
            image: this.image == null ? '-1' : this.image,
          },
        }"
      >
        <button type="button" class="btn btn-primary btn-sm">modify</button>
      </router-link>

      <!-- -----[ bouton pour effacer un post]--------------------------------------------------------------------------- -->
      <button
        type="submit"
        class="btn btn-secondary btn-sm"
        @click="deletePost"
      >
        delete
      </button>
      </div>
    </div>

    <!-- -----[ bouton pour repondre a un post]--------------------------------------------------------------------------- -->

    <div class="cont-cont" v-if="reply()">
      <router-link
        :to="{
          name: 'reply',
          params: {
            id: this.id,
            text: this.text,
            image: this.image == null ? '-1' : this.image,
            refs: this.refs,
          },
        }"
      >
        <button type="button" class="btn btn-primary btn-sm">reply</button>
      </router-link>
    </div>

    <!-- -----[ bouton pour afficher les commentaires ]--------------------------------------------------------------------------- -->

    <div class="cont-cont">
      <router-link
        :to="{
          name: 'comments',
          params: {
            id: this.id,
            text: this.text,
            image: this.image == null ? '-1' : this.image,
            refs: this.refs,
          },
        }"
      >
        <div class="comments" v-if="hasComments()">
          <span class="badge badge-primary" @click="seeComments">comment{{this.commentPluriel()}} ({{commentsQty}})</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import auth from "../services/auth";

export default {
  name: "Posted",
  text: "",
  comments: 0,
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
    date: {
      type: String,
    },
    commentsQty: {
      type: Number,
    },
  },

  methods: {
    seeComments() {
      sessionStorage.setItem("refs", this.id);
    },
    hasComments(){
      if (this.commentsQty > 0) return true;
      return false;
    },
    commentPluriel(){
      if (this.commentsQty > 1) return "s";
      return "";
    },
    showDate() {
      if (this.date === null) return "";
      const date = this.date.split("-");
      const mois = [
        "",
        "janvier",
        "fevrier",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "aout",
        "septembre",
        "octobre",
        "novembre",
        "decembre",
      ];
      return date[2].slice(0, 2) + " " + mois[date[1]] + " " + date[0];
    },

    getImage() {
      const images = require.context(
        "../assets/upload/",
        false,
        /\.(png|jpe?g|svg|webp)$/
      );
      return images("./" + this.image);
    },

    allowed() {
      if (this.user_id == sessionStorage.getItem("user_id")) return true;
      if (sessionStorage.getItem("role") == 1) return true;
      return false;
    },

    reply() {
      if (this.user_id == sessionStorage.getItem("user_id")) return false;
      return true;
    },

    async deletePost() {
      try {
        let response = await axios.delete("post/auth/post/" + this.id, {
          headers: auth.addHeader(),
        });
        this.$router.go({
          name: "allPosts",
          query: { view: "allPosts" },
        });
        console.log("delete", response, auth);
        alert(`attention !... vôtre post va être supprimé ! `);
      } catch (err) {
        console.log("------------- :)", err);
      }
    },
  },
};
</script>


<style scoped lang="scss">
.comments {
  text-align: end;
}
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
  display: flex;
  justify-content: center;
}
.cont-cont-btn {
    width: 60%;
    display: flex;
    justify-content: space-around;
}
.container-button {
  display: flex;
  justify-content: space-around;
  width: 30%;
}
.card {
  height: 13pc;
  color: blue;
  display: block;
}
</style>