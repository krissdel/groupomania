<template>


  <div class="section">
    <div class="container">
      <h1 class="text-center">Sign up</h1>
      <div class="container_container">
        <Form v-slot="{ errors }">
          

        <div class="form-row">
          <div class="form-group col-md-6">
              <div class="col">
                <label for="inputFirstName">First name</label>   
                <Field name="firstName" as="input" :rules="isRequired" type="text" class="form-control" id="inputFirstName"  
                ref="firstName" />
               <span>{{ errors.firstName}}</span>
               </div>
          </div>

            <div class="form-group col-md-6">
                <div class="col">
                  <label for="inputLastName">Last name</label>   
                  <Field name="lastName" as="input" :rules="isRequired" type="text" class="form-control" id="inputLastName" 
                   ref="lastName" />
                  <span>{{ errors.LastName }}</span>
                </div>
            </div>
          </div>
        

        
        
        <div class="form-row">
          <div class="form-group col-md-6">
              <div class="col">
                <label for="inputEmail">Email</label>   
                <Field name="email" as="input" :rules="isRequired" type="email" class="form-control" id="inputEmail"  
                ref="email" />
               <span>{{ errors.email }}</span>
               </div>
          </div>



          <div class="form-group col-md-6">
              <div class="col">
                <label for="inputPassword">Password</label>   
                <Field name="password" as="input" :rules="isRequired" type="password" class="form-control" id="inputPassword"  
                ref="password" />
               <span>{{ errors.password }}</span>
               </div>
          </div>
          
        </div>



        <div id="submit">
          <!-- <router-link :to="{ name: 'post', params: {response: register} }">  -->
            <button class="btn btn-primary" @click="creatUser">Sign up</button>
          <!-- </router-link> -->
        </div>
        </form>
      </div>
    </div>
  </div>
</template>
    

<script>
// import { mapState, mapActions } from 'vuex';
// import { mapActions } from "vuex";
// import Vuex from 'vuex';
// Vue.use(Vuex)

import axios from "axios";
import { Field, Form } from 'vee-validate';

// import Vue from 'vue';
// import VueSweetalert2 from 'vue-sweetalert2';
// Vue.use(VueSweetalert2);

export default {
  components: {
    Field,
    Form,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",

      // submitted: false
      file: "",
      error: "",
    };
  },
  methods: {
     isRequired(value) {
      return value ? true : 'This field is required';
    },
    handleFIleUpload() {
      this.file = this.$refs.file.files[0];
    },
    // showAlert() {
    //   // Use sweetalert2
    //   this.$swal('Hello Vue world!!!');
    // },
    async creatUser() {
      // const formData = new FormData();
      // formData.append("first_name", this.$refs.firstName.value);
      // formData.append("last_name", this.$refs.lastName.value);
      // formData.append("email", this.$refs.email.value);
      // formData.append("password", this.$refs.password.value);
      const register = {
        first_name: this.$refs.firstName.value,
        last_name: this.$refs.lastName.value,
        email: this.$refs.email.value,
        password: this.$refs.password.value,
      };
      // console.log (register);
      //  if (!this.$refs.firstName.value || !this.$refs.lastName.value || !this.$refs.email.value || !this.$refs.password.value ) {
      // return ({ message: 'Certains champs sont vides !' });

      // }

      try {
        let response = await axios.post("user/sign_up", register);
        console.log(response);

        // return;

        // if (response){this.$router.replace({
        //     name: "post",

        //     params: {message: " error password ou email ",}
        // });
        // }
        // if (!response) {
        //    return this.$router.replace({
        //    name: "Sign_up",
        //      params: {
        //        message: response.data.success,
        //      },
        //    });
        //  }
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>





<style scoped lang="scss">
span {
  color: red;
  font-weight: lighter;
}
.sign_up {
  width: 80%;
  display: flex;
  flex-direction: column;
  font-weight: bold;
}

.container_container {
  //display: flex;
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

.user_logo {
  text-align: center;
}
.btn-primary {
  font-size: 1.3rem;
  width: 100%;
  background-color: #0f2140;
  border-color: #0f2140;
}

</style>