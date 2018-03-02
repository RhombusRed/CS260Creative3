<template>
    <nav>
	<label for="show-menu" class="show-menu">Show Menu</label>
	<input type="checkbox" id="show-menu" role="button">
        <ul id="menu">
	    <li><router-link to="/">Home</router-link></li>
	    <li><router-link to="/Creation">Create</router-link></li>
	    <li><router-link to="/MyCharacter">My Character</router-link></li>
	    <li><router-link to="/About">About</router-link></li>
	</ul>	
    </nav>
</template>

<script>
 export default {
     name: 'Navigator'
 }
</script>

<style scoped>
 /*Strip the ul of padding and list styling*/
 .clear {
     float: clear;
 }
 nav {
        width: 100%;
        height: 47px;
        background-color: black;
        position: absolute;
        
}
    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        position: inherit; /* Make it stick, even on scroll */  }

    nav li {
        float: left;  }

    nav li a {
        display: inline-block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;  }

    nav a:hover {
        color: white;
        background-color: #c00;  }
 /*Active color*/
 li a.active {
 }
 /*Hover state for top level links*/
 li:hover a {
 }
 /*Style 'show menu' label button and hide it by default*/
 .show-menu {
     text-decoration: none;
     color: #fff;
     background: #FF5035;
     text-align: center;
     padding: 10px 0;
     display: none;
 }
 /*Hide checkbox*/
 input[type=checkbox]{
     display: none;
 }
 /*Show menu when invisible checkbox is checked*/
 input[type=checkbox]:checked ~ #menu{
     display: block;
 }
</style>