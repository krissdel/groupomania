<template>
  <div class="Header">
    <nav class="navbar navbar-light bg-dark">
      <div class="logo">
      <a class="logo_white" href="#">
        <router-link :to="{ name: 'Home' }">
          <img
            class="img2"
            src="../assets/icon-left-font-monochrome-blanc-resize.png"
          />
        </router-link>
      </a>
      </div>
    </nav>
    <router-view />
  </div>
</template>


<script>
export default {
  name: "Header",
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
</style>