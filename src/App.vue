<template>
  <div>
    <navigator></navigator>
    <div id="app">
      <router-view/>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Navigator from './components/Navigator.vue'
  import AppFooter from './components/AppFooter.vue'
  export default {
    name: 'App',
    components: { Navigator, AppFooter }
  }
  </script>

<style>
  #app {
    background-color: #333;
    padding-top:47px;
    padding-bottom:47px;
  }
  * {
    margin: 0;
    padding: 0;  }
  html {
    background-color: #333;
    height: 100%;
    color: red;  }
  body {
    position: relative;
    margin: 0;
    min-height: 100%;  }
  a {
    text-decoration: none;
    color: red;
  }
  a:hover {
    color: #a00;
  }
 </style>
