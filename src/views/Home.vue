<template>
  <div class="home">
    <div class="header">
        <img src="../assets/gps.png" alt="" class="header_gps">
        <span class="header_local">深圳技师学院</span>
        <img src="../assets/select.png" alt="" class="header_select">
        <img src="../assets/more.png" alt="" class="header_more">
        <img src="../assets/code.png" alt="" class="header_code">
        <div class="header_seach">
            <img src="../assets/seach.png" alt="">
            <input type="text" class="header_seach_input" :placeholder="inputArr" >
            <span class="header_toseach">搜索</span>
        </div>
         <div class="banner" @click="toActivity">
          <nut-swiper
            direction="horizontal"
           :loop="true"
           :lazyLoad="true"
           :autoPlay="3000">
           <img src="../assets/banns.png" alt="">
        </nut-swiper>
         </div>
    </div>
    <div class="list">
      <div class="list_item" v-for="(item,index) in list" :key="index" v-if="index<5">
        <img :src="item.img" alt="">
        <span>{{item.title}}</span>
      </div>
    </div>
    <div class="advertisement">
        
    </div>
    <div class="recommend_title">
        <span class="recommend_today">今日推荐</span>
        <span class="recommend_more">查看更多</span>
    </div>
    <div class="recommend">
        <div class="recommend_content"  v-for="(item,index) in todayList" :key="index">
            <img :src="item.img" alt="" class="recommend_img">
            <div class="recommend_title">{{item.title}}</div>
        </div>
    </div>
    <div class="shopList" v-masonry transition-duration="0.3s" item-selector=".item">
      <div class="shopList_top">
        <div :class="[{title_bottoom:index==tabLine},'shopList_top_title']" v-for="(item,index) in tabList" :key="index" @click="changeTab(index,item.type)" ref="tab">{{item.title}}</div>
      </div>
        <div class="shopList_content item"  v-for="(item,index) in shopList" :key="index" ref="nodeList" v-masonry-tile :style="index<2?'margin-top:.65rem':''">
          <img :src="item.img" alt="" class="shopList_content_img">
          <div class="shopList_content_title">{{item.title}}</div>
          <div class="shopList_content_Secondtitle">{{item.secondTitle}}</div>
          <div class="shopList_content_discount one">限时特惠</div> <div class="shopList_content_discount second">两小时内送到</div>
          <div class="shopList_content_price">{{item.price|priceFilter}}</div><div class="shopList_content_discountPrice">{{item.orderPrice|priceFilter}}</div>
          <img src="../assets/tobuy.png" alt="" class="shopList_content_tobuy">
      </div>
    </div>
    <div class="bottom-tips" v-show="bottom">
        <span class="tips-txt">哎呀，这里是底部了啦</span>
    </div>
    <nut-backtop :distance="400" :bottom="156.5" :right="8"></nut-backtop>
    <footer-curry></footer-curry>
  </div>
