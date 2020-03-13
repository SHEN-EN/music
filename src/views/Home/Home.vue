<template>
  <div class="home">
    <header-seach></header-seach>
    <HomeSwiper></HomeSwiper>
    <HomeRecommend></HomeRecommend>
    <HomeSingRecommend></HomeSingRecommend>
    <footer-curry></footer-curry>
    <!-- <img src="../../assets/1jpg.jpg" alt=""> -->
  </div>
</template>
<script>
import HomeRecommend from './HomeRecommend'
import HomeSwiper from './HomeSwiper'
import HomeSingRecommend from './HomeSingRecommend'

import headerSeach from '../../components/header'
import footerCurry from '../../components/footer'


export default {
  components: {
   HomeRecommend,
   HomeSwiper,
   headerSeach,
   HomeSingRecommend,
   footerCurry
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  },
 created() {
   
 },
  mounted() {
    
  },
}
</script>

<style scoped>

</style>
