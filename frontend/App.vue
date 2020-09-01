<template>
  <div id="app">
    <google-map class="googleMap"></google-map>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .googleMap {
    height: 100%;
    width: 100%;
  }
  #app{
    height: 100%;
    width: 100%;
  }
  html,body {height:100%; margin:0; padding:0;}
  .gmnoprint, .gm-fullscreen-control{
    visibility: hidden;
  }
</style>
