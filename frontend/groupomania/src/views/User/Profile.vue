<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="logout">
      <!-- <button type="submit" class="btn btn-primary" @Click.prevent="onSubmit">
        Logout
      </button> -->
      <a href="#/Home" class="logout">log out</a>
    </div>

    <div class="container">
      <h1 class="display-4">Profile</h1>
    </div>
    <div class="container-container">
      <div class="card" style="width: 90%">
        <div class="card-welcome">
          <h5 class="card-title">{{ first_name }} {{ last_name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">User_id : {{ id }}</li>
          <li class="list-group-item">Nom : {{ last_name }}</li>
          <li class="list-group-item">Prenom : {{ first_name }}</li>
          <li class="list-group-item">email : {{ email }}
            <button type="submit" class="btn btn-info" @click="modifyUser">
              modifier
            </button>
          </li>
          <!-- <li class="list-group-item">password : {{ password }}
            <button type="submit" class="btn btn-info" @click="modifyUser">
              modifier
            </button>
          </li> -->

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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import auth from "../../services/auth";

export default {
  name: "Account",
  data: function () {
    return {
      id: sessionStorage.getItem("id"),
      last_name: sessionStorage.getItem("last_name"),
      first_name: sessionStorage.getItem("first_name"),
      email: sessionStorage.getItem("email"),

    //   password: sessionStorage.getItem("password"),
};
  },
//   methods: {
//       async modifyUser(){
//            const register = {
       
//         email: this.email,
//         password: this.password,
//       };
//       console.log(register);
//         try {
//               let response = await axios.put("/user/:id",{headers: auth.addHeader()});
//               console.log('oooooooooooooo', response, auth);
//                auth.init(response.data);
//                 this.$router.replace({
//                   name: "Account",
//                   params: { message: response.succeed },
//                 });
//                 alert(`Bravo ${response.data.first_name} ${response.data.last_name}!...  bienvenue sur Groupomania social network`);
//                 console.log(" user connecté ! ");
//               } 
//               catch (err) {
                // console.log("------------- :)",err);
                    //  }
    //   }
//   }
};
</script>




<style scoped langue="scss">
h5 {
  font-size: 30px;
}
.card-title {
  margin: 10px;
}
a.card-link-addPost {
  color: black;
  font-weight: bold;
}
.card-body-link {
  display: flex;
  justify-content: space-around;
}
a.card-link-allPost {
  color: black;
}
a.card-link-userPost {
  color: black;
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
</style>
