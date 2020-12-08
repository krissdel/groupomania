<template>
  <div class="container">
    <div class="jumbotron jumbotron-fluid">
      <div class="msg">
        {{ msg }}
      </div>
      <div class="container-addPost">
        <router-link to="/Post/post">
          <button type="submit" class="btn btn-primary btn-sm">Add post</button>
        </router-link>
        <br />
        <br />
        <router-link to="/user/account">
          <button type="submit" class="btn btn-primary btn-sm">
            Back to account
          </button>
        </router-link>
      </div>

      <!-----[affichage de tous les posts initiaux]-- ---------------------------------------------------- -->
      <div class="container" v-if="comments()">
        <div class="container-posts" v-if="allPosts !== null">
          <Posted
            v-for="(data, index) in allPosts.reverse()"
            v-bind:key="index"
            v-bind:image="data.image"
            v-bind:text="data.text"
            v-bind:id="data.id"
            v-bind:user_id="data.user_id"
            v-bind:refs="data.refs"
            v-bind:date="data.date_creation"
            v-bind:commentsQty="data.commentsQty"
          >
          </Posted>
        </div>

        <!-----[affichage de tous les posts utilisateur]-- ---------------------------------------------------- -->

        <div class="container-posts" v-if="allUserPosts !== null">
          <Posted
            v-for="(data, index) in allUserPosts.reverse()"
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
  name: "allPosts",
  data() {
    return {
      msg: "Posts",
      allPosts: null,
      allUserPosts: null,
    };
  },

  components: {
    Posted,
  },

  methods: {
    comments() {
      var refs = sessionStorage.getItem("refs");
      if (refs === null) return true;
    },
  },

  created() {
    switch (this.$route.query.view) {
      case "allPosts": {
        var id = sessionStorage.getItem("user_id");
        console.log("dddddd", id);
        axios
          .get("/post/", { params: { id }, headers: auth.addHeader() })

          .then((res) => {
            this.allPosts = res.data.data;

            console.log("****", typeof res.data, res.data.data);
            console.log("++++++++++++", this.allPosts);
          });
        break;
      }

      case "allUserPosts": {
        var user_id = sessionStorage.getItem("user_id");
        axios.get("/post/" + user_id).then((res) => {
          this.allUserPosts = res.data.data;
          console.log("===========", typeof res.data, res.data.data);
          console.log("vvvvvvvvvvvv", this.allUserPosts);
          console.log("vvpppppvvvvvv", user_id);
        });
      }
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
}
.container-addPost {
  text-align: end;
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

