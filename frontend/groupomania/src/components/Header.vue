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
        <!-- <router-link to="/User/Sign_up" >
        <P v-if="isLogged()">{{ first_name }} </P>
          
        <p v-else> Sign up </P>
        </router-link> -->

        <router-link to="/User/Sign_up">
        <button type="button" class="btn btn-outline-primary" 
        v-if="first_name === null"  
        v-on:logout="$emit('logout', $event.target.signup)"
        v-bind:logout="logout">signup</button>
         
        <p v-else> {{ first_name }} {{ last_name }}</p>
      
          
        </router-link>

        
      

        <router-link to="/User/Login">
       <button type="button" class="btn btn-outline-primary" v-if="first_name === null">Login</button>
        </router-link>
       <router-link to="/Home">
       <button type="button" class="btn btn-outline-primary" v-if="first_name !== null"  @click="logout">Logout</button>
         
        </router-link>

        <!-- <router-link to="/User/Login" v-if="isLogged()">
        {{ last_name }}
        </router-link> -->

        <!-- <div v-if="!isLogged()">{{Login}}</div> 
         <div v-if="isLogged()">{{ first_name }}</div> -->
      </div>
    </nav>
    <router-view />
    <!-- ------------------------------------------------ -->
  </div>
</template>


<script>
import auth from "../services/auth";

export default {
  name: "Header",
  data: function () {
    return {
      first_name: sessionStorage.getItem("first_name"),
      last_name: sessionStorage.getItem("last_name"),
    };
  },

  props: {
    signup: {
      type: String,
    },
    login: {
      type: String,
    },
  },

  methods: {
    // isLogged: function () {
    //   const first_name = sessionStorage.getItem("first_name");
    //   const last_name = sessionStorage.getItem("last_name");

    //   if (first_name !== undefined) return true;
    //   if (last_name !== undefined) return true;
    //   return false();
    // },
  },

logout(){
auth.logout()
  
  //  this.$emit("logout", this.$logout);
  
},

};
</script>





<style scoped lang="scss">
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