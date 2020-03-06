<template>
  <section class="toastWrap">
    <div class="toast" v-bind:class="[visible?'fade-in':'fade-out']">
      <p>{{message}}</p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'toast',
    data(){
      return {
        visible:true,
        message:''
      }
    }
  }
</script>

<style lang='scss'>
  $fontSize: 16px !default;
  @function pxToRem($px) {
    @return $px / $fontSize * 1rem;
  }
  @function pxToEm($px) {
    @return $px / $fontSize * 1em;
  }
  @keyframes fade-in {
    0%   { opacity: 0; transform: scale(0.7);}
    100% { opacity: 1; transform: scale(1);}
  }
  @keyframes fade-out {
    0%   { opacity: 1; transform: scale(1);}
    100% { opacity: 0; transform: scale(0.7);}
  }
  .toastWrap{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 5000!important;
    display: flex;
    justify-content: center;
    align-items: center;
    .fade-in {
      animation-name: fade-in;
      animation-duration: 0.3s;
      animation-fill-mode: both;
    }
    .fade-out {
      animation-name: fade-out;
      animation-duration: 0.3s;
      animation-fill-mode: both;
    }
    .toast{
      width: pxToRem(160px);
      height: pxToRem(90px);
      position: relative;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 13px;
      overflow: hidden;
      line-height: pxToRem(90px);
      text-align: center;
      .icon{
        font-size: pxToRem(20px);
        color: #fff;
      }
      p{
        font-size: pxToRem(15px);
        color: #fff;
      }
    }
  }
</style>