</template>
<script>
import footer from '../components/footer';
import {priceFilter} from '../fillter/fillter'
export default {
  components: {
    'footer-curry':footer
  },
  data () {
    return {
        list:[], //商品分类列表
        shopList:'', //商品列表
        pageNo:0,//页码
        inputArr:'新鲜娃娃菜',
        tabLine:0,
        todayList:[], //今日商品推荐
        tabList:[
          {
            "type":'',
            title:'精选'
          },
          {
            'type':100,
            'title':'饮品'
          },
          {
            "type":101,
            "title":"水果"
          },
          {
            "type":102,
            "title":'零食'
          },
          {
            "type":103,
            "title":"蛋肉"
          },
          {
            "type":104,
            "title":"蔬菜"
          },
          {
            "type":105,
            "title":"海鲜"
          }
        ],//选项卡list
        type:'',
        bottom:false
    }
  },
  methods:{
      mockList(){ //商品分类列表
        let params={
           storeId:'1100040001'
        }
        this.axios.post('/mock/selectTopCatalogWithoutToken.do',params).then((result) => { //mock数据
              this.list=result.data.list;
        }).catch((err) => {
          
        });
      },
      mockShopList(loading,type){  //精选商品列表
        let params={
          pageNo:this.pageNo,
          type:type==undefined?"":type
        }
        this.axios.post('/api/shopList.do',params).then((result) => {
          if (result.data.resultCode==200) {
              if (loading) { //下拉加载 
                this.loading.hide();
                if (result.data.query.length==0) {
                  window.removeEventListener('scroll',this.loadingMore)
                  this.$toast.text('数据加载完毕');
                  this.bottom=true
                }else{
                  this.shopList.push(...result.data.query)
                }
              }else{ //切换选项卡加载 &&初始加载
                this.shopList=result.data.query;
              }
              this.$nextTick(()=>{
                this.$redrawVueMasonry();
              })
          }

        }).catch((err) => {
          
        });
      },
      loadingMore(){
         let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          let clientHeight = document.documentElement.clientHeight;
          let scrollHeight = document.documentElement.scrollHeight;
          if (scrollTop + clientHeight >= scrollHeight) { // 如果滚动到接近底部，自动加载下一页
              this.loading = this.$toast.loading();
              this.pageNo=this.pageNo+6
              this.mockShopList(true,this.type!=''?this.type:'')    
            }
      },
      changeInputValue(){
          this.inputArr=this.inputArr=='新鲜娃娃菜'?'脆脆鲨饼干巧克力味':'新鲜娃娃菜';
      },
      changeTab(index,type){ //切换选项卡
          this.bottom=false
          this.tabLine=index;
          this.pageNo=0; //页码初始化
          this.shopList='' ; //清空LIST
          this.type=type;//获取type传后端
          window.addEventListener('scroll',this.loadingMore)
          this.mockShopList(false,type)
      },
      todayLoading(){  //数据mock
        let params={
          createTime:+new Date()
        }
        this.axios.post('/api/recommend.do',params).then((result) => {
            this.todayList.push(...result.data.list);
        }).catch((err) => {
          
        });
      },
      toActivity(){
        this.$router.push('/activity')
      }
  },
  created () {
    this.mockList();//mock数据加载
    this.mockShopList(); //真实数据加载
    this.todayLoading(); //mock数据加载
    setInterval(() => {
      this.changeInputValue();
    }, 3000);
  },
  mounted() {
    window.addEventListener('scroll',this.loadingMore)
  },
  beforeDestroy(){
    window.removeEventListener('scroll',this.loadingMore)
  },
}
</script>
<style>

.nut-backtop-main{
  width: .35rem;
  height: .35rem;
  background: #22d158 url('../assets/top.png') no-repeat center;
  background-size: 20px 20px;
}
.vue-skeleton-column{
  background: #fff;
  margin-bottom: .5rem;
}
.nut-hor-scroll{
  height: 94%;
  width: 100%;
}

