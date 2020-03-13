
<template>
  <div class="horizon-line left-right-padding-box">
    <h1 class="recom-songlist-header">推荐歌单</h1>
    <ul class="songlist-group">
      <li v-for="(item, index) in musicList" :key="index" class="songlist-item" v-if="index<3">
        <router-link to="">
          <div class="img-wrap">
            <img  alt class="songlist-cover" :src="item.picUrl">
            <div class="play-count-box">
              <i class="iconfont icon-bofang"></i>
              {{(item.playCount/10000).toFixed(2)}}万
            </div>
          </div>
          <p class="songlist-title">{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import {homeRecommend} from '../../api/api'
export default {
  data() {
    return {
      musicList:''
    };
  },
  methods: {
      getList(){
          homeRecommend().then((res)=>{
              if(res.data.code == 200 ){
                  this.musicList = res.data.result
              }
          }).catch((err)=>{
              console.log(err)
          })
      }
  },
  mounted() {
    this.getList()
  },
};
</script>

<style scoped lang='less'>
img[lazy="loading"] {
  width: 1rem;
  height: 1rem;
}

.recom-songlist-header {
  font-size: .14rem;
  padding-left: 0.03rem;
  margin: 0.1rem 0 0 0;
  font-weight: 400;
}

.songlist-group {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .songlist-item {
    position: relative;
    width: 30%;
    margin-top: .05rem;
    margin-left:.05rem;
    .img-wrap {
      border-radius: 0.02rem;
      overflow: hidden;
      .songlist-cover {
        width: 100%;
        height: 100%;
        border-radius: .1rem;
      }
    }
    .play-count-box {
      position: absolute;
      top: 0.03rem;
      right: 0.03rem;
      color: #f1f1f1;
      font-size: .16rem;
    }
    .songlist-title {
      font-size: .12rem;
      line-height: .2rem;
      height: .4rem;
      overflow: hidden;
      color:#000;
      margin-top:-.15rem;
    }
  }
}
</style>
