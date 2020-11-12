<template>
  <div class="card" style="width: 30rem">
    <div class="posted-post" for="allPosts">
      <img :src="image" v-if="image !== null" />
      <p v-if="image !== ''">{{ text }}</p>
      <button>edit</button>
      <button>delete</button><!-- v-if si admin -->
    </div>
  </div>
</template>




<script>
export default {
  name: "Posted",
  props: {
    image: {
      type: String,
    },
    text: {
      type: String,
    },
    id: {
      type: Number,
    },
  },
};
</script>


<style scoped lang="scss">
.card {
  height: 65px;
  color: blue;
  //  background-color: lightblue;
}
</style>