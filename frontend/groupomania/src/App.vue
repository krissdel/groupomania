<template>
  <div id="app">
  <nav class="navbar navbar-light bg-dark">
        <a class="navbar-brand" href="#">
          <img class= "img" src="./assets/icon_glob.png" width="30" height="30" alt="glob_logo">
        </a>


<!-- <div class="card" style="width: 80%;">
    <router-link to="/"><img src="./assets/icon-left-font-monochrome-blanc-resize.png"></router-link>
</div> -->

        <router-link to="/"><img class= "img2" src="./assets/icon-left-font-monochrome-blanc-resize.png"></router-link>
        <div class="router_link_users"> 
    <router-link to="/Users/Users_signup">sign up</router-link> |
    <router-link to="/Users/Users_login">login</router-link>  
        </div>
      </nav>
  <router-view/>





  
  </div>


  

</template>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.router_link_user {
  justify-content: right;
  justify-content: space-around;
}

.bg-dark {
    background-color: #0f2140!important;
}
.router_link_users {
color: white;
}
a {
  color: white;
}



// ==============================================


@media only screen and (min-width : 320px) {
  .img2{
     width: 90%;
     height: auto;
   } 
 
   a.router-link-active.router-link-exact-active {
     width: 47%;
   }
 }
 
 @media only screen and (min-width : 270px) {
  
   .img2{
     width: 100%;
     height: auto;
   } 
 
   a.router-link-active.router-link-exact-active {
     width: 40%;
   }
 
 }
 
 
 /* Small devices (landscape phones, 576px and up)  */
 @media (min-width: 576px) {  
    .img2{
     width: 90%;
     height: auto;
   } 

  }


</style>
