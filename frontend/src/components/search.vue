<template>
  <div class="search-box">
      <img src="../assets/flag.svg" alt="">
      <input class="search-text" type="text">
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .search-box{
        border-radius: 50px;
        background: #ffffff;
        padding: 10px 15px;
        box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 30%);
        display: inline-block;
        width: 250px;
    }
    input.search-text:focus{
        border: none !important;
        box-shadow: none !important;
    }
    img{
        width: 17px;
        margin-right: 8px;
    }
</style>
