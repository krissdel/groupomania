<template>
<div class="section">
<!-- <div class="users_logo">
      <img alt="logo" src="/assets/icon-above-font.png" width="30" height="30">  
</div> -->


<div class="container">
  <h1 class="text-center">Sign up</h1>
<div class="container_container">
  
<form class="sign_up">
  <div class="form-row">
    <div class="col">
      <label for="inputFirstName">First name</label>    
      <input type="text" class="form-control" id="inputFirstName">
    </div>
    <div class="col">
      <label for="inputLastName">Last name</label>
      <input type="text" class="form-control" id="inputLastName">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4">
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
</div>
</div>
</div>
</template>
    







<style lang="scss">
.sign_up{
    width: 80%;
    display: flex;
    flex-direction: column;
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
.form-row {
  padding-bottom: 5%;
}

.users_logo {
    text-align: center;
}
.btn-primary {
  font-size: 1.3rem;
}
</style>