<template>
  <section class="page-wrap" ref="pageWrap">
    <header class="play-control-header">
      <div class="song-info">
        <h1 class="song-name ellipsis">{{$route.query.title}}</h1>
        <p class="singers ellipsis">{{$route.query.songName}}</p>
      </div>
    </header>
    <section class="main" ref="main">
      <div class="cover-img-box" @click="toDisplay" ref="cover">
        <div :class="['img-wrap',stop.play?'rotate':'']" ref="rotateCD">
          <img alt class="cover-img" :src="$route.query.backgroundCoverUrl">
        </div>
      </div>
      <div class="song" ref="song">
        <p v-for="(item,index) in Songlyric" :key="index">{{item.txt}}</p>
      </div> 
    </section>
    <section class="play-control-footer">
      <div class="progress-wrap">
        <span class="has-played-time">{{5}}</span>
        <span class="total-progress">
          <span class="has-played-progress" ref="progress"></span>
          <audio :src="audioSrc" autoplay></audio>
        </span>
        <span class="total-time">{{4}}</span>
      </div>
      <div class="control-panel">
        <button class="star-me-btn" >
          <i class="iconfont icon-like"></i>
        </button>
        <button class="play-last-song-btn">
          <i class="iconfont icon-previous"></i>
        </button>
        <button class="play-stop-btn" @click="stopSong">
          <i :class="['iconfont',stop.icon]"></i>
        </button>
        <button class="play-next-song-btn">
          <i class="iconfont icon-next"></i>
        </button>
        <button class="other-operation-btn">
          <i class="iconfont icon-ziyuan"></i>
        </button>
      </div>
    </section>
  </section>
</template>

<script>
import Lyric from 'lyric-parser'
import {mapActions} from 'vuex'
export default {
  data() {
    return {
        audioSrc:'',
        stop:{
            icon:'icon-bofang1',
            play:true
        },
        Songlyric:'',
    };
  },
  computed: {
    
  },
  components: {
    
  },
  methods: {
      ...mapActions({
          'getSongUrl':'getSongUrl',
          'getSonglyric' : 'getSonglyric'
      }),
      setHeight(){
          this.$refs.pageWrap.style.height = `${document.documentElement.clientHeight}px`
      },
    async getSong(tracksId){
          let params={
              id:tracksId
          }
        let result = await  this.getSongUrl(params);
        this.audioSrc =  result.data.data[0].url;
        this.getSonglyric(result.data.data[0].id).then((res) => {
            this.Songlyric= new Lyric(res.data.lrc.lyric).lines;  
        }).catch((err) => {
            console.log(err)
        });
      },
      stopSong(){
          this.$refs.rotateCD.style.transform=getComputedStyle(this.$refs.rotateCD).getPropertyValue("transform")
          if (this.stop.icon == 'icon-bofang1') {
              this.stop.icon = 'icon-bofang2'
              this.stop.play = false
          }else{
              this.stop.icon = 'icon-bofang1'
              this.stop.play = true
          }
      },
      toDisplay(){
        this.$refs.cover.style.zIndex= '-1';
        this.$refs.main.style.overflowY = 'scroll';
        this.$refs.song.style.display = 'block';
      }
  },
  watch: {
   
  },
  filters: {
   
  },
  created() {
      this.getSong(this.$route.query.tracksId)
  },
  mounted() {
    this.setHeight() // 重写高度
  },
};
</script>

<style scoped lang='less'>
// lazy-load样式
img[lazy="loading"] {
  width: 100%;
  height: 100%;
}

@keyframes infiniteRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: infiniteRotate 10s infinite linear;
}

.page-wrap {
  background: rgba(0, 0, 0, 0.3);
  .play-control-header {
    position: relative;
    height: 10%;
    .back-btn {
      color: #f1f1f1;
      width: 0.5rem;
      height: 0.5rem;
      text-align: center;
      position: absolute;
      left: 0.01rem;
      top: 20%;
    }
    .song-info {
      .song-name {
        color: #f1f1f1;
        font-size: 0.2rem;
        padding: 0.1rem 0 0;
        text-align: center;
        margin:0;
      }
      .singers {
        text-align: center;
        color: lightgray;
        font-size: 0.16rem;
      }
    }
  }
  .main {
    height: 72%;
    box-sizing: border-box;
    font-size: .18rem;
    z-index: 2;
    .cover-img-box {
      width: 80vw;
      height: 80vw;
      background-color: #2e3030;
      border-radius: 50%;
      overflow: hidden;
      transition: all .5s;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      .img-wrap {
        width: 70%;
        height: 70%; // 设置高度以让子元素宽高相同
        margin: 15% auto 0;
        border-radius: 50%;
        overflow: hidden;
        .cover-img {
          width: 100%;
          height: 100%; // 不设置高在某些情况下会有BUG
        }
      }
    }
    .song{
      text-align: center;
      margin-top: .5rem;
      display: none;
      color:#fff;
    }
  }
  // 固定定位应该有问题，那要如何设置呢？
  .play-control-footer {
    height: 18%;
    .progress-wrap {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 0.1rem;
      font-size: 0.16rem;
      .has-played-time {
        color: #f1f1f1;
      }
      .total-time {
        color: lightgray;
      }
      .total-progress {
        width: 70%;
        height: 0.03rem;
        background: lightgray;
        .has-played-progress {
          display: block;
          width: 0;
          height: 100%;
          background-color: #d44439;
        }
      }
    }
    .control-panel {
      display: flex;
      justify-content: space-around;
      button{
          outline-style: none;
          background-color: #b2b2b2;
            border-style: hidden;
      }
      > * {
        margin: 0.2rem 0;
        .iconfont {
          font-size: 0.3rem;
          color: #ffffff;
        }
      }
      .star-me-btn {
        .iconfont.red {
          color: red;
        }
      }
      .play-stop-btn {
        .iconfont {
          font-size: 0.5rem;
        }
      }
    }
  }
}
</style>
