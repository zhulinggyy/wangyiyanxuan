<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goto('/msite')" :class="{on:$route.path==='/msite'}">
      <span class="item_icon">
        <i class="iconfont icongouwuche"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/classification')" :class="{on:$route.path==='/classification'}">
      <span class="item_icon">
        <i class="iconfont icongouwuche"></i>
      </span>
      <span>分类</span>

    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/goods')" :class="{on:$route.path==='/goods'}">
      <span class="item_icon">
        <i class="iconfont icongouwuche"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/shoppingCart')" :class="{on:$route.path==='/shoppingCart'}">
      <span class="item_icon">
        <i class="iconfont icongouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/profile')" :class="{on:$route.path==='/profile'}">
      <span class="item_icon">
        <i class="iconfont icongouwuche"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods:{
      goto (path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #B4282D
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
