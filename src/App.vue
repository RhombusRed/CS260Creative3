<template>
  <div id="app">
    <navigator></navigator>
    <router-view/>
  </div>
</template>

<script>
import Navigator from './components/Navigator.vue'
export default {
  name: 'App',
  components: { Navigator }
}
</script>

<style>
#app {
  background-color: #333;
}
</style>
