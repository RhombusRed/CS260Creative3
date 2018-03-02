<template>
  <div class="hero">
	<h1>Simplify Your Life</h1>
	<img v-bind:src="imagePath"/>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
	     imagePath: '../static/images/cloud.jpg'
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
