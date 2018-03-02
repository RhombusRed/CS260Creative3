<template>
  <div class="about-grid-wrapper">
      <img v-bind:src="imagePath">
            <p>D&amp;D is a great roleplaying game, but character creation just takes too long. So we're here to simplify it. For free! You're welcome. <br><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Donate Here</a></p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
         </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
	     imagePath: '../static/images/DM.jpg'
	 }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
