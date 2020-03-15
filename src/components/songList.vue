<template>
  <ul class="track-list">
    <li class="track-item" v-for="(item, index) in 6" :key="index">
      <router-link
        to="/"
        class="link-to-play-control"
      >
        <div class="track-rank">{{index}}</div>
        <div class="track-info">
          <p class="track-title ellipsis">情绪</p>
          <p class="track-desc ellipsis">作者 - 情绪</p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>


export default {
  methods: {
    
  },
};
</script>

<style scoped lang='less'>
.track-list {
  margin-bottom: 1rem;
  margin: 0;
  .track-item {
    .link-to-play-control {
      display: flex;
      align-items: center;
      height: 0.6rem;
      border-bottom: 1px solid #e4e4e4;
      .track-rank {
        text-align: center;
        width: 16%;
        font-size: 0.18rem;
      }
      .track-info {
        width: 84%;
        color: #000;
        .track-title {
          font-size: 0.16rem;
        }
        .track-desc {
          font-size: 0.14rem;
          color: #9e9e9e;
          margin-top: -.1rem;
        }
      }
    }
  }
}
</style>
