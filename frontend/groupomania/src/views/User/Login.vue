

<template>
  <div class="container">
    <h1 class="text-center">Login</h1>

    <div class="container_container">
      <Form v-slot="{ errors }" class="login">
        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <Field
              name="email"
              as="input"
              :rules="isRequiredEmail"
              type="email"
              class="form-control"
              id="email"
              ref="email"
             

            />
            <span>{{ errors.email }}</span>
          </div>
        </div>
        <div class="form-group row">
          <label for="password" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <Field
              name="password"
              as="input"
              :rules="isRequiredPassword"
              type="password"
              class="form-control"
              id="password"
              ref="password"
              
            />
            <span>{{ errors.password }}</span>
          </div>
        </div>

        <!-- <router-link :to="{ name: 'post', params: { res }}"> -->
        <button type="submit" class="btn btn-primary" @click.prevent='onSubmit'>Login</button>
        <!-- </router-link> -->
      </Form>
    </div>
  </div>
</template>

<script>
// import { mapState, mapActions } from "vuex";
import { mapActions } from "vuex";
import { Field, Form } from "vee-validate";
// import axios from "axios";


export default {
  components: {
    Field,
    Form,
  },
  // name: "Login",
  data() {
console.log('fuck0');

    return {
      // form: {  
        email: "black@gmail.com",
        password: "black",
        // submitted: false
      // },
      error: "",
    };
  },

  methods: {
    

    isRequiredEmail(email) {
console.log('fuck1');

      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    isRequiredPassword(value){
console.log('fuck2');

         return value ? true : 'Password is required';
    },

//     handleFIleUpload() {
// console.log('fuck3');
//       this.file = this.$refs.file.files[0];
//     },
    ...mapActions({
      
      // Login: "store/auth/Login",
      Login: "auth/Login",
      
    }),
    onSubmit(onSubmit) {
console.log('fuck4');
console.log(onSubmit);


 const login = 
      {
              email: this.email,
              password: this.password,
            };
                console.log ( login);
      this.auth.Login(this.email, this.password).then((res) => {
               console.log('fuck5');
               console.log(this.Login);

        if (res) {
          this.error = res;
        }

        this.$router.replace({
          
          name: "post",
          params: { message: "vous êtes connecté !" },
        });
        console.log("2------------------");

        
      });

    },

  
  },
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




