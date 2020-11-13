<template>
  <div class="post">
    <div class="title">
      <h3>{{ msg }}</h3>
    </div>

    <form @submit.prevent="createPost" for="post" id="post">
      <div class="container">
        <div class="card" style="width: 18rem">
          <div class="card1" style="width: auto">
            <div class="card-body">
              <!-- <h5 class="card-title">image</h5> -->
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

                  <div class="button">
                    <button
                      type="button"
                      class="btn btn-primary1"
                      @click="$refs.fileInput.click()"
                    >
                      {{ resizedImg ? "Replace" : "pick image" }}
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
            <!-- <h5 class="card-title">   </h5> -->

            <div class="form-group">
              <label for="text">texte</label>
              <textarea
                class="form-control"
                id="text"
                rows="3"
                v-model="text"
              ></textarea>
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
import { ref } from "vue";
import auth from "../../services/auth";
// import func from '../../../../vue-temp/vue-editor-bridge';

export default {
  name: "post",
  data() {
    return {
      msg: "Please!.. Add post",
      selecteFile: null,
      resizedImg: "",
      // image: '',
      file: "",
      text: "yo",
      addPost: "",
      add: "",

      post: "",
    };
  },
  components: {},

  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      const file = event.target.files[0];
      resizeImage({ file: file, maxSize: 200 }).then((resizedImage) => {
        this.resizedImg = URL.createObjectURL(resizedImage);
      });
    },

    // savePost : function () {
    //  this.addPost.push({
    //   image: this.selectedFile++,
    //   text: this.text++,
    //  })
    // },

    async createPost() {
      let post = ref([]);
      console.log(post);

      const addPost = {
        image: this.selectedFile !== undefined ? this.selectedFile.name : null,
        text: this.text,
        idParent: 0,
        post: [this.selectedFile, this.text],
      };

      console.log("-----------", addPost);

      try {
        let response = await axios.post("/post/", addPost, {
          headers: auth.addHeader(),
          onUploadProgress: (uploadEvent) => {
            console.log(
              "Upload Progress" +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
          },
        });
        auth.init(response);
        if (response.status !== 201) throw response.data.message;
        // console.log("---- :) ", response)

        this.$router.push({
          name: "allPosts",
          query: { view: "allPosts" },
        });

        // if (response.status !== 201) throw  response.data.message;
        // console.log(";;;;;;;;;;;;;;;;", answer.data)
        // this.$router.push({
        //   name: "allUserPosts",
        //   query: { view: "allUserPosts", userId: 1 }, //TODO : changer l'id 1 par une valeur dynamique
        // });






        // alert("Bravo!...  vous venez de créer un post");
        // console.log(" post crée ! ");
      } catch (err) {
        if (typeof err === "string") this.error = err;
        else this.error = err.response;
      }
    },
  },
};
</script>



<style scoped langue="scss">
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

