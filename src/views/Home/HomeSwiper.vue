
<template>
  <div>
    <div class="swiper">
    <v-touch  v-on:swipeleft="swiperleft" v-on:swiperight="swiperright">
    <div class="swiper-box" ref="swiper" :style="`width:${swiperMap.length*100}%`">
      <router-link :to="item.url || '#'" v-for="(item,index) in swiperMap" :key="index">
        <img :src="item.imageUrl" alt="">
      </router-link>
    </div>
      <div class="swiper-item">
        <span v-for="(item,index) in swiperMap" :key="index" :style="nowLeft==index*-98?'background: #cb3c35;opacity:1':''"></span>
      </div>
    </v-touch>
    </div>

  </div>
</template>

<script>
import {homeBanner} from '../../api/api'

export default {
  data() {
    return {
      swiperMap:'',
      nowLeft:0, //实时更新left值
    };
  },
  methods: {
    banner(){
      let params={
        type:2
      }
      homeBanner(params).then((res)=>{
        if(res.data.code == 200){
            this.swiperMap=res.data.banners;
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    scrollBanner(){
      let  nowLeft = this.$refs.swiper.style.left.split('%')[0] || 0  //分割百分比取整数 typeof == arr
      this.nowLeft = nowLeft-98 // 存储left值的时候偏差98因为第一次的小圆点位置是-98%
      if( nowLeft <= 0 && nowLeft > -98*(this.swiperMap.length-1)){ 
        this.$refs.swiper.style.left = `${nowLeft-98}%`
      }else if(nowLeft <= -98*(this.swiperMap.length-1)){
        this.$refs.swiper.style.left = "0%"
      }
    },
    swiperleft(){
      if(this.nowLeft<=0 && this.nowLeft > -98*(this.swiperMap.length-1)){
         this.$refs.swiper.style.left = `${this.nowLeft-98}%`;
         this.nowLeft = this.$refs.swiper.style.left
      }else if(this.nowLeft <= -98*(this.swiperMap.length-1)){
        this.$refs.swiper.style.left = "0%"
      }
    },
    swiperright(){

    }
  },
  mounted() {
    this.banner();
    setInterval(() => {
      this.scrollBanner();
    }, 3500);
  },
};
</script>

<style scoped lang='less'>
.swiper{
    position: relative;
    overflow: hidden;
    top: .55rem;
    z-index: 9999;
    height: 1.5rem;
    width: 100%;
  .swiper-box{
    position: absolute;
    margin-left: .18rem;
    transition: all .5s;
    left: 0;
    img{
      width: 10%;
      border-radius: 0.1rem;
      margin-right: .3rem;
      height: 1.5rem;
    }
  }
  .swiper-item{
    width: 100%;
    height: 10px;
    position: absolute;
    bottom: .05rem;
    z-index: 9999;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      display:block;
      width: .1rem;
      height: .1rem;
      background: #a6b8a2;
      border-radius: 1rem;
      margin-left: .05rem;
      float: left;
      opacity: .4;
    }
  }
}
</style>
