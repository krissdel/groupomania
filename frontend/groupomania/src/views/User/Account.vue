<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="logout">
        <router-link to="/Home">
          <button type="button" class="btn btn-primary btn-sm" @click="logout">
            Log out
          </button>
        </router-link>
      </div>
    <div class="container">
      <h1 class="display-4">Social Network</h1>
    </div>
    <div class="container-container">
      <div class="card" style="width: 68%">
        <div class="card-welcome">
          <h5>Welcome</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">User_id : {{ id }}</li>
          <li class="list-group-item">Nom : {{ last_name }}</li>
          <li class="list-group-item">Prenom : {{ first_name }}</li>
          <li class="list-group-item">email : {{ email }}</li>
        </ul>
        <div class="card-body">
          <div class="card-body-link">
            <router-link to="/Post/allPosts?view=allPosts">
              <button type="submit" class="btn btn-info">all posts</button>
            </router-link>
            |
            <router-link to="/Post/post">
              <button type="submit" class="btn btn-info">Add post</button>
            </router-link>
            |
            <router-link to="/Post/allPosts?view=allUserPosts">
              <button type="submit" class="btn btn-info">user post</button>
            </router-link>
          </div>
          <br />
          <div class="supprime">
            <button
              type="button"
              class="btn btn-light"
              v-if="admin()"
              @click="deleteUser"
            >
              delete account
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import auth from "../../services/auth";


export default {
  name: "Account",
  data: function () {
    return {
      id: sessionStorage.getItem("user_id"),
      last_name: sessionStorage.getItem("last_name"),
      first_name: sessionStorage.getItem("first_name"),
      email: sessionStorage.getItem("email"),
    };
  },
  
  methods: {
    logout() {
      auth.logout();
    },

    admin() {
      if (sessionStorage.getItem("role") != 1) return true;
      return false;
    },

    async deleteUser() {
      try {
        let response = await axios.delete("/user/" + this.id, {
          headers: auth.addHeader(),
        });
        auth.init(response.data);
        this.$router.push({
          name: "Home",
          params: { message: response.succeed },
        });
        alert(` Attention!... Vôtre compte va être supprimé`);
        console.log(" user supprimé ! ");
        sessionStorage.clear();
      } catch (err) {
        console.log("------------- :)", err);
      }
    },
  },
};
</script>




<style scoped langue="scss">
button.btn.btn-primary.btn-sm {
  background-color: #506a96;
  border-color: #0f2140;
  width: 6pc;
}
button.btn.btn-info {
  background-color: #506a96;
  border-color: #0f2140;
}
.btn-light {
  color: #212529;
  background-color: none;
  border-color: #f8f9fa;
}
.card-welcome {
  justify-content: space-between;
}
h5 {
  font-size: 30px;
  color: white;
}
.card-title {
  margin: 10px;
}

.card-body-link {
  display: flex;
  justify-content: space-around;
}

.logout {
  text-align: end;
  width: 90%;
  display: flex;
  justify-content: flex-end;
}

a.logout {
  color: black;
}
.card-welcome {
  text-align: center;
}
.container {
  height: auto;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  padding: 2%;
  padding-bottom: 10%;
  text-align: center;
}
.container-container {
  display: flex;
  justify-content: center;
}
.card {
      background-color: #1b325b;
}
</style>
