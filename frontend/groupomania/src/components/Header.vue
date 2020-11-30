<template>
  <div class="Header">
    <nav class="navbar navbar-light bg-dark">
      <a class="navbar-brand" href="#">
        <router-link :to="{ name: 'Home' }">
          <img
            class="img"
            src="@/assets/icon_glob.png"
            width="30"
            height="30"
            alt="glob_logo"
          />
        </router-link>
      </a>
      <a class="logo_white" href="#">
        <router-link :to="{ name: 'Home' }">
          <img
            class="img2"
            src="../assets/icon-left-font-monochrome-blanc-resize.png"
          />
        </router-link>
      </a>

      <!-- =================================================================== -->

      <div class="router_link_user">
        <div class="signup">
          <router-link to="/User/Sign_up">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              v-if="islogged()"
              @click="logout"
            >
              signup
            </button>
            <p v-else>
              <strong> {{ first_name }} {{ last_name }}</strong>
            </p>
          </router-link>
        </div>

        <div class="login">
          <router-link to="/User/Login">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @login="message"
              v-if="islogged()"
            >
              Login
            </button>
          </router-link>
        </div>

        <div class="logout">
          <router-link
            :to="{
              name: 'Home',
              params: {
                first_name: this.first_name,
                last_name: this.last_name,
              },
            }"
          >
            <!-- <router-link :to="/Home"> -->
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @login="login"
              v-if="islogged()"
            >
              Logout
            </button>
          </router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>


<script>
// import auth from "../services/auth";

export default {
  name: "Header",
  data: function () {
    return {
      first_name: sessionStorage.getItem("first_name"),
      last_name: sessionStorage.getItem("last_name"),
    };
  },
  // computed: {
  //   logout(){
  //     return this.$store.state.logout
  //   }
  // },

  props: {
    signup: {
      type: String,
    },
    login: {
      type: String,
    },
    logged: {
      type: Number,
    },
    // logout: {
    //   type: String,
    // },
  },

  methods: {
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

    // message(payload) {
// this.logged = payload.logged
// if (this.logged === 0) return true;
//       if (this.logged === -1) return false;

      // this.$store.dispatch("logout");
      // const first_name = sessionStorage.getItem("first_name");
      // const last_name = sessionStorage.getItem("last_name");
      // if (this.islogged !== undefined) return true;
      // if (this.islogged !== undefined) return true;
      // const first_name = sessionStorage.getItem("first_name");
      //       if (first_name !== undefined) return  sessionStorage.clear();

      // console.log("logout1...");
      // this.$emit("logout", -1);
  //   },
  },
};
</script>





<style scoped lang="scss">
strong {
  font-size: 15px;
}
.router_link_user {
  display: flex;
  justify-content: space-between;
  width: 10pc;
}
button.btn.btn-outline-primary {
  border-radius: 20px;
  color: white;
  border-color: white;
}

@media (min-width: 270px) {
  .img2 {
    width: 100%;
    height: auto;
  }
  a.router-link-active.router-link-exact-active {
    width: 40%;
  }
}
@media (min-width: 320px) {
  .img2 {
    width: 90%;
    height: auto;
  }
  a.router-link-active.router-link-exact-active {
    width: 47%;
  }
}

/* Small devices (landscape phones, 576px and up)  */
@media (min-width: 576px) {
  .img2 {
    width: 90%;
    height: auto;
  }
}

.router_link_user {
  justify-content: right;
  justify-content: space-around;
}

.bg-dark {
  background-color: #0f2140 !important;
}
.router_link_user {
  color: white;
}
a {
  color: white;
}

/* ============================================= */
</style>