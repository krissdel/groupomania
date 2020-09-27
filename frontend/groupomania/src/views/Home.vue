<template>
  <div class="home">
    <div class=logo>
      <img alt="Vue logo" src="../assets/icon-above-font.png">
    </div>
    <Groupomania msg="Welcome to Groupomania"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Groupomania from '@/components/Groupomania.vue'

export default {
  name: 'Home',
  components: {
    Groupomania
  }
}
</script>

//  <style lang="scss">
// .logo {
//   font-size: 30px;
//   color: black;
// }
// </style>