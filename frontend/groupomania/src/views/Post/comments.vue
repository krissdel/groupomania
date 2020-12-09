<template>
  <div class="container">
    <div class="jumbotron jumbotron-fluid">
      <div class="msg">
        {{ msg }}
      </div>
      <div class="container-addPost">
        <router-link to="/Post/allPosts?view=allPosts">
          <button
            type="submit"
            class="btn btn-primary btn-sm"
            @click="clearRefs"
          >
            all posts
          </button>
        </router-link>
        <router-link to="/Post/post">
          <button
            type="submit"
            class="btn btn-primary btn-sm"
            @click="clearRefs"
          >
            Add post
          </button>
        </router-link>
        <router-link to="/user/account">
          <button
            type="submit"
            class="btn btn-primary btn-sm"
            @click="clearRefs"
          >
            Back to account
          </button>
        </router-link>
      </div>

      <!-----[affichage de tous les commentaires en reponse a un post]-------------------------------------------------------->
     
      <div class="container">
        <div class="container-posts" v-if="comments !== null">
          <Posted
            v-for="(data, index) in comments.reverse()"
            v-bind:key="index"
            v-bind:image="data.image"
            v-bind:text="data.text"
            v-bind:id="data.id"
            v-bind:user_id="data.user_id"
            v-bind:refs="data.refs"
            v-bind:date="data.date_creation"
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
import auth from "../../services/auth";

export default {
  name: "comments",
  data() {
    return {
      msg: "Comments ...",
      comments: null,
    };
  },

  components: {
    Posted,
  },

  methods: {
    clearRefs() {
      auth.clearRefs();
    },
  },

  created() {
    try {
      var refs = sessionStorage.getItem("refs");
      axios.get("/post/:id/" + refs).then((res) => {
        this.comments = res.data.data;
      });
    } catch (err) {
      console.log("---------- :(", err);
    }
  },
};
</script>



<style scoped langue="scss">
.msg {
  font-size: 30px;
}

button.btn.btn-primary.btn-sm {
  background-color: #506a96;
  border-color: #0f2140;
  width: 8pc;
  margin-bottom: 20px;
}
.container-addPost {
  text-align: end;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
}
.card {
  height: 20pc;
  color: blue;
}

.msg {
  text-align: center;
}
.container {
  justify-content: center;
  display: flex;
}
</style>
