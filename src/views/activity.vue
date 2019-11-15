<template>
    <div>
        <div class="activity">
            <img src="../assets/back.png" alt="" class="activity_back" @click="goBack">
            <div class="activity_title">嗨翻双十一</div>
            <img src="../assets/more.png" alt="" class="activity_more">
            <img src="../assets/shopCar.png" alt="" class="activity_shop">
        </div>
        <div class="activity_banner">
    
        </div>
        <div class="activity_content">
            <div class="activity_content_coupon">
                <div class="activity_content_coupon_type">
                    <span class="activity_content_coupon_type_money">50</span>
                    <span class="activity_content_coupon_type_rule"><span>元优惠卷</span><br>满80元使用</span>
                    <img src="../assets/to_get.png" alt="" @click="toget">
                </div>
                 <div class="activity_content_coupon_type">
                    <span class="activity_content_coupon_type_money">70</span>
                    <span class="activity_content_coupon_type_rule"><span>元优惠卷</span><br>满99元使用</span>
                    <img src="../assets/to_get.png" alt="" @click="toget">
                </div>
                 <div class="activity_content_coupon_type second">
                    <span class="activity_content_coupon_type_money">60</span>
                    <span class="activity_content_coupon_type_rule"><span>元优惠卷</span><br>满85元使用</span>
                    <img src="../assets/to_get.png" alt="" @click="toget">
                </div>
                 <div class="activity_content_coupon_type second">
                    <span class="activity_content_coupon_type_money">40</span>
                    <span class="activity_content_coupon_type_rule"><span>元优惠卷</span><br>满69元使用</span>
                    <img src="../assets/to_get.png" alt="" @click="toget">
                </div>
            </div>
            <div class="activity_content_gps" :class="[gpsFlag?'gpsTop':'']">
                    <img src="../assets/active_gps.png" alt="" class="activity_content_gps_img" ref="gps" :style="gpsFlag?'top:30%':''">
                    <div v-for="(item,index) in gps" :key="index" @click="go(index)" :class="[(select==index)?gpsClassChange:'']" :style="gpsFlag?'margin-top:.1rem':''">{{item}}</div>
            </div>
            <div class="activity_content_hot">
                <div class="activity_content_hot_title">
                    <img src="../assets/hot.png" alt="">
                </div>
                <div class="activity_content_hot_content">
                    
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/huotui.png" alt="" class="activity_content_hot_content_shop">
                    <div class="activity_content_hot_content_name">双汇火腿肠 泡面搭档 肌肉火腿肠</div>
                    <div class="activity_content_hot_content_secondName">休闲好吃</div>
                    <div class="activity_content_hot_content_price">￥8.50</div>
                    <div class="activity_content_hot_content_Oldprice">￥12.00</div>
                    <div class="activity_content_hot_content_tobuy">立即抢购</div>
                </div>
                <div class="activity_content_hot_content" style="float:right">
                   
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/mian.png" alt="" class="activity_content_hot_content_shopLeft">
                    <div class="activity_content_hot_content_nameLeft">新加坡进口KOKA原味捞面 方便面85g*5</div>
                    <div class="activity_content_hot_content_secondNameLeft">泡面袋装即食拉面速食干拌面</div>
                    <div class="activity_content_hot_content_priceLeft">￥14.8</div>
                    <div class="activity_content_hot_content_OldpriceLeft">￥20.80</div>
                    <div class="activity_content_hot_content_tobuyLeft">立即抢购</div>
                </div>
                 <div class="activity_content_hot_content" style="float:left">
                   
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/niu.png" alt="" class="activity_content_hot_content_shop">
                    <div class="activity_content_hot_content_name">精选牛肉片150g</div>
                    <div class="activity_content_hot_content_secondName">源自草饲牛的牛腿肉 嫩又香甜</div>
                    <div class="activity_content_hot_content_price">￥38.8</div>
                    <div class="activity_content_hot_content_Oldprice">￥42.00</div>
                    <div class="activity_content_hot_content_tobuy">立即抢购</div>
                </div>
            </div>

            <div class="activity_content_recommend" ref="hot">
                <div class="activity_content_recommend_title">
                    <img src="../assets/recommend.png" alt="">                    
                </div>
                <div class="activity_content_recommend_content">
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/ccc.png" alt="">
                    <div class="activity_content_recommend_content_title">蒙牛纯甄常温酸牛奶礼盒 200g*24盒</div>
                    <div class="activity_content_recommend_content_price">特惠价￥<span>49.9</span></div>
                    <div class="activity_content_recommend_content_tobuy">立即抢购</div>
                </div>
                <div class="activity_content_recommend_content">
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/s.png" alt="">
                    <div class="activity_content_recommend_content_title">好欢螺螺蛳粉柳州特产美 食方便面速食300g*5袋</div>
                    <div class="activity_content_recommend_content_price">特惠价￥<span>18.8</span></div>
                    <div class="activity_content_recommend_content_tobuy">立即抢购</div>
                </div>
                 <div class="activity_content_recommend_content">
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/i.png" alt="">
                    <div class="activity_content_recommend_content_title">超干牛肉干175g原味内 蒙古特产手撕风干牛肉</div>
                    <div class="activity_content_recommend_content_price">特惠价￥<span>35.5</span></div>
                    <div class="activity_content_recommend_content_tobuy">立即抢购</div>
                </div>
                 <div class="activity_content_recommend_content">
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/o.png" alt="">
                    <div class="activity_content_recommend_content_title">两口子老婆饼400G美食 特产糕点网红零食</div>
                    <div class="activity_content_recommend_content_price">特惠价￥<span>57.5</span></div>
                    <div class="activity_content_recommend_content_tobuy">立即抢购</div>
                </div>
                 <div class="activity_content_recommend_content">
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/pu.png" alt="">
                    <div class="activity_content_recommend_content_title">香印葡萄1盒*500克</div>
                    <div class="activity_content_recommend_content_price">特惠价￥<span>16.5</span></div>
                    <div class="activity_content_recommend_content_tobuy">立即抢购</div>
                </div>
                 <div class="activity_content_recommend_content">
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/niu.png" alt="">
                    <div class="activity_content_recommend_content_title">精选牛肉片150g</div>
                    <div class="activity_content_recommend_content_price">特惠价￥<span>38.8</span></div>
                    <div class="activity_content_recommend_content_tobuy">立即抢购</div>
                </div>
            </div>

              <div class="activity_content_hot" ref="reduce">
                <div class="activity_content_hot_title">
                    <img src="../assets/reduce.png" alt="">
                </div>
                <div class="activity_content_hot_content">
                    
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/suancai.png" alt="" class="activity_content_hot_content_shop">
                    <div class="activity_content_hot_content_name">食人族酸辣粉130*6桶 麻辣爆肚方便粉丝</div>
                    <div class="activity_content_hot_content_secondName">买一桶送6个鹌鹑蛋</div>
                    <div class="activity_content_hot_content_price">￥49.10</div>
                    <div class="activity_content_hot_content_Oldprice">￥68.00</div>
                    <div class="activity_content_hot_content_tobuy">立即抢购</div>
                </div>
                <div class="activity_content_hot_content" style="float:right">
                   
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/haidi.png" alt="" class="activity_content_hot_content_shopLeft">
                    <div class="activity_content_hot_content_nameLeft">海底捞自助火锅 牛肚嫩牛混合2盒</div>
                    <div class="activity_content_hot_content_secondNameLeft">网红小火锅系列</div>
                    <div class="activity_content_hot_content_priceLeft">￥67.80</div>
                    <div class="activity_content_hot_content_OldpriceLeft">￥90.80</div>
                    <div class="activity_content_hot_content_tobuyLeft">立即抢购</div>
                </div>
                 <div class="activity_content_hot_content" style="float:left">
                   
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/mianbao.png" alt="" class="activity_content_hot_content_shop">
                    <div class="activity_content_hot_content_name">豪士【2份减10元】乳酸菌酸奶口袋面包</div>
                    <div class="activity_content_hot_content_secondName">网红小吃手撕心里软早餐</div>
                    <div class="activity_content_hot_content_price">￥29.90</div>
                    <div class="activity_content_hot_content_Oldprice">￥38.00</div>
                    <div class="activity_content_hot_content_tobuy">立即抢购</div>
                </div>
            </div>

            <div class="activity_content_recommend" ref="sale">
                <div class="activity_content_recommend_title">
                    <img src="../assets/sale.png" alt="">                    
                </div>
                <div class="activity_content_recommend_content">
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/shupian.png" alt="">
                    <div class="activity_content_recommend_content_title">乐事轻培薯片【36g*5】</div>
                    <div class="activity_content_recommend_content_price">特惠价￥<span>39.90</span></div>
                    <div class="activity_content_recommend_content_tobuy">立即抢购</div>
                </div>
                <div class="activity_content_recommend_content">
                    <img src="../assets/youzi.png" alt="">
                    <div class="activity_content_recommend_content_title">惊觅 特级红心蜜柚</div>
                    <div class="activity_content_recommend_content_price">特惠价￥<span>18.80</span></div>
                    <div class="activity_content_recommend_content_tobuy">立即抢购</div>
                </div>
                 <div class="activity_content_recommend_content">
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/huami.png" alt="">
                    <div class="activity_content_recommend_content_title">新疆哈密瓜 香甜可口</div>
                    <div class="activity_content_recommend_content_price">特惠价￥<span>28.50</span></div>
                    <div class="activity_content_recommend_content_tobuy">立即抢购</div>
                </div>
                 <div class="activity_content_recommend_content">
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/songshu.png" alt="">
                    <div class="activity_content_recommend_content_title">三只松鼠麻辣味牛肉</div>
                    <div class="activity_content_recommend_content_price">特惠价￥<span>26.50</span></div>
                    <div class="activity_content_recommend_content_tobuy">立即抢购</div>
                </div>
                 <div class="activity_content_recommend_content">
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/pu.png" alt="">
                    <div class="activity_content_recommend_content_title">香印葡萄1盒*500克</div>
                    <div class="activity_content_recommend_content_price">特惠价￥<span>16.50</span></div>
                    <div class="activity_content_recommend_content_tobuy">立即抢购</div>
                </div>
                 <div class="activity_content_recommend_content">
                    <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/niu.png" alt="">
                    <div class="activity_content_recommend_content_title">精选牛肉片150g</div>
                    <div class="activity_content_recommend_content_price">特惠价￥<span>38.80</span></div>
                    <div class="activity_content_recommend_content_tobuy">立即抢购</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            hotList:[],
            gps:['全场最热','爆款推荐','全场满减','天天特卖'],
            select:0,
            gpsFlag:false,
            gpsClassChange:'fontColor'
        }
    },
    methods: {
       goBack(){
           this.$router.push('/Home')
       },
       toget(){
            this.$toast.text('领取成功');
       },
       go(index){   
           switch (index) {
               case 0:
                    this.$refs.gps.style.left=.23+'rem'
                    this.select=index
                    window.scrollTo(0,450)
                break;
                case 1:
                    this.$refs.gps.style.left=1.1+'rem'   
                    this.select=index
                    window.scrollTo(0,this.$refs.hot.offsetTop-80)
                break;
                case 2:    
                    this.$refs.gps.style.left=1.98+'rem'   
                    this.select=index
                     window.scrollTo(0,this.$refs.reduce.offsetTop-80)
                break;
                case 3:
                    this.$refs.gps.style.left=2.85+'rem'   
                    this.select=index
                    window.scrollTo(0,this.$refs.sale.offsetTop-80)
                break;
           
               default:
                   break;
           }
       },
       loadingMore(){
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop>=540) {
                this.gpsFlag=true
                this.gpsClassChange='fontColorTop'
            }else{
                this.gpsFlag=false
                this.gpsClassChange='fontColor'
            }
            console.log(scrollTop)
            console.log(this.$refs.reduce.offsetTop)
            if (scrollTop<=550) {
                this.select=0
                this.$refs.gps.style.left=.23+'rem' 
            }else if (scrollTop+120>=this.$refs.hot.offsetTop&&scrollTop+120<=this.$refs.reduce.offsetTop) {
                this.$refs.gps.style.left=1.1+'rem'   
                this.select=1  
            }else if (scrollTop+120>=this.$refs.reduce.offsetTop&&scrollTop+120<=this.$refs.sale.offsetTop) {
                this.$refs.gps.style.left=1.98+'rem'   
                this.select=2
            }else if (scrollTop+120>=this.$refs.sale.offsetTop) {
                this.$refs.gps.style.left=2.85+'rem'   
                this.select=3
            }
       }
    },
    created() {
        
    },
    mounted() {
        window.addEventListener('scroll',this.loadingMore)   
    },
    beforeDestroy(){
        window.removeEventListener('scroll',this.loadingMore)
  },
}
</script>
<style lang="stylus" scoped>
@import url('../common/font/font.css')
top = .44rem
 
