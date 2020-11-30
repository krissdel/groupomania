<template>
  <div class="container">
    <h1 class="text-center">Login</h1>

    <div class="container_container">
      <!-- @onsubmit.prevent="onSubmit()" -->
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
              v-model="email"
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
              v-model="password"
              ref="password"
            />
            <span>{{ errors.password }}</span>
          </div>
        </div>

        <button
          type="submit"
          class="btn btn-primary"
         
          @Click.prevent="onSubmit"
        >
          Login
        </button>
      </Form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
      email: "parker@gmail.com",
      password: "parker",

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
    // ============================================================

    ...mapActions({
      Login: "auth/Login",
    }),

   

   
    async onSubmit(onSubmit) {
      if (!this.email || !this.password) {
        return console.log("certains champs sont vide");
      }
      console.log("onSubmit", onSubmit);

      // =============================================
      const login = {
        email: this.email,
        password: this.password,
      };
      console.log(login);

      /**
       * response
       *
       * [response.error]      objet si l'utilisateur n'exhiste pas
       * [response.message]    unqiuement en cas de succès : un message d'information
       * [response.id]         unqiuement en cas de succès : l'id de l'utilsateur
       * [response.jwt]        unqiuement en cas de succès : le jeton d'authentification
       * [response.last_name]  unqiuement en cas de succès : le nom de l'utilsateur
       * [response.first_name] unqiuement en cas de succès : le prénom de l'utilisateur
       * [response.role]       unqiuement en cas de succès : 0 utilisateur 1 admin
       *
       */

     

      try {
        let response = await axios.post("/user/login", login, {
          // headers: auth.addHeader(),
        });
        console.log("oooooooooooooo", response, auth);
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
