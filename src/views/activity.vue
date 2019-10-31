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
                    <span class="activity_content_coupon_type_rule">元优惠卷 <br>满29元使用</span>
                    <img src="../assets/to_get.png" alt="">
                </div>
                 <div class="activity_content_coupon_type">
                    <span class="activity_content_coupon_type_money">70</span>
                    <span class="activity_content_coupon_type_rule">元优惠卷 <br>满49元使用</span>
                    <img src="../assets/to_get.png" alt="">
                </div>
                 <div class="activity_content_coupon_type second">
                    <span class="activity_content_coupon_type_money">80</span>
                    <span class="activity_content_coupon_type_rule">元优惠卷 <br>满59元使用</span>
                    <img src="../assets/to_get.png" alt="">
                </div>
                 <div class="activity_content_coupon_type second">
                    <span class="activity_content_coupon_type_money">90</span>
                    <span class="activity_content_coupon_type_rule">元优惠卷 <br>满69元使用</span>
                    <img src="../assets/to_get.png" alt="">
                </div>
            </div>
            <div class="activity_content_hot">
                <div class="activity_content_hot_title">
                    <img src="../assets/hot.png" alt="">
                </div>
                <div class="activity_content_hot_content" v-for="(item,index) in 2" :key="index" :style="index==1?'float:right':''">
                    <img src="../assets/decorate.png" alt="" class="activity_content_hot_content_img" :style="index==1?'transform: rotate(270deg);left:88%':''">
                    <img src="../assets/a.png" alt="" class="activity_content_hot_content_shop">
                    <div class="activity_content_hot_content_name">整箱15瓶 元气森林 橘味苏打气泡水480ml</div>
                    <div class="activity_content_hot_content_secondName">好喝又美味</div>
                    <div class="activity_content_hot_content_price">￥49.9</div>
                    <div class="activity_content_hot_content_Oldprice">￥20.80</div>
                    <div class="activity_content_hot_content_tobuy">立即抢购</div>
                </div>
            </div>
            <div class="activity_content_recommend">
                <div class="activity_content_recommend_title">
                    <img src="../assets/recommend.png" alt="">                    
                </div>
                <div class="activity_content_recommend_content" v-for="(item,index) in 8" :key="index">
                    <img src="../assets/ccc.png" alt="">
                    <div class="activity_content_recommend_content_title">香印葡萄1盒*500克</div>
                    <div class="activity_content_recommend_content_price">特惠价￥<span>29</span></div>
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
            
        }
    },
    methods: {
       goBack(){
           this.$router.push('/Home')
       }
    }
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
    background url('../assets/activity.png') no-repeat
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

    .activity_content_coupon .activity_content_coupon_type 
        width 1.71rem
        height .68rem
        background url('../assets/coupon.png') no-repeat
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
            left .5rem
        img 
            width .31rem
            height .35rem
            position  absolute
            right .2rem
            top .18rem

    .activity_content_hot
        overflow hidden

        .activity_content_hot_title
            background url('../assets/bg.png') no-repeat
            background-size 50%
            text-align center
            background-position 50% .16rem
            height  .77rem

        .activity_content_hot_title img

            transform translate(0,-.37rem)
            width 1.17rem
            height .28rem

        .activity_content_hot_content
            background #daefe6
            width 3.57rem
            height 1.42rem
            position relative
            font-family PingFangSC
            margin-bottom .26rem

            .activity_content_hot_content_img
                height .305rem
                width .26rem
                position absolute
                top -.1rem
                left .16rem

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
                top 0.6rem
                left 47%
                font-weight bolder

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
                display: flex;
                justify-content: center;

    .activity_content_recommend
        background url('../assets/bg.png') no-repeat
        background-size 50%
        text-align center
        background-position 50% .16rem
        margin-top .42rem
        overflow hidden

    .activity_content_recommend_title img
        transform translate(0,-.37rem)
        width 1.17rem
        height .28rem

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
            margin-top -.2rem

        .activity_content_recommend_content_price
            color #f05e25
            font-size .10rem
            font-family PingFangSC
            font-weight bolder
            float left
            margin .22rem .12rem 0 .35rem

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
            text-align center
            float left
            margin-top .2rem

</style>