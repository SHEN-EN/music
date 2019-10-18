<template>
    <div class="footer" v-show="showFooter">
       <div class="footer-img">
           <router-link to="/"  active-class="footer-active" exact>
           <img src="../assets/home.png">
           <!-- <img src="../assets/home_after.png" alt="" v-if="this.$route.path=='/'"> -->
           <span>首页</span>
           </router-link>
       </div>
       <div class="footer-img">
           <router-link to="/shop" active-class="footer-active">
           <img src="../assets/find.png" alt="" v-if="this.$route.path!='/shop'">
           <!-- <img src="../assets/shop_after.png"  alt="" v-if="this.$route.path=='/shop'"> -->
           <span>发现</span>
           </router-link>
       </div>
         <div class="footer-img">
           <router-link to="/shop" active-class="footer-active">
           <img src="../assets/shops.png" alt="" v-if="this.$route.path!='/shop'" style="margin-right:.03rem">
           <!-- <img src="../assets/shop_after.png"  alt="" v-if="this.$route.path=='/shop'"> -->
           <span>购物车</span>
           </router-link>
       </div>
       <div class="footer-img">
           <router-link to="/my" active-class="footer-active">
           <img src="../assets/my.png" alt="" v-if="this.$route.path!='/my'">
           <!-- <img src="../assets/my_after.png" alt="" v-if="this.$route.path=='/my'"> -->
           <span>我的</span>
           </router-link>
        </div>        
    </div> 
</template>
<script>
export default {
    props:['add','allLength'],
    data () {
        return {
            showFooter:true,
            screenHeight: document.documentElement.clientHeight,  //默认屏幕高度
            originHeight: document.documentElement.clientHeight,   //实时屏幕高度
            shopLength:0,
        }
    },
    methods: {

    },
    mounted () {
        // window.onresize监听页面高度的变化
        let self = this;
        window.onresize = function() {
            return (function(){
                self.screenHeight = document.documentElement.clientHeight;
            })()
        }
    },
    watch: {
        screenHeight(val) {
        if(this.originHeight > val + 100){
            this.showFooter=false
        }else{
            this.showFooter=true
        }
    }
    },
    created () {
        
    },
}
</script>
<style scoped>
.footer-img img{
    width: .25rem;
    height: .25rem;
}
.footer{
    position: fixed;
    bottom: 0;
    background: #fff;
    height: .5rem;
    z-index: 999;
    width: 100%;
    text-align: center;
}
.footer .footer-img{
    width: 25%;
    height: 100%;
    float: left;
    position: relative;
    font-size: .14rem;
    padding-top: .05rem;
}
.footer-img span{
    display: block;
    font-size: .1rem;
}
.footer-active{
  color: #282828;
}

</style>

