
<template>
  <div class="seach-header" :style="setTop>=30 ? 'height:.5rem;z-index:10000': ''">
    <img src="../assets/logo.jpg" alt="" class="seach-header-logo">
    <input type="text">
    <img src="../assets/logo.jpg" alt="" class="seach-header-musicImg">
  </div>
</template>

<script>


export default {
  props:['offsetTop'],
  data() {
    return {
     setTop:''
    };
  },
  methods: {
    
  },
  mounted() {
   console.log(this.$props.offsetTop)
  },
  watch: {
    offsetTop(newVal,oldVal){
      this.setTop = newVal
    }
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
