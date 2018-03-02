<template>
    <footer>
        <hr>
        <a href="https://github.com/RhombusRed/CS260Creative1" target="_blank">Github Repository</a>
     </footer>
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
  footer {
        text-align: center;
        position: absolute;
        margin-top: -47px;
        height: 47px;
        width: 100%;
        bottom: 0;  }

    footer hr {
        margin: 0;
        margin-bottom: 5px;
        height: 2px;
        border-width: 0;
        background-color: darkgray;  }

    footer a {
        text-decoration: none;
        color: white;  }

    footer a:hover {
        color: #333;  }
</style>