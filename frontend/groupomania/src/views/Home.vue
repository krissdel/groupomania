<template>


<div class="jumbotron jumbotron-fluid">
  <div class="container">
<div class="home">
    <Groupomania msg="Welcome to "/>

    
    <!-- <div class=logo>
      <img alt="Vue logo" src="../assets/icon-left-font-monochrome-black.png" >
    </div>  -->
    <div>
  <h4>Social Network</h4>
    </div>  
  </div>
  </div>
</div>
  
  
</template>

<script>
// @ is an alias to /src
import Groupomania from '@/components/Groupomania.vue'

export default {
  name: 'Home',
  components: {
    Groupomania
  }
}
</script>

//  <style lang="scss">
.home {
  font-size: 30px;
  color: black;
  text-align: center;
  // background-image: url("../assets/groupomania_building.png");
}
h4 {
  text-align: center;
  font-size: 2rem;
}
.container {
    height: 750px;
}
</style>