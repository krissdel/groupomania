

<template>

  <div class="container">
    <h1 class="text-center">Login</h1>

    <div class="container_container">
      <!-- <form @submit.prevent="handleSubmit" class="login"> -->
      <form class="login">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" v-model="username" class="form-control" id="inputEmail3" />

            <!-- <div v-show="submitted && !username" class="invalid-feedback">Username is required</div> -->
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label"
            >Password</label
          >
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" />

            <!-- <div v-show="submitted && !password" class="invalid-feedback">Password is required</div> -->
          </div>
        </div>
        <router-link :to="{ name: 'post' }">
          <button type="submit" class="btn btn-primary">Login</button>
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";
import { mapActions } from "vuex";



export default {
  name: "Login",
  data() {
    return {
        email: '',
        password: ''
        // submitted: false
      },
      console.error();
},

  methods: {
    ...mapActions({
      Login: 'auth/Login'
    }),
    onSubmit () {
      this.Login(this.form).then((res) =>{
        if (res) {
          this.error = res
        }
        this.$router.replace({
          name: 'post',
          params: {message: 'vous êtes connecté !'}
        })
      })
    }
   
    // onSubmit () {
    //         this.submitted = true;
    //         const { email, password } = this;
    //         if (email && password) {
    //             this.login({ email, password })
    //     }
      
    // }
  }
};
</script>





<style scoped lang="scss">
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




