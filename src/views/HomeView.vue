<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/hotelsketch.png">
    <HelloWorld msg="Welcome to Hotel App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
