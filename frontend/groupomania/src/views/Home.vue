<template>


<div class="jumbotron jumbotron-fluid">
  <div class="container">
<div class="home">
    <Groupomania msg=" "/>
    <!-- <p class="card-text1">social network</p> -->

<div class="card" style="width: 100%;">
  <!-- <div class="card-body"> -->
  <!-- </div> -->
  <img class="card-img-top" src="../assets/social-network4.png" alt="Card image cap">
  
</div>

</div>



  
  </div>
  <div class="card">
  <div class="card-footer">
    <h4>Contact</h4>
  </div>
  <div class="card-body">
    <h5 class="card-title">adresse :</h5>
    <p class="card-text">
      Groupomania <br>
      contact@groupomania.com <br>
      12 place Sathonay 69001 Lyon</p>
      
    <!-- <a href="#" class="btn btn-primary">Go</a> -->
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

<style lang="scss">

.jumbotron-fluid{
  background-color: white;
width: 100%;
}

h4 {
  text-align: center;
  font-size: 2rem;
}
.card-text1 {
  font-size: 50px;
}
.container {
    height: auto;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    padding: 2%;
    padding-bottom: 10%;
}
.card-footer {
  background-color: #0f2140 !important;
}
h4 {
  color: white;
  font-size: 20px;
}

.card-body {
  text-align: center;
}

</style>