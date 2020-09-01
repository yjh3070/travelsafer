<template>
  <div class="">
    <div class="gnb-box">
        <img v-b-toggle.collapse-2 class="gnb hamberger" src="../assets/hamberger.svg" alt="">
        <span id="collapse-1">
        <img class="gnb board" src="../assets/board.svg" alt="">
        <img class="gnb" src="../assets/shop.svg" alt="">
        <img class="gnb" src="../assets/profile.svg" alt="">
        </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  }
}
</script>

<style>
  .gnb-box{
    margin-top: 20px;
    width: 50px;
    display: block;
    padding: 11px;
    background-color: #ffffff !important;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 30%) !important;
    border: none !important;
    border-radius: 15px !important;
  }
  .gnb{
    text-align: center;
    display: block;
    width: 28px;
    margin: 13px 0px;
  }
  .hamberger{
    width: 20px;
    margin-left: 4px;
    margin-top: 10px;
    }
    .board{
      width: 33px;
    margin-left: -3px;}
</style>
