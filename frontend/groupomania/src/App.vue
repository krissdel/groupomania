<template>
  <div id="app">
  

  <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="./assets/icon_glob.png" width="30" height="30" alt="glob_logo">
        </a>
        <router-link to="/">HOME</router-link>
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

</style>
