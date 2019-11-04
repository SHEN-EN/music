<template>
    <div>
        <div class="find_top">
            <img src="../assets/seach_second.png" alt="" class="find_top_seach">
            <div class="find_top_title">
                <div>i社区</div>
                <div>i食谱</div>
            </div>
            <img src="../assets/more_second.png" alt="" class="find_top_more">
        </div>
        <div class="find_content">
            <div class="find_content_list">
                <div class="find_content_list_div">
                    <img src="../assets/water.png" alt="" class="find_content_list_img">
                </div>
                <div class="find_content_list_name">SHEN</div>
                <div class="find_content_list_time">刚刚</div>
                <div class="find_content_list_content">
                    送快递啦 冲冲冲！！！ 今天又是满满一车西瓜
                </div>
                <img src="../assets/find_img.png" alt="" class="find_content_list_contentImg">
            </div>
        </div>
        <footer-curry></footer-curry>
    </div>
</template>
<script>
import footer from '../components/footer';
export default {
    components: {
        'footer-curry':footer
    }
    
}
</script>
<style lang="stylus" scoped>
top = .44rem

.find_top
    height top
    width 100%
    background #17b447
    position fixed
    font-size .15rem
    color #fff

    .find_top_seach
        width .17rem
        height .17rem
        float left
        margin .14rem 0 0 .14rem

    .find_top_title
        overflow hidden
        float  left
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        height 100%
        display flex
        justify-content center
        align-items center
        div
            float left
            margin-right .10rem
            margin-left.08rem
            position relative
        div:nth-child(1)
            font-weight bolder

        div:nth-child(1)::after 
            content ''
            position absolute
            width .18rem
            height .02rem
            background #fff
            bottom -.06rem
            left: .06rem
    .find_top_more
        width .24rem
        height .06rem
        float right
        margin .2rem .14rem 0 0 
    
.find_content 
    padding-top top
    background #fff
    overflow hidden

    .find_content_list
        overflow hidden
        padding-top .16rem
        padding-left .12rem

        .find_content_list_div 
            width .43rem
            height .43rem
            border-radius 50%
            float left

           .find_content_list_img
                width .43rem
                height .43rem
                border-radius 50%
                display inherit

        .find_content_list_name
            font-size .11rem
            font-weight bolder
            margin-left .5rem
            margin-top .1rem

        .find_content_list_time
            font-size .09rem
            color #989898
            float right 
            margin-top -.15rem

        .find_content_list_content
            font-size .11rem    
            margin .06rem 0 0 .08rem
            float left
        .find_content_list_contentImg
            width 1.5rem
            height 1.5rem
            margin-left .53rem
</style>