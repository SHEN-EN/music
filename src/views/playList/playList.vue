<template>
  <section>
    <div class="play-wrap-head">
      <router-link to="/">
        <i class="iconfont icon-back"></i>
      </router-link>
    </div>
    <section class="play-list-detail-top" ref="playListDesc">
      <div class="img-wrap">
        <img  :src="list.backgroundCoverUrl" class="cover-img">
      </div>
    </section>
    <section class="play-list-detail-bottom">
      <div class="play-list-control">
        <div class="play-all">
          <i class="iconfont icon-bofang"></i>
          <span>播放全部（{{list.playCount}}共首）</span>
        </div>
        <div class="star-me">+收藏 {{list.commentCount}}</div>
      </div>
    <song-list ref="infList" @getList="getList"></song-list>
    </section>
  </section>
</template>

<script>
import songList from '../../components/songList'
export default {
    components:{
        songList
    },
  data() {
    return {
        list:''
    };
  },
  methods: {
      getList(val){
          this.list = val
      }
  },
  created() {

  },
  computed: {
 
  },
  mounted() {
    
  },
  watch: {

     
  },
};
</script>

<style scoped lang='less'>
 .play-wrap-head{
      i{
        position: absolute;
        color: #fff;
        font-size: .24rem;
        top: .12rem;
        left: .1rem;
        opacity: .5;
      }
      div{
          font-size: .18rem;
          color:#fff;
      }
      height: .5rem;
      width: 100%;
      position: fixed;
      z-index: 2;
  }
img {
  width: 3.75rem;
  height: 3.75rem;
}

.play-list-detail-top {
  position: relative;
  .img-wrap {
 
    overflow: hidden;
    .cover-img {
      width: 100%;
      margin-top: -0.5rem; // 调整图片的位置
    }
  }
  .play-list-title {
    position: absolute;
    bottom: 18%;
    left: 10%;
    font-size: 0.3rem;
    color: #fff;
    font-size: .18rem;
  }
  .play-list-update-time {
    position: absolute;
    bottom: 10%;
    left: 10%;
    color: #fff;
    font-size: 0.12rem;
  }
}
.play-list-detail-bottom {
  position: relative;
  z-index: 2;
  margin-top: -0.1rem;
  .play-list-control {
    display: flex;
    background: #fff;
    height: 0.4rem;
    border-radius: 0.1rem 0.1rem 0 0;
    border-bottom: 1px solid #e4e4e4;
    overflow: hidden;
    .play-all {
      display: flex;
      align-items: center; // 垂直居中
      flex: 3; // 设置宽度比例
      font-size: 0.16rem;
      color: #2e3030;
      .iconfont {
        font-size: 0.22rem;
        margin: 0 0.12rem 0 0.12rem;
      }
    }
    .star-me {
      display: flex;
      align-items: center; // 垂直居中
      justify-content: space-around; // 水平居中
      flex: 2; // 设置宽度比例
      background: #d44439;
      color: #f1f1f1;
      font-size: 0.16rem;
    }
  }
}
</style>
