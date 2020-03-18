<template>
  <ul class="track-list">
    <li class="track-item" v-for="(item, index) in playlist" :key="index">
      <router-link
        :to="{path:'/songControl',query:{'title':item.name,'songName':item.ar[0].name,'tracksId':tracksId[index].id,'backgroundCoverUrl':item.al.picUrl}}"
        class="link-to-play-control"
      >
        <div class="track-rank">{{index+1}}</div>
        <div class="track-info">
          <p class="track-title ellipsis">{{item.name}}</p>
          <p class="track-desc ellipsis">{{item.ar[0].name}} - {{item.name}}</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>

import {playlist} from '../api/api'
export default {
  data() {
    return {
      playlist:'',
      list:{
      
      },
      tracksId:''
    }
  },
  methods: {
    getListDetail(val){
          playlist(val).then(res=>{
            if (res.data.code == 200 ) {
              this.playlist = res.data.playlist.tracks;
              this.tracksId = res.data.playlist.trackIds;
              this.list.commentCount=res.data.playlist.commentCount;
              this.list.backgroundCoverUrl=res.data.playlist.coverImgUrl;
              this.list.playCount=res.data.playlist.tracks.length;
              this.$emit('getList',this.list);
            }
          }).catch(err=>{
            console.log(err)
          })
      }
  },
  created() {
    console.log(this.$route.query.id)
    this.getListDetail(this.$route.query.id)
  },
  watch: {
    list:{
      handler:function(newVal,oldVal){
        console.log(newVal)
      },
      deep:true
    }
  },
};
</script>

<style scoped lang='less'>
.track-list {
  margin-bottom: 1rem;
  margin: 0;
  .track-item {
    .link-to-play-control {
      display: flex;
      align-items: center;
      height: 0.6rem;
      border-bottom: 1px solid #e4e4e4;
      .track-rank {
        text-align: center;
        width: 16%;
        font-size: 0.18rem;
      }
      .track-info {
        width: 84%;
        color: #000;
        .track-title {
          font-size: 0.16rem;
        }
        .track-desc {
          font-size: 0.14rem;
          color: #9e9e9e;
          margin-top: -.1rem;
        }
      }
    }
  }
}
</style>
