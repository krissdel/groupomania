<template>
  <div class="article">
    <div class="title">
      <h3>Ajouter un article</h3>
    </div>

    <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
    <div class="container">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">card text / image</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">----------------</li>
          <li class="list-group-item">----------------</li>
          <li class="list-group-item">----------------</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
        <div class="btn">
          <button type="submit" class="btn btn-primary">Ajouter</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
// export default {

// }
</script>



<style>
.article {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.card {
  height: 750px;
}
h3 {
  text-align: center;
}
.btn-primary {
  font-size: 1.3rem;
  width: 50%;
}
.btn {
  justify-content: center;
}
</style>

