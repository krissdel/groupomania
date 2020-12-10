<template>
  <div class="section">
    <div class="container">
      <h1 class="text-center">Login</h1>
      <div class="title-signup">
        <router-link to="/Home">
          <h2 class="text-center">Sign up</h2>
        </router-link>
      </div>
      <div class="container_container">
        <Form v-slot="{ errors }" class="login">
          <div class="form-group row">
            <div class="col-sm-10">
              <Field
                name="email"
                as="input"
                :rules="isRequiredEmail"
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                placeholder="Email"
                ref="email"
              />
              <span>{{ errors.email }}</span>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <Field
                name="password"
                as="input"
                :rules="isRequiredPassword"
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                placeholder="Password"
                ref="password"
              />
              <span>{{ errors.password }}</span>
            </div>
          </div>
          <div class="form-group row">
            <button
              type="submit"
              class="btn btn-primary"
              @Click.prevent="onSubmit"
            >
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Form } from "vee-validate";
import axios from "axios";
import auth from "../../services/auth";

export default {
  components: {
    Field,
    Form,
  },
  name: "Log_in",
  data() {
    return {
      email: "",
      password: "",

      error: "",
    };
  },
  methods: {
    isRequiredEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    isRequiredPassword(value) {
      return value ? true : "Password is required";
    },

    async onSubmit(onSubmit) {
      if (!this.email || !this.password) {
        return console.log("certains champs sont vide");
      }
      console.log(onSubmit);
      const login = {
        email: this.email,
        password: this.password,
      };

      try {
        let response = await axios.post("/user/login", login, {
          headers: auth.addHeader(),
        });
        auth.init(response.data);
        this.$router.replace({
          name: "Account",
          params: { message: response.succeed },
        });

        alert(
          `Bravo ${response.data.first_name} ${response.data.last_name}!...  bienvenue sur Groupomania social network`
        );

        console.log(" user connecté ! ");
      } catch (err) {
        console.log("------------- :)", err);
        const code = parseInt(err.toString().slice(-3));
        switch (code) {
          case 500:
            alert("le serveur a rencontré une erreur");
            break;
          case 401:
            alert("utilisateur ou mot de passe incorrect");
            break;
          default:
            alert("le serveur a rencontré une erreur imprévisible");
            break;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
h2.text-center {
  width: 100%;
  color: red;
  font-size: 25px;
}

.title-signup {
  justify-content: center;
  display: flex;
}

h1 {
  color: white;
}

button.btn.btn-primary {
  width: 80%;
}

.row {
  justify-content: center;
}
.section {
  background-image: url("../../assets/carte-du-monde.jpg");
  background-size: cover;
  background-color: grey;
}
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