.activity
    width 100%
    height top
    background #daefe6
    position fixed
    z-index 9999

    .activity_back
        width .12rem
        height .18rem
        float left
        margin .12rem 0 0 .1rem

    .activity_title
        font-size .15rem
        text-align center
        transform translate(0,70%)
        font-weight 1000
        color #282828
        width 1rem
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 37%;


    .activity_shop
        width .16rem
        height .16rem
        float right
        margin .15rem .22rem 0 0

    .activity_more
        width .21rem
        height .05rem
        float right
        margin .19rem .1rem 0 0

.activity_banner
    width 100%
    height 3.475rem
    background url('https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/activity.png') no-repeat
    background-size 100%  
    background-position 0rem .4rem
    text-align center
    padding-top top

    .activity_banner_title
        width 2.55rem
        height .305rem
        transform translate(0,-.15rem)

    .activity_banner_time
        font-size .1rem
        transform translate(0,.41rem)
        color #a32a24
        font-family DFPYuanW5

    .activity_banner_secondTitle
        width 1.2rem
        height .22rem;
        background #a32a24
        font-size .11rem
        color #fff
        font-family DFPYuanW5
        line-height .21rem
        transform translate(100%,-.3rem)


.activity_content
    background url('../assets/background.png') no-repeat
    background-size 100%

    .activity_content_coupon
        overflow hidden
    
        .second
            margin-top .13rem !important
    .gpsTop
         background url('') !important
         position fixed !important
         top .35rem
         background #e6f4ee !important
         height .35rem !important
         z-index 9999
         color #999999 !important

    .activity_content_gps
        position relative
        background url('https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/gps_active.png') no-repeat
        background-size 100%
        height 1rem
        background-position 0
        font-size .12rem
        color #fff 
        width 100%

        .activity_content_gps_img
            width .09rem
            height .14rem
            position absolute
            top 40%
            left .23rem
            transition all .5s
        div
            float left
            margin-top .38rem
            margin-left .4rem
        .fontColor
            color #ffde69
        .fontColorTop
            color #f66969
    .activity_content_coupon .activity_content_coupon_type 
        width 1.71rem
        height .68rem
        background url('https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/coupon.png') no-repeat
        background-size 100%
        float left
        margin .26rem .03rem 0 .1rem
        position relative
        font-family: '黑体';

        .activity_content_coupon_type_money
            font-size .4rem
            color #fff
            position absolute
            top .12rem
            left .05rem

        .activity_content_coupon_type_rule
            font-size .1rem
            position absolute
            top .25rem
            color #fff
            left .51rem

            span 
                font-size .1109rem
        img 
            width .31rem
            height .35rem
            position  absolute
            right .17rem
            top .18rem

    .activity_content_hot
        overflow hidden

        .activity_content_hot_title
            background url('https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/bg.png') no-repeat
            background-size 50%
            text-align center
            background-position 50% .16rem
            height  .77rem

        .activity_content_hot_title img

            transform translate(0,-.39rem)
            width 1.17rem
            height .28rem

        .activity_content_hot_content
            width 3.57rem
            height 1.42rem
            position relative
            font-family PingFangSC
            margin-bottom .26rem

            .activity_content_hot_content_shopLeft
                width 35%
                height 80%
                margin .2rem .1rem 0 .28rem
                float right

            .activity_content_hot_content_nameLeft
                font-size .15rem
                color #364d43
                position absolute
                width 1.7rem
                top 0
                left .21rem
                font-weight bolder
                top .2rem

            .activity_content_hot_content_secondNameLeft
                font-size .12rem
                color #364d43
                overflow: hidden
                text-overflow: ellipsis
                white-space: nowrap
                position absolute
                top 0.65rem
                left 6%
                font-weight bold

            .activity_content_hot_content_priceLeft
                color #f05e25
                font-weight bolder
                font-size .13rem
                position absolute
                bottom .41rem
                left 6%

            .activity_content_hot_content_OldpriceLeft
                @extend .activity_content_hot_content_priceLeft
                color #989898
                left 20%
                font-size .09rem
                text-decoration line-through

            .activity_content_hot_content_tobuyLeft
                font-size .1rem
                width .53rem
                height .18rem
                background #364d43
                color #fff
                text-align center
                position absolute
                bottom .38rem
                right 1.71rem
                line-height .15rem
                display flex
                justify-content center
                align-items center

            .activity_content_hot_content_shop
                width 35%
                height 80%
                margin .2rem .1rem 0 .28rem

            .activity_content_hot_content_name
                font-size .15rem
                color #364d43
                position absolute
                width 1.7rem
                top 0
                right .21rem
                font-weight bolder
                top .2rem

            .activity_content_hot_content_secondName
                font-size .12rem
                color #364d43
                overflow: hidden
                text-overflow: ellipsis
                white-space: nowrap
                position absolute
                top 0.65rem
                left 47%
                font-weight bold

            .activity_content_hot_content_price
                color #f05e25
                font-weight bolder
                font-size .13rem
                position absolute
                bottom .41rem
                left 47%

            .activity_content_hot_content_Oldprice
                @extend .activity_content_hot_content_price
                color #989898
                left 60%
                font-size .09rem
                text-decoration line-through

            .activity_content_hot_content_tobuy
                font-size .1rem
                width .53rem
                height .18rem
                background #364d43
                color #fff
                text-align center
                position absolute
                bottom .38rem
                right .21rem
                line-height .15rem
                display flex
                justify-content center
                align-items center

    .activity_content_recommend
        text-align center
        margin-top .42rem
        overflow hidden

        .activity_content_recommend_title
            background url('../assets/bg.png') no-repeat
            background-size 50%
            background-position 50% .16rem

    .activity_content_recommend_title img
        transform translate(0,-.39rem)
        width 1.17rem
        height .28rem
        display inline-block

    .activity_content_recommend_content 
            width  1.87rem
            height 2.6rem
            float left
        img 
            width 1.59rem

        .activity_content_recommend_content_title
            font-size .14rem
            font-family PingFangSC
            font-weight bolder
            color #364d43
            margin-top -.1rem

        .activity_content_recommend_content_price
            color #f05e25
            font-size .10rem
            font-family PingFangSC
            font-weight bolder
            float left
            margin .12rem .12rem 0 .35rem

            span 
                @extend .activity_content_recommend_content_price
                font-size .12rem
                float none
                margin 0

        .activity_content_recommend_content_tobuy
            font-size .1rem
            width .53rem
            height .18rem
            background #364d43
            color #fff
            float left
            margin-top .1rem
            display flex
            justify-content center
            align-items center

</style>