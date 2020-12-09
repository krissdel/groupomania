<template>
  <div class="main">
    <div class="section">
      <div class="container">
        <div class="title">
          <div class="title-h1">
            <h1 class="text-center">Sign up</h1>
          </div>
          <div class="title-login">
            <router-link to="/User/Login">
              <h2 class="text-center">Login</h2>
            </router-link>
          </div>
        </div>
        <div class="container_container">
          <Form v-slot="{ errors }">
            <div class="form-row">
              <div class="form-group col-md-6">
                <div class="col">
                  <Field
                    name="firstName"
                    as="input"
                    :rules="isRequiredFirstName"
                    type="text"
                    class="form-control"
                    id="firstName"
                    ref="firstName"
                    placeholder="First name"
                    v-model="firstName"
                  />
                  <span>{{ errors.firstName }}</span>
                  <label for="firstName"></label>
                </div>
              </div>

              <div class="form-group col-md-6">
                <div class="col">
                  <Field
                    name="lastName"
                    as="input"
                    :rules="isRequiredLastName"
                    type="text"
                    class="form-control"
                    id="lastName"
                    ref="lastName"
                    placeholder="Last name"
                    v-model="lastName"
                  />
                  <label for="lastName"></label>
                  <span>{{ errors.lastName }}</span>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <div class="col">
                  <Field
                    name="email"
                    as="input"
                    :rules="isRequiredEmail"
                    type="email"
                    class="form-control"
                    id="email"
                    ref="email"
                    placeholder="Email"
                    v-model="email"
                  />
                  <span>{{ errors.email }}</span>
                  <label for="email"></label>
                </div>
              </div>
              <div class="form-group col-md-6">
                <div class="col">
                  <Field
                    name="password"
                    as="input"
                    :rules="isRequiredPassword"
                    type="password"
                    class="form-control"
                    id="password"
                    ref="password"
                    placeholder="Password"
                    v-model="password"
                  />
                  <span>{{ errors.password }}</span>
                  <label for="password"></label>
                </div>
              </div>
            </div>
            <div id="submit">
              <button
                class="btn btn-primary"
                type="submit"
                @click.prevent="creatUser"
              >
                Sign up
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
import { Field, Form } from "vee-validate";
import auth from "../services/auth";

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
      file: "",
      error: "",
    };
  },

  methods: {
    isRequiredFirstName(value) {
      return value ? true : "First name is required";
    },
    isRequiredLastName(value) {
      return value ? true : "Last name is required";
    },
    isRequiredEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    isRequiredPassword(value) {
      return value ? true : "Password is required";
    },

    handleFIleUpload() {
      this.file = this.$refs.file.files[0];
    },

    async creatUser() {
      if (!this.firstName || !this.lastName || !this.email || !this.password) {
        return console.log("certains champs sont vide");
      }
      const register = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
      };
      console.log(register);

      try {
        let response = await axios.post("user/sign_up", register, {
          headers: auth.addHeader(),
        });
        console.log(response);
        auth.init(response.data);
        this.$router.replace({
          name: "Account",
          params: { message: response.data.succeed },
        });

        alert(
          `Bravo!..." ${response.data.first_name} ${response.data.last_name}  "bienvenue sur Groupomania social network`
        );
        console.log("succeed");
      } catch (err) {
        this.error = err.response.data.error;
        alert(`l'utilisateur existe déjà`);
      }
    },
  },
};
</script>

<style langue='scss'>
h2.text-center {
  width: 100%;
  color: red;
  font-size: 25px;
}

.title-login {
  justify-content: center;
  display: flex;
}
nav.navbar.navbar-light.bg-dark {
  justify-content: center;
}
h1.text-center {
  color: white;
}
.title {
  justify-content: center;
}
.section {
  background-image: url("../assets/global-network-connection-world-map.jpg");
  background-size: cover;
  background-color: rgb(14, 1, 1);
}
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

.jumbotron-fluid {
  background-color: white;
  width: 100%;
}

h3 {
  text-align: center;
  font-size: 2rem;
}
.card-text1 {
  font-size: 50px;
}
.container {
  height: auto;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  padding: 2%;
  padding-bottom: 10%;
}
.card-footer {
  background-color: #0f2140 !important;
}
h3 {
  color: white;
  font-size: 20px;
}

.card-body {
  text-align: center;
}
</style>