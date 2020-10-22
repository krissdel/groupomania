<template>
  <div class="article">
    <div class="title">
      <h3>Ajouter un article</h3>
    </div>


<div class="container">

<div class="card" style="width: 18rem;">

<div class="card1" style="width: auto;">
  <div class="card-body">
    <h5 class="card-title">POST <br/> image</h5>
    
    <!-- <input class="btn btn-primary" id='getImg' type="file" name="image" accept="image/*" /> -->
<!-- <button class="btn btn-outline-secondary" type="button">Button</button>  -->


<!-- <file-upload
    ref="upload"
    v-model="files"
    post-action="/post.method"
    put-action="/put.method"
    @input-file="inputFile"
    @input-filter="inputFilter"
  > -->



<div class="input">
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile04"  accept=".jpg, .jpeg, .png" multiple>
    <label class="custom-file-label" for="inputGroupFile04"></label>
  </div>

</div>


 
 </div>
</div>

  <div class="card-body">
    <h5 class="card-title">POST</h5>

<div class="form-group">
    <label for="exampleFormControlTextarea1">texte</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

    <a class="btn btn-primary">ajouter un article</a>
  </div>
</div>
</div>
  </div>
  
</template>



<script>
// import Vue from 'vue';
// const VueUploadComponent = require('vue-upload-component')
// Vue.component('file-upload', VueUploadComponent)

</script>



<style scoped langue="scss">
.btn-primary {
  font-size: 1.3rem;
  width: 100%;
  background-color: #0f2140;
  border-color: #0f2140;
}

h3 {
  text-align: center;
}
.container {
    display: flex;
    justify-content: center;
}
/* .card-link {
    color: #d53939;
} */
.card {
  min-width: -5;
}

/* 
#getImg{
      background-image:url('');
      background-size:cover;
      background-position: center;
      height: 250px; width: 250px;
      border: 1px solid #bbb;
} */
/* ========================================= */

/* .article {
  display: flex;
  justify-content: center;
  flex-direction: column;
} */
/* .card {
  height: 100%;
} */

/* .btn-primary {
  font-size: 1.3rem;
  width: 50%;
} */
/* .btn {
  justify-content: center;
} */
</style>

