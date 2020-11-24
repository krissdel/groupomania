<template>
  <div class="post">
    <div class="title">
      <h3>{{ msg }}</h3>
      <div class="B-to-account">
        <router-link to="/Post/allPosts?view=allPosts">
          <button type="submit" class="btn btn-primary btn-sm">
            all Posts
          </button>
        </router-link>
        <br />
        <br />
        <router-link to="/user/account">
          <button type="button" class="btn btn-primary btn-sm">
            Back to account
          </button>
        </router-link>
      </div>
    </div>
    <!-- ------------------------------------------------- -->

    <form @submit.prevent="createPost" for="post" id="post">
      <div class="container">
        <div class="card" style="width: 18rem">
          <div class="card1" style="width: auto">
            <div class="card-body">
              <label for="image"></label>
              <div class="input">
                <div class="custom-file">
                  <input
                    className="image"
                    accept="/image.*/"
                    style="display: none"
                    type="file"
                    @change="onFileSelected"
                    ref="fileInput"
                    id="image"
                  />

                  <div class="image">
                    <img
                      :src="getImage()"
                      v-if="image !== null"
                      style="width: 55%"
                      alt="image post"
                    />
                  </div>
                  <div class="button">
                    <button
                      type="button"
                      class="btn btn-primary1"
                      @click="$refs.fileInput.click()"
                    >
                      {{ resizedImg ? "Replace" : "former picture" }}
                    </button>
                  </div>
                  <div id="preview">
                    <img v-if="resizedImg" :src="resizedImg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- --------[section text]------------------------------------>

          <div class="card-body">
            <div class="form-group">
              <!-- <p v-if="text !== ''" >{{ getText() }}</p> -->

              <div class="card">
                <div class="card-body-text" >
                  <p v-if="text !== ''">{{ this.text }}</p>
                </div>
              </div>

              <!-- <div v-if="getText() !== ''">{{text}}</div>  -->
              <label for="text"> former text</label>
              <input
                type="text"
                placeholder="new text"
                class="form-control"
                v-model="nouveauTexte"
              />
            </div>

            <button type="submit" id="add" class="btn btn-primary2">
              Add post
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>



<script>
import axios from "axios";
import resizeImage from "@/plugins/image-resize.js";
import auth from "../../services/auth";

export default {
  name: "modifyPost",
  // text: "",
// newText:"",
  props: {
    id: {
      type: String,
    },

    image: {
      type: String,
    },
    text: {
      type: String,
    },
    user_id: {
      type: Number,
    },
    refs: {
      type: Number,
    },
    images: {
      type: String,
    },
    // newText: {
    //   type: String
    // },
  },
  data() {
    return {
      modifyPost: null,

      msg: "Please!.. modify post",
      selecteFile: "",
      resizedImg: "",
      addPost: "",
      add: "",
      file: "",
      post: "",
      nouveauTexte:"",
    };
  },

  async created() {
    try {
      console.log("created().........");
      let response = await axios.get("post/post/" + this.id, {
        headers: auth.addHeader(),
      });
      console.log("===========", typeof response.data, response.data.data[0]);
      console.log("^^^^^^^^^^^", this.id);
      // auth.init(response);
    } catch (err) {
      console.log("---------- :(", err);
    }
  },

  methods: {
    getImage: function () {
      const images = require.context(
        "../../assets/upload/",
        false,
        /\.(png|jpe?g|svg|webp)$/
      );
      return this.images !== undefined? images("./no-image-available.jpg") : images("./" + this.image);
    },

    getText: function () {
      return this.text;
    },

    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      const file = event.target.files[0];
      resizeImage({ file: file, maxSize: 200 }).then((resizedImage) => {
        this.resizedImg = URL.createObjectURL(resizedImage);
      });
      //  console.log("tatatatatatatataat", event.target.files[0] );
    },

    async createPost() {
      const addPost = {
        image: this.selectedFile !== undefined ? this.selectedFile.name : null,
        text: this.nouveauTexte,
        id: sessionStorage.getItem("id")
      };
      console.log("-----------", addPost);

      try {
        let response = await axios.put("/post/" + this.id, addPost, {
          // headers: auth.addHeader(),
        });
        // auth.init(response);
        if (response.status !== 201) throw response.data.message;
        console.log("-put --- :) ", response);

        this.$router.push({
          name: "allPosts",
          query: { view: "allPosts" },
        });
      } catch (err) {
        if (typeof err === "string") this.error = err;
        else this.error = err.response;
      }
    },
  },
};
</script>



<style scoped langue="scss">

input.form-control {
    margin-top: 20px;
}
.card-body-text {
    background-color: #f2f2f2;
}

button.btn.btn-primary.btn-sm {
  background-color: #506a96;
  border-color: #0f2140;
  width: 8pc;
}
.B-to-account {
  text-align: end;
}
a.card-link1 {
  color: black;
}
h1.display-4 {
  text-align: center;
}
.card-body-link {
  display: flex;
  justify-content: space-around;
}
a.card-link-userPost {
  color: black;
  line-height: normal;
}
a.card-link-allPost {
  color: black;
  line-height: normal;
}
a.card-link-allPost {
  color: black;
  line-height: normal;
}

.card-welcome {
  display: flex;
  justify-content: space-around;
  height: 60px;
  padding-top: 16px;
}
.container-container {
  display: flex;
  justify-content: center;
}
ul {
  color: red;
  background-color: blueviolet;
  height: 50px;
}
.title {
  padding: 30px;
}
.button {
  padding-bottom: 20px;
}
button.btn.btn-primary1 {
  width: auto;
  background-color: #506a96;
}
.btn-primary2 {
  font-size: 1.3rem;
  width: 100%;
  background-color: #0f2140;
  border-color: #0f2140;
}
.btn {
  color: #ffffff;
}

h3 {
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
}

.card {
  min-width: -5;
}
.card-body {
  text-align: center;
  padding-top: 60px;
}
img {
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>

