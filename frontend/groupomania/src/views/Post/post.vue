<template>

  <div class="post">
    <div class="title">
      <h3>{{ msg }}</h3>
    </div>

<form>
<div class="container">

<div class="card" style="width: 18rem;">

<div class="card1" style="width: auto;">
  <div class="card-body">
    <h5 class="card-title">image</h5>
    
   

<div class="input">
  <div class="custom-file">
   



    
    <input 
    className='image'
    accept="/image.*/"
    style="display: none" 
    type="file" 
    @change="onFileSelected"
    ref="fileInput"
    >



    <div class="button">
    <button type="button" class="btn btn-primary1" @click="$refs.fileInput.click()">{{ resizedImg ? 'Replace' : 'pick image' }}</button>

    </div>
    <div id="preview">
    <img v-if="resizedImg" :src="resizedImg" />


  </div>

  </div>

</div>


 
 </div>

</div>

  <div class="card-body">
    <!-- <h5 class="card-title">   </h5> -->




<div class="form-group">
    <label for="text"  >text</label>
    <textarea class="form-control"  v-model="text" id="text" rows="3"></textarea>
  </div>

  

        <button type="submit" class="btn btn-primary2" @click.prevent='createPost'>Add post</button>

  </div>
  
</div>

</div>
</form>

  </div>
  
</template>



<script>
// import Vue from 'vue';
// const VueUploadComponent = require('vue-upload-component')
// Vue.component('file-upload', VueUploadComponent)


import axios from 'axios';
import resizeImage from '@/plugins/image-resize.js';

// import UploadImage from 'vue-upload-image';
// import Vuetify from 'vuetify';





export default {

  name: 'post',
  data () {
    return{
    msg: 'Please!.. Add post',
    selecteFile: null,
    resizedImg: '',
    // image: '',
    file: '',
    text:'',
    }
   
  },
  methods: {
    onFileSelected (event) {
     this.selectedFile = event.target.files[0]
    const file = event.target.files[0]
      this.image = file
       resizeImage({ file: file, maxSize: 200 }).then((resizedImage) => {
        this.resizedImg = URL.createObjectURL(resizedImage);
       })

    },
  
    async createPost() {
      // const fd = new FormData();
      // fd.append('image', this.selectedFile, this.selectedFile.name);  
      // fd.append('text', this.text.post);

      const addPost = {
      selectedFile: this.selectedFile.name,
      text: this.text,
      }
      console.log(addPost);
      try{

          let response = await axios.post("/Post/post", addPost, {
            // selectedFile: this.selectedFile.name,
            // text: this.text,

          onUploadProgress: uploadEvent => {
            console.log('Upload Progress' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + '%')
          } 

        })
       
        .then(res => {
          console.log(res)
          console.log(response.data);
        })

        this.$router.replace({
                        name: 'postsList',
                        params: { message: response.data.succeed}
                    })
      
         } catch (err) {
                    this.error = err.response.data.error
                }
    }
  }    
  
}




</script>



<style scoped langue="scss">
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

