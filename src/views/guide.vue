<template>
    <div class="guide">
        <v-touch v-on:swipeleft="swiperleft" v-on:swiperight="swiperright" class="wrapper">
        <div class="guide_content" ref="box">
            <div class="guide_content_first" >
                <span @click="jump">跳过</span>
                <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/yuan.png" alt="" class="guide_content_first_Bylogo">
                <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/logos.png" alt="" class="guide_content_first_logo">
                <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/logo_title.png" alt="" class="guide_content_first_title">
            </div>
            <div class="guide_content_second">
                <span @click="jump">跳过</span>
                <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/second_logo.png" alt="" class="guide_content_second_logo">
                <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/second_title.png" alt="" class="guide_content_second_title">
            </div>
            <div class="guide_content_third">
                <span @click="jump">跳过</span>
                <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/third_logo.png" alt="" class="guide_content_third_logo">
                <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/third_title.png" alt="" class="guide_content_third_title">
            </div>
            <div class="guide_content_fouth">
                <span @click="jump">跳过</span>
                <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/fouth_logo.png" alt="" class="guide_content_fouth_logo">
                <img src="https://shen-1259805780.cos.ap-chengdu.myqcloud.com/SHOP/fouth_title.png" alt="" class="guide_content_fouth_title">
            </div>
        </div>
        </v-touch>
        <div class="guide_list">
            <div :class="{'select':leftValue==0}"  :style="leftValue==75?'position:absolute;transition:all .5s;':''"></div>
            <div :class="{'select':leftValue==25}" :style="leftValue==75?'position:absolute;transition:all .7s;':''"></div>
            <div :class="{'select':leftValue==50}" :style="leftValue==75?'position:absolute;transition:all .9s;':''"></div>
            <div @click="toHome" :class="{'select':leftValue==75}" :style="leftValue==75?'display: flex;justify-content: center;position:absolute;transition:all 1.1s;width:.9rem;height:.25rem;background:#fff;border:solid 1px #42c269;font-size:.14rem;align-items:center;':''">{{leftValue==75?'立即体验':''}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            leftValue:0,
        }
    },
    methods: {
        swiperleft(e){
            if (this.leftValue>=75) {
                return false;
            }else{                 
                this.leftValue+=25
                this.$refs.box.style=`transform: translate(-${this.leftValue}%,0)`
            }
        },
        swiperright(){
            if (this.leftValue<=0) {
                return false;
            }else{
                this.leftValue=this.leftValue-25
                this.$refs.box.style=`transform: translate(-${this.leftValue}%,0)`
            }
        },
        jump(){
            this.leftValue=75
            this.$refs.box.style=`transform: translate(-${this.leftValue}%,0)`
        },
        toHome(){
            this.$router.push('/Home')
        }
    },
    created () {
        
    },
    beforeCreate() {
       document.querySelector('#app').setAttribute('style', 'height:100%')
       document.querySelector('html').setAttribute('style', 'height:100%')
       document.querySelector('body').setAttribute('style', 'height:100%')
    },
    beforeDestroy() {
         document.querySelector('html').removeAttribute('style')
         document.querySelector('body').removeAttribute('style')
         document.querySelector('#app').removeAttribute('style')
    },
}
</script>
<style>

</style>
<style lang="stylus" scoped>
     
.guide
    height 100%
    width 100%
    overflow hidden
    margin auto

    .guide_content
        height 100%
        width (3.75*4)rem
        transition all .8s
    .wrapper
        height 100%

    .guide_content_first
        width 3.75rem
        float left
        height 100%
        background #fff
        font-size .16rem
        color #b3b3b3
        position relative

        span
            float right
            margin .24rem .25rem 0 0

        .guide_content_first_logo
            width  38%
            height 12%
            position: absolute;
            left: 0;
            top: -1.4rem;
            bottom: 0;
            right: 0;
            margin: auto;
        .guide_content_first_Bylogo
            @extend  .guide_content_first_logo
            width 2.5%
            height 2%
            left -33%
            bottom 5%
            animation jump 2s linear infinite
        .guide_content_first_title
            @extend .guide_content_first_logo
            width: 48%;
            height: 6%;
            transform: translate(0,.8rem);

    .guide_content_second
        @extend .guide_content_first

        
        span
             @extend .guide_content_first span

        .guide_content_second_logo
            @extend .guide_content_first_logo
            width: 90%;
            height: 38%;
            top -1.25rem

        .guide_content_second_title

            @extend .guide_content_first_title
            width 70%
            height 5%
            transform translate(0,2rem)



    .guide_content_third
        @extend .guide_content_first

        span
            @extend .guide_content_first span
        
        .guide_content_third_logo
            @extend .guide_content_first_logo
            width: 95%;
            height: 50%;

        .guide_content_third_title
            @extend .guide_content_first_title
            width 36%
            height 9%
            top 1.3rem

    .guide_content_fouth
        @extend .guide_content_first

        span
            @extend .guide_content_first span

        .guide_content_fouth_logo
            @extend .guide_content_first_logo
            width: 90%;
            height: 38%;
        .guide_content_fouth_title
            @extend .guide_content_first_title
            width 40%
            height 9%
            top 1.3rem
            
    .guide_list
        width 100%
        height 10%
        position absolute
        bottom .2rem
        display flex
        justify-content center

        div
            width .1rem
            height .1rem
            border-radius .5rem
            float left
            background #e6e6e6
            margin-right .05rem
            font-size 0rem
            color #17b447
            text-align center

        .select
            background #17b447
            width .15rem
            transition all .5s
@keyframes jump {
    0%{
        bottom 5%
        transform  scale(.9);
    }
    25%{
        bottom 10%
        transform  scale(1.1);
        opacity .8
    }
    50%{
        bottom 20%
        transform  scale(1.2);
        opacity 0
    }
    75%{
        bottom 10%
        opacity 0
    }
    100%{
        bottom 5%
    }
}  
</style>