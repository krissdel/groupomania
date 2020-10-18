

<template>

  <div class="container">
    <h1 class="text-center">Login</h1>

    <div class="container_container">

      <Form v-slot="{ errors }" class="login" >
        <div class="form-group row">
          <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
          <Field name="email" as="input" :rules="isRequired" type="email" class="form-control" id="inputEmail" ref="email" />
          <span>{{ errors.email }}</span>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
          <Field name="password" as="input" :rules="isRequired" type="password" class="form-control" id="inputPassword" ref="password" />
          <span>{{ errors.password }}</span>
          </div>
        </div>
        <!-- <router-link :to="{ name: 'post', params: { res }}"> -->
          <button type="submit" class="btn btn-primary" >Login</button>
        <!-- </router-link> -->
      </form>
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";
import { mapActions } from "vuex";
import { Field, Form } from 'vee-validate';



export default {
   components: {
    Field,
    Form,
  },
  name: "Login",
  data() {
    return {
        email: '',
        password: ''
        // submitted: false
      }
      // console.error();
},

  methods: {
     isRequired(value) {
      return value ? true : 'This field is required';
    },
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
        });
console.log("-------------------");

        // if (!res) {
        //   this.error = res
        // }
        // this.$router.replace({
        //   name: 'Login',
        //   params: {message: "une erreur c'est produite !"}
        // })

        
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
label.col-sm-2.col-form-label {
    font-weight: lighter;
}
.btn-primary {
    color: #fff;
    background-color: #0f2140;
    border-color: #0f2140;
    font-size: 1.3rem;
    width: 100%;
}
span {
  color: red;
  font-weight: lighter;
}
.login {
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
.form-group {
  padding-bottom: 5%;
}
.btn-primary {
  font-size: 1.3rem;
}
</style>




