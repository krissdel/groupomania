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

      <!-- ---------------------------------------------------- -->
      <div class="container">
        <div class="container-posts" v-if="allPosts !== null">
          <Posted
            v-for="(data, index) in allPosts.reverse()"
            v-bind:key="index"
            v-bind:image="data.image"
            v-bind:text="data.text"
            v-bind:id="data.id"
            v-bind:user_id="data.user_id"
            v-bind:refs="data.refs"
          >
          </Posted>
        </div>
        <div class="container-posts" v-if="allUserPosts !== null">
          <Posted
            v-for="(data, index) in allUserPosts.reverse()"
            v-bind:key="index"
            v-bind:image="data.image"
            v-bind:text="data.text"
            v-bind:id="data.id"
            v-bind:user_id="data.user_id"
            v-bind:refs="data.refs"
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
// import auth from "../services/auth";

// import PostedUser from "@/components/PostedUser.vue";

export default {
  name: "allPosts",
  data() {
    return {
      msg: "Posts",
      allPosts: null,
      allUserPosts: null,
      // user_id: "",
    };
  
  },

//  props: {
//     image: {
//       type: String,
//     },
//     text: {
//       type: String,
//     },
//     id: {
//       type: Number,
//     },
//     user_id: {
//       type: Number,
//     },
//     refs: {
//       type: Number,
//     },
//   },



  components: {
    Posted,
  },


  created() {
    switch (this.$route.query.view) {
      case "allPosts": {
        axios.get("/post/").then((res) => {
          this.allPosts = res.data.data;
          // console.log("****", typeof res.data, res.data.data);
          // console.log("++++++++++++", this.allPosts);
        });
        break;
      }

      case "allUserPosts": {
      //  var user_id = sessionStorage.getItem("id");
        axios.get("/post/:id" + this.user_id).then((res) => {
          // headers: auth.addHeader(),
          this.allUserPosts = res.data.data;
          console.log("===========", typeof res.data, res.data.data);
          console.log("vvvvvvvvvvvv", this.allUserPosts);
          // console.log("vvpppppvvvvvv", user_id);
          //  let response = await axios.put("post/" + this.id, {
          //     headers: auth.addHeader(),
          //   });
        });
      }

      // default: {
      //   break;
      // }
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
  height: 14pc;
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

