<template>
  <div class="section">
    

    <div class="container">
      <h1 class="text-center">Sign up</h1>
      <div class="container_container">
        
        <!-- <form class="sign_up"> -->

          <div class="form-row">

          <!-- <div class="form-row1"> -->
            <div class="col">
              <label for="inputFirstName">First name</label>
              <input type="text" class="form-control" id="inputFirstName" v-model="firstName" ref="firstName" />
            <!-- <label for="inputFirstName">First Name</label>
                <input type="text" v-model="user.firstName" v-validate="'required'" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && errors.has('firstName') }" />
                <div v-if="submitted && errors.has('firstName')" class="invalid-feedback">{{ errors.first('firstName') }}</div> -->
            </div>
            <div class="col">
              <label for="inputLastName">Last name</label>
              <input type="text" class="form-control" id="inputLastName" v-model="lastName"  ref="lastName"/>
            </div>
          <!-- </div> -->
          </div>
          <div class="form-row">
          <!-- <div class="form-row2"> -->

            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" v-model="email" ref="email"/>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4" v-model="password" ref="password"/>
            </div>
          <!-- </div> -->
          </div>
          <div id="submit">
            <!-- <router-link :to="{ name: 'post' }"> -->
              <!-- <router-link :to="{ name: 'post', params: { userId: user.id}}"> -->
              <button class="btn btn-primary" v-on:click = "creatUser">
                Sign up
              </button>
            <!-- </router-link> -->
          </div>
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>
    

<script>


// import { mapState, mapActions } from 'vuex';
// import { mapActions } from "vuex";
// import Vuex from 'vuex';
// Vue.use(Vuex)


import axios from 'axios';
export default {
  data () {
    return {

        firstName: 'kriss',
        lastName: 'del',
        email: 'delormechrist@gmail.com',
        password: 'hello',

      // submitted: false
      file:'',
      error: ''
    }
  },
      methods: {
        handleFIleUpload() {
          this.file = this.$refs.file.files[0];

        },
        async creatUser(){
          
          const formData = new FormData(); 
          formData.append('first_name', this.$refs.firstName.value);
          formData.append('last_name', this.$refs.lastName.value);
          formData.append('email', this.$refs.email.value);
          formData.append('password', this.$refs.password.value);
          const test = {
            'first_name': this.$refs.firstName.value,
            'last_name': this.$refs.lastName.value,
            'email': this.$refs.email.value,
            'password': this.$refs.password.value,
          }
          

          try {
            let response = await axios.post("user/sign_up", test);
            console.log(response);
            return;

            //   this.$router.replace({ name: 'post', params: {
            //     message: response.data.success
            //   }});
            


          } catch (err) {
            this.error = err.response.data.error
          }
        }
      }
  
};

</script>





<style lang="scss">
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
}
</style>