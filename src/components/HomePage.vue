<template>
  <div class="wrap">
    <img v-bind:src="imagePath" class="mainLogo"/>
    <router-link to="/Creation" class="index-wrapper">Create a character</router-link>
    <router-link to="/MyCharacter" class="index-wrapper">View my character</router-link>
    <router-link to="/About" class="index-wrapper">About</router-link>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
	     imagePath: '../static/images/Logo.png'
	 }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainLogo {
    margin: 0 15%;
    padding: 0;
    width: 70%;
    transform: rotate(0);
    z-index: -1;  }

.index-wrapper {
    display: grid;
    grid-template-columns: 2fr 4fr;
    grid-column-gap: 15px; 
    grid-row-gap: 15px;
    margin: 10px 8%;
    padding: 20px 0;
    text-decoration: none;
    text-align: center;
    color: black;
    background-color: #c00;
    border-radius: 5px;  }

.index-wrapper:hover {
    background-color: darkred;
    color: white;  }

.index-wrapper h1 {
    font-size: 200%;  }

.index-wrapper p {
    text-align: left;
    color: white;  }
</style>
