<template>
  <div id="app">
    <search class="search"/>
    <login class="login"/>
    <menubar class="menubar"/>
    <google-map class="googleMap"></google-map>
    <div class="func">
      백엔드 기능 (post, modify 기능은 login 후 사용 가능)
      <a href="/login">login</a>
      <a href="/signup">signup</a>
      <a href="/post">post</a>
      <a href="/board">board</a>
      <a href="/modify">modify</a>
    </div>

  </div>
</template>

<script>
import login from './components/login'
import menubar from './components/menubar'
import search from './components/search'

export default {
  name: 'app',
  components: {
    login,
    menubar,
    search
  }
}
</script>

<style>
  .login{
    position: absolute;
    z-index: 2;
    top: 7vh;
    right: 3vw;
  }
  .search, .menubar{
    position: absolute;
    z-index: 2;
  }
  .search{
    top: 8vh;
    left: 3vw;
  }
  .menubar{
    top: 18vh;
    left: 3vw;
  }
  .googleMap {
    z-index: 1;
    height: 95%;
    width: 100%;
  }
  .func{
    height: 5%;
  }
  #app{
    height: 100%;
    width: 100%;
  }
  html,body {height:100%; margin:0; padding:0;}
  .gmnoprint, .gm-fullscreen-control{
    visibility: hidden;
  }
  #search, #menbar{
    float:left;
  }
  #login{
    float:right;
  }
</style>
