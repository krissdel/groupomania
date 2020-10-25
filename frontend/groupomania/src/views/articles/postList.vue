<template>
  <div class="article">
    <div class="title">
      <h3>{{m}}</h3>
    </div>

    <div class="container">
      <div class="card" style="width: 18rem">
        <div class="card1" style="width: auto">
          <div class="card-body">
            <h5 class="card-title">
              POST <br />
              image
            </h5>

            <!-- <input class="btn btn-primary" id='getImg' type="file" name="image" accept="image/*" /> -->
            <!-- <button class="btn btn-outline-secondary" type="button">Button</button>  -->

            <!-- <file-upload
    ref="upload"
    v-model="files"
    post-action="/post.method"
    put-action="/put.method"
    @input-file="inputFile"
    @input-filter="inputFilter"
  > -->






  

            <div class="input">
              <div class="custom-file">
                <!-- <input type="file" style="display: none" class="custom-file-input" id="inputGroupFile04"  accept=".jpg, .jpeg, .png" multiple> -->
                <!-- <label class="custom-file-label" for="inputGroupFile04"></label> -->

                <input
                  style="display: none"
                  type="file"
                  @change="onFileSelected"
                  width="50%"
                  ref="fileInput"
                />
                <div class="button">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="$refs.fileInput.click()"
                  >
                    Pick image
                  </button>
                  <!-- <button type="button" class="btn btn-primary" @click='onUpload'>Upload</button> -->
                </div>
                <div id="preview">
                  <img v-if="item.imageUrl" :src="item.imageUrl" />
                </div>
              </div>
            </div>
          </div>
        </div>






        <div class="card-body">
          <h5 class="card-title">POST</h5>

          <div class="form-group">
            <label for="exampleFormControlTextarea1">texte</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <a class="btn btn-primary">ajouter un article</a>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
// import Vue from 'vue';
// const VueUploadComponent = require('vue-upload-component')
// Vue.component('file-upload', VueUploadComponent)

// import axios from 'axios';
// import UploadImage from 'vue-upload-image';
import ImageUploader from "vue-image-upload-resize";

export default {
  name: "post",
  data() {
    return {
      //  selecteFile: null
      item: {
        //...
        image: null,
        imageUrl: null,
      },
    };
  },
  components: {
    ImageUploader,
  },
  methods: {
    onFileSelected(event) {
      //  this.selectedFile = event.target.files[0]
      const file = event.target.files[0];
      this.image = file;
      this.item.imageUrl = URL.createObjectURL(file);
    },
    // onUpload() {
    //   const fd = new FormData();
    //   fd.append('image', this.selectedFile, this.selectedFile.name);
    //     // axios.post('http://localhost:8080/#/Articles/post', fd, {
    //      axios.post('/Articles/post', fd, {

    //       onUploadProgress: uploadEvent => {
    //         console.log('Upload Progress' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
    //       }
    //     })
    //     .then(res => {
    //       console.log(res)
    //     })
    // }
  },
};
</script>



<style scoped langue="scss">
button.btn.btn-primary {
  width: auto;
  background-color: #506a96;
}
.btn-primary {
  font-size: 1.3rem;
  width: 100%;
  background-color: #0f2140;
  border-color: #0f2140;
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

/* .router_link_user {
   visibility: hidden;
} */
</style>