.nut-swiper{
    position: relative;
    overflow: hidden;
    height: 176px;
    border-radius: .1rem;
    width: 101%;
}
.nut-swiper.horizontal .nut-swiper-pagination{
  bottom: -.1rem
}
</style>
<style scoped>
.home{
  background: #fff;
  /* font-family: PingFangSC; */
}
.header{
  width: 100%;
}
.header .header_gps{
    width: .12rem;
    height: .15rem;
    float: left;
    margin-top: .24rem;
    margin-left: .1rem
}
.header .header_local{
  font-size: .16rem;
  float: left;
  margin-top: .2rem;
  margin-left: .04rem;
}
.header .header_select{
  width: .12rem;
  height: .06rem;
  float: left;
  margin-top: .3rem;
  margin-left: .08rem;
}
.header .header_code{
    float: right;
    margin-right: .2rem;
    width: .18rem;
    height: .18rem;
    margin-top: .23rem;
}
.header .header_more{
    float: right;
    margin-right: .1rem;
    width: .225rem;
    height: .06rem;
    margin-top: .28rem;
}
.header .header_seach{
  width: 3.25rem;
  height: .285rem;
  background: #f2f2f2;
  position: relative;
  top: .55rem;
  left: .1rem;
  border-radius: .2rem
}
.header .header_seach img{
    width: .15rem;
    height: .15rem;
    position: absolute;
    top: .07rem;
    left: .17rem;

}
.header .header_toseach{
  font-size: .14rem;
  color: #656565;
  position: absolute;
  right: -.31rem;
  top: .05rem;
}
.header .header_seach .header_seach_input{
    position: absolute;
    border-radius: .2rem;
    outline: none;
    border: none;
    height:.285rem;
    width: 2.83rem;
    left: .42rem;
    background: #f2f2f2;
    color: #989898;
    font-size: .12rem
}
.banner{
  /* box-shadow:0px .02rem .1rem rgba(0, 0, 0, .2); */
  transform: translate(2.5%);
  width: 95%;
  margin-top: .75rem;
}
.banner img{
  height: 1.85rem;
  border-radius: .1rem;
  width: 100%;
  transform: scale(.99)
}
.list{
  /* height: 1.97rem; */
  background: #fff;
  overflow: hidden;
  padding-bottom: .26rem;
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
  left: .04rem;
  display: inline-block;
  width: .41rem;
  text-align: center;
}
.list .list_item {
  width: .49rem;
  height: .64rem;
  position: relative;
  margin-left: .22rem;
  margin-top: .21rem;
  float: left;
}
.advertisement{
  width: 100%;
  height:.98rem;
  background: #c9f2f0;
  background: url('../assets/banner.png') no-repeat;
  background-size:100%;
}
.recommend{
    height: 1.6rem;
    width: 100%;
    display: -webkit-box;
    overflow-x: scroll;
    overflow-y: hidden;
}
.recommend_title{
  overflow: hidden;
}
.recommend_title .recommend_today{
    font-size: .13rem;
    color: #000;
    font-weight: bolder;
    float: left;
    margin-top: .27rem;
    margin-left: .1rem;
}
.recommend_title .recommend_more{
  font-size: .09rem;
  color:#282828;
  float: right;
  margin-top: .3rem;
  margin-right: .11rem;
}
.recommend .recommend_content .recommend_img{
  width: 1rem;
  height: 1rem;
  margin-top: .1rem;
}

.recommend .recommend_content .recommend_title{
  font-size: .1rem;
  color: #282828;
  width: .7rem;
  text-align: center;
  margin-top: -.18rem;
  margin-left: .15rem;
} 
.shopList{
  background: #f2f2f2;
}
.shopList .shopList_top{
  height: .47rem;
  background: #fff;
  display: -webkit-box;
  overflow-y: scroll;
}
.shopList .shopList_top .shopList_top_title{
  font-size: .13rem;
  color: #282828;
  margin: .15rem .3rem 0 .1rem;
  position: relative;
  overflow: hidden;
  width:auto;
  line-height: .19rem;
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
  height: .08rem;
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
  margin-top: .1rem;
}
 .shopList .shopList_content:last-of-type{
  margin-bottom: .8rem;
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
  overflow:hidden; 
  text-overflow:ellipsis;
  white-space:nowrap;
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
  float: left;
  margin-left: .1rem;
  margin-top: .05rem;
}
.shopList .shopList_content .shopList_content_discountPrice{
  font-size: .1rem;
  color: #989898;
  float: left;
  margin-top: .09rem;
  margin-left: .06rem;
}
.shopList .shopList_content .shopList_content_tobuy{
    width: .185rem;
    float: right;
    margin-right: .11rem;
    height: .185rem;
    margin-top: .05rem
}
.shopList .shopList_top .title_bottoom{
    width: .43rem;
    height: .2rem;
    background: #17b447;
    overflow: hidden;
    color: #fff;
    text-align: center;
    transition: all .5s
}
.bottom-tips{
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    color: #bfbaba;
    font-size: 12px;
}
.bottom-tips .tips-txt{
  position: relative;
  bottom: .6rem;
}
.bottom-tips .tips-txt::before{
    content: "";
    height: 1px;
    width: 20px;
    background-color: #bfbaba;
    position: absolute;
    top: 50%;
    margin-top: -.5px;
    left: -.25rem;
}
.bottom-tips .tips-txt::after{
    content: "";
    height: 1px;
    width: 20px;
    background-color: #bfbaba;
    position: absolute;
    top: 50%;
    margin-top: -.5px;
    right: -.25rem;
}
</style>
