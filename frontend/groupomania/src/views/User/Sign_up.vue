<template>


  <div class="section">
    <div class="container">
      <h1 class="text-center">Sign up</h1>
      <div class="container_container">

      <!-- @submit="checkForm"
  action="@Articles/post"
  method="post" -->
        <!-- <Form v-slot="{ errors }" @submit="checkForm" novalidate="true">  -->
       
       
       
        <Form   v-slot="{ errors }" >
        <div class="form-row">
          <div class="form-group col-md-6">
              <div class="col">
                <label for="firstName">First name</label>   
                <Field name="firstName" as="input" :rules="isRequiredFirstName" type="text" class="form-control" id="firstName" 
                 ref="firstName" v-model="firstName"/>
               <span>{{ errors.firstName}}</span>
               </div>
          </div>

            <div class="form-group col-md-6">
                <div class="col">
                  <label for="lastName">Last name</label>   
                  <Field name="lastName" as="input" :rules="isRequiredLastName" type="text" class="form-control" id="lastName" 
                   ref="lastName" v-model="lastName"/>
                  <span>{{ errors.lastName }}</span>
                </div>
            </div>
          </div>
        

        
        
        <div class="form-row">
          <div class="form-group col-md-6">
              <div class="col">
                <label for="email">Email</label>   
                <Field  name="email" as="input" :rules="isRequiredEmail" type="email" class="form-control" id="email"  
                ref="email" v-model="email"/>
               <span>{{ errors.email }}</span>
               </div>
          </div>



          <div class="form-group col-md-6">
              <div class="col">
                <label for="password">Password</label>   
                <Field name="password" as="input" :rules="isRequiredPassword" type="password" class="form-control" id="password"  
                ref="password" v-model="password"/>
               <span>{{ errors.password }}</span>
               </div>
          </div>
          
        </div>



        <div id="submit">
          <!-- <router-link :to="{ name: 'post', params: { message: response.data.succeed} }">  -->
            <button class="btn btn-primary" type="submit" @click.prevent="creatUser">Sign up</button>

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
    //  onSubmit() {
    //   alert('Submitting :(');
    // },
     isRequiredFirstName(value) {
        return value ? true : 'First name is required';
     },
     isRequiredLastName(value) {
        return value ? true : 'Last name is required';

     },
     isRequiredEmail(email){
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return re.test(email);

     },
     isRequiredPassword(value){
         return value ? true : 'Password is required';

     },


      // return value ? true : 'This field is required';
      //     if (!this.firstName) {
      //   return value.firstName ? true : ("First name required")
      // }
      //   if (!this.lastName) {
      //   return value.lastName ? true : ("Last name required")
      // }
     
    //    validEmail: function (email) {
    //   var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(email);
    // },


      
      //   if (!this.firstName) {
      //   return("firstName required.");
      // }
      // if (!this.lastName) {
      //  return("lastName required.");
      // }
      //  validateEmail(value){
      //   // if the field is empty
      //   if (!value) {
      //     return ('email is required');
      //  }
       
      //   // if the field is not a valid email
      //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      //     return 'This field must be a valid email';
      // }
      //  }
     
    
    handleFIleUpload() {
      this.file = this.$refs.file.files[0];
    },
   
    async creatUser() {

      const register = 
      {
              first_name: this.firstName,
              last_name: this.lastName,
              email: this.email,
              password: this.password,
            };
            console.log ( register);
            console.log('fuck');
 
      try {
        let response = await axios.post("User/Sign_up", register);
        
        console.log(response);
        this.$router.replace({
                        name: 'post',
                        params: { message: response.data.succeed}
                    })


      } catch (err) {
        this.error = err.response.data.error;
      }

    },


      // valider(response) {
      //     if (response) {
      //         alert('OK');
      //         } else if (!response ) {

      //           alert('probleme');
      //         } 
      // },



    //  valider() {
  // if(document.formSaisie != "") {
  //   document.formSaisie.submit();
  // }
  // else {
  //   alert("veuillez remplir tous les champs");
  // }
//  valider() {
//           if (first_name = this.firstName );
//               (last_name = this.lastName);
//               (email = this.email);
//               (password = this.password){
//                   // this.router.path(['/Articles/post']);
//                      this.submit = true;
//               }
//           else {
//                 this.submit = false;
//               } 
//  } 
  

// this.submit = false;
//       alert("veuillez remplir tous les champs");
 
  
 



 



  }
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