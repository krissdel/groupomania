

<template>
  <div class="container">
    <h1 class="text-center">Login</h1>
    <div class="container_container">
      <form class="login">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label"
            >Password</label
          >
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" />
          </div>
        </div>
        <router-link :to="{ name: 'post' }">
          <button type="submit" class="btn btn-primary">Login</button>
        </router-link>
      </form>
    </div>
  </div>
</template>


<style scope lang="scss">
.login {
  width: 80%;
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  font-weight: bold;
}

.container_container {
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 5%;
}
.container {
  height: 700px;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  padding: 2%;
}
.form-control {
  font-size: 1.3rem;
}
.form-group {
  padding-bottom: 5%;
}
.btn-primary {
  font-size: 1.3rem;
}
</style>




