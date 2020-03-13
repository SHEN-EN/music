
<template>
  <div class="seach-header">
    <img src="../assets/logo.jpg" alt="" class="seach-header-logo">
    <input type="text">
    <img src="../assets/logo.jpg" alt="" class="seach-header-musicImg">
  </div>
</template>

<script>


export default {
  data() {
    return {
     
    };
  },
  methods: {
    
  },
  mounted() {
   
  },
};
</script>

<style scoped lang='less'>
.seach-header{
    position: fixed;
    top: 0;
    background: #d34339;
    z-index: 1000;
    height: 1rem;
    width: 100%;
    .seach-header-logo{
        width: .2rem;
        position: absolute;
        top: 0;
        top: .15rem;
        left: .1rem;
        border-radius: 1rem;
        z-index: 1001;
    }  
    input{
        border-radius: .2rem;
        outline-style: none;
        border: none;
        position: absolute;
        top: 0.08rem;
        left: 0.4rem;
        width: 77%;
        padding-left: .1rem;
        height: .3rem;
        background: #dc4d46;
        color: #fff;
    }
    .seach-header-musicImg{
        width: .2rem;
        position: absolute;
        top: 0;
        top: .15rem;
        right: .08rem;
        border-radius: 1rem;
        z-index: 1001;
    }
}
</style>
