<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="logout">
      <a href="#" class="logout">log out</a>
      <!-- <a href="#" class="card-link1">unsubscribe</a> -->
      <!-- <h6>logout</h6> -->
    </div>
    <div class="container">
      <h1 class="display-4">Social Network</h1>
    </div>
    <div class="container-container">
      <div class="card" style="width: 90%">
        <div class="card-welcome">
          
            <h5 class="card-title">Welcome</h5>
        
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">User_id : {{}}</li>
          <li class="list-group-item">Nom : {{}}</li>
          <li class="list-group-item">Prenom : {{}}</li>
        </ul>
        <div class="card-body">
          <div class="card-body-link">
            <!-- <a href="#" class="card-link-allPost">all posts</a> | -->
            <a href="view/Post/post#/Post/allPosts" class="card-link-allPost">all posts</a> |

            <a href="view/Post/post#/Post/post" class="card-link-addPost">Add post</a> |
            <a href="#" class="card-link-userPost">user post</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped langue="scss">
h5 {
    font-size: 30px;
}
.card-title {
    margin: 10px;
}
a.card-link-addPost {
    color: black;
    font-weight: bold;
}
.card-body-link {
    display: flex;
    justify-content: space-around;
}
a.card-link-allPost {
  color: black;
}
a.card-link-userPost {
    color: black;
}
.logout {
  text-align: end;
  width: 90%;
  display: flex;
  justify-content: flex-end;
}

a.logout {
  color: black;
}
.card-welcome {
  text-align: center;
}
.container {
  height: auto;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  padding: 2%;
  padding-bottom: 10%;
  text-align: center;
}
.container-container {
  display: flex;
  justify-content: center;
}
</style>



