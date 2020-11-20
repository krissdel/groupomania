<template>
<div class="Header">
  <nav class="navbar navbar-light bg-dark">
        <a class="navbar-brand" href="#">
        <router-link :to="{ name: 'Home'}">
          <img class= "img" src="@/assets/icon_glob.png" width="30" height="30" alt="glob_logo">
        </router-link>
        </a>
        <a class="logo_white" href="#">
        <router-link :to="{ name: 'Home'}">
            <img class= "img2" src="../assets/icon-left-font-monochrome-blanc-resize.png">
        </router-link>
        </a>
        <div class="router_link_user"> 
    <!-- <router-link to="/User/Sign_up"> <slot>{{ Signup}}</slot> </router-link> -->
    <router-link to="/User/Sign_up"> <slot> Sign up</slot> </router-link>

     |
    <!-- <router-link to="/User/Login">{{  Login}}</router-link>   -->
    <router-link to="/User/Login">  Login</router-link>  

        </div>
      </nav>
  <router-view/>
</div>
</template>


<script>
export default {
   name: 'Header',


   data: function () {
    return {
      


    };
  },


 
};
</script>





<style scoped lang="scss">

@media (min-width : 270px) {
   .img2{
     width: 100%;
     height: auto;
   } 
   a.router-link-active.router-link-exact-active {
     width: 40%;
   }
 }
@media (min-width : 320px) {
  .img2{
     width: 90%;
     height: auto;
   }  
   a.router-link-active.router-link-exact-active {
     width: 47%;
   }
 }
 
 
 
 /* Small devices (landscape phones, 576px and up)  */
 @media (min-width: 576px) {  
    .img2{
     width: 90%;
     height: auto;
   } 
  }


.router_link_user {
  justify-content: right;
  justify-content: space-around;
}

.bg-dark {
    background-color: #0f2140!important;
}
.router_link_user {
color: white;
}
a {
  color: white;
}

/* ============================================= */


</style>