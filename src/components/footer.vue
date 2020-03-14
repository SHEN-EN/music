
<template>
  <div>
    <div class="footer">
      <router-link to="/">
        <div>
          <i class="iconfont icon-Music"></i>
          <span>发现</span>
        </div>
      </router-link>
      <router-link to="/sp">
        <div>
          <i class="iconfont icon-shipin"></i>
          <span>视频</span>

        </div>
      </router-link>
      <router-link to="/my">
        <div>
          <i class="iconfont icon-musics"></i>
          <span>我的</span>

        </div>
      </router-link>
      <router-link to="/yum">
        <div>
          <i class="iconfont icon-myfill"></i>
          <span>云村</span>

        </div>
      </router-link>
       <router-link to="/zh">
        <div>
          <i class="iconfont icon-tubiao_zhanghao"></i>
          <span>账号</span>

        </div>
      </router-link>
    </div>
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
.footer{
  width: 100%;
  position: fixed;
  height: .5rem;
  background: #e9e7e8;
  bottom: 0;
  .router-link-active{
    color:#df463d;
  }
  div{
    width: 20%;
    height: .5rem;
    float: left;
    display: flex;
    justify-content: center;
    i{
      font-size: .24rem;
      position: absolute;
      margin-top: .05rem;
    }
    span{
      font-size: .10rem;
      display: flex;
      align-items: flex-end;
    }
  }
}
</style>
