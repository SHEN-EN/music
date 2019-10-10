<template>
  <div class="home">
    <div class="header">
        <img src="../assets/gps.png" alt="" class="header_gps">
        <span class="header_local">深圳技师学院</span>
        <img src="../assets/select.png" alt="" class="header_select">
        <div class="header_to">由 龙岗区将军帽路店 送出
          <img src="../assets/select.png" alt="">
        </div>
        <img src="../assets/seach.png" alt="" class="header_seach">
    </div>
    <div class="banner"></div>
    <div class="list">
      <div class="list_item" v-for="(item,index) in 10" :key="index">
        <img src="../assets/list.png" alt="">
        <span>蔬菜类</span>
      </div>
    </div>
    <div class="shopList">
      <div class="shopList_top">
        <span class="shopList_top_title">每日优选</span>
        <span class="shopList_top_change">换一批</span>
        <img src="../assets/change.png" alt="">
      </div>
      <div class="shopList_content" v-for="(item,index) in 10" :key="index" ref="offHeight">
          <img src="../assets/shop.png" alt="" class="shopList_content_img">
          <div class="shopList_content_title">香印葡萄1盒*500克</div>
          <div class="shopList_content_Secondtitle">引进品种 以香气文明世界</div>
          <div class="shopList_content_discount one">限时特惠</div> <div class="shopList_content_discount second">两小时内送到</div>
          <div class="shopList_content_price">￥3.98</div><div class="shopList_content_discountPrice">￥5.80</div>
          <img src="../assets/tobuy.png" alt="" class="shopList_content_tobuy">
      </div>
    </div>
    <footer-curry></footer-curry>
  </div>
</template>
<script>
import footer from '../components/footer'
import axios from 'axios'
export default {
  components: {
    'footer-curry':footer
  },
  data () {
    return {
        list:[]
    }
  },
  methods:{
      offHeight(){
        let contentLegth = this.$refs.offHeight.length/2 // content 数量
        let height = this.$refs.offHeight[0].offsetHeight;
        console.log(contentLegth*height)
      },
      Mock(){
        axios.post('/api/login').then((result) => {
            console.log(result)
        }).catch((err) => {
          
        });
      }
  },
  created () {

  },
  mounted() {
    this.offHeight();
    this.Mock()
  },
}
</script>
<style scoped>
.home{
  background: #fff;
}
.header{
  height:1.45rem;
  width: 100%;
  background: #019248;
  border-radius: 0  0 .2rem .2rem;
  position: relative;
  z-index: 1;
}
.header .header_seach{
  height: .2rem;
  width: .2rem;
  position: absolute;
  top: .18rem;
  right: .1rem;
}
.header .header_gps{
    height: .15rem;
    width: .12rem;
    position: absolute;
    top: .2rem;
    left: .1rem;
}
.header .header_local{
  font-size: .15rem;
  position: absolute;
  color: #fff;
  top: .17rem;
  left: .3rem;

}
.header .header_select{
  position: absolute;
  top: .25rem;
  left: 34%;
  width: .14rem;
  height: .07rem;
}
.header .header_to{
  position: relative;
  font-size: .1rem;
  color: #fff;
  background: #34a86d;
  height: .2rem;
  border-radius: .1rem;
  width: 1.5rem;
  line-height: .2rem;
  top: .42rem;
  left: .1rem;
  text-align: center;
}
.header .header_to img{
  width:.075rem;
  height: .045rem;
  position: relative;
  top: -.01rem;
  left: .02rem;
}
.banner{
  height: 1.75rem;
  position: relative;
  z-index: 2;
  background: #007e3d;
  border-radius: .1rem;
  box-shadow: -.01rem .01rem .03rem #333333;
  top: -.7rem;
  width: 93%;
  transform: translate(3.5%)
}
.list{
  height: 1.97rem;
  background: #fff;
  margin-top: -.67rem;
}
.list img{
  width: .49rem;
  height: .5rem;
  position: absolute;
  top: 0;
  left: 0;
}
.list span{
  position: absolute;
  font-size: .1rem;
  top: .55rem;
  left: .1rem;

}
.list .list_item {
  width: .49rem;
  height: .64rem;
  position: relative;
  margin-left: .22rem;
  margin-top: .21rem;
  float: left;
}
.shopList{
  background: #f2f2f2;
}
.shopList .shopList_top{
  height: .47rem;
  background: #f2f2f2;
}
.shopList .shopList_top .shopList_top_title{
  font-size: .15rem;
  color: #282828;
  float: left;
  margin-top: .15rem;
  margin-left: .31rem;
  position: relative;
}
.shopList .shopList_top .shopList_top_title::before{
  content: '';
  position: absolute;
  height: .15rem;
  width: .02rem;
  background: #019248;
  top: .025rem;
  left: -.075rem;
}
.shopList .shopList_top .shopList_top_change{
  font-size: .09rem;
  color: #019248;
  float: right;
  margin-top: .21rem;
  margin-right: .19rem;
}
.shopList .shopList_top img{
  width: .08rem;
  height: .09rem;
  float: right;
  margin-top: .225rem;
  margin-right: .0505rem;
}
.shopList .shopList_content{
  width: 1.71rem;
  margin-left: .11rem;
  background: #fff;
  float: left;
  border-radius: .05rem;
  padding-bottom: .15rem;
  margin-top: .085rem;
}
.shopList :last-child{
  /* margin-bottom: .8rem; */
}
.shopList .shopList_content .shopList_content_img{
  width: 1.55rem; 
  margin: .1rem 0 0 .1rem;
}
.shopList .shopList_content .shopList_content_title{
  font-size: .15rem;
  color: #282828;
  font-weight: bolder;
  margin-left: .095rem;
  margin-top: -.18rem
}
.shopList .shopList_content  .shopList_content_Secondtitle{
  font-size: .12rem;
  color:#656565;
  margin-top: .02rem;
  margin-left: .095rem;
}
.shopList .shopList_content .shopList_content_discount{
  font-size: .1rem;
  float: left;
  margin-top: .05rem;
}
.one{
  border: .011rem solid #f05e25;
  color:#f05e25;
  margin-left: .1rem;
  width: .425rem;
  text-align: center;
}
.second{
  border: .011rem solid #989898;
  margin-left: .06rem;
  width: .675rem;
  text-align: center;
  color: #656565;
}
.shopList .shopList_content .shopList_content_price{
  font-size: .13rem;
  color: #f05e25;
  width: 24%;
  float: left;
  margin-left: .1rem;
  margin-top: .05rem;
}
.shopList .shopList_content .shopList_content_discountPrice{
  font-size: .1rem;
  color: #989898;
  float: left;
  margin-top: .07rem;
}
.shopList .shopList_content .shopList_content_tobuy{
    width: .185rem;
    float: right;
    margin-right: .11rem;
    height: .185rem;
    margin-top: .05rem
}
</style>
