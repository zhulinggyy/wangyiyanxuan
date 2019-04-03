<template>
  <div class="Profile_content" @click="$router.push('/msite')">
    <p class="Profile_content_p1"><i class="iconfont iconweibiaoti-"></i></p>
    <div class="wang">网易严选</div>
    <div class="Profile_content_icon">
      <p class="Profile_content_p2"><i class="iconfont iconmagnifier"></i></p>
      <p class="Profile_content_p3"><i class="iconfont icongouwuche"></i></p>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Profile_content{
    display flex
    background #fff
    align-items center
    justify-content space-between
    width 100%
    height 50px
    margin-bottom 50px
    position fixed
    z-index 1000
    border-bottom 1px solid #cccccc
    .Profile_content_p1{
      margin-left 10px
      i{
        display block
        font-size 30px
      }
    }
    .wang{
      font-size 20px
      margin-left 10px
    }
    .Profile_content_icon{
      display flex
      padding-right 10px
      .Profile_content_p2{
        i{
          font-size 28px
          margin-right 10px
        }
      }
      .Profile_content_p3{
        i{
          font-size 25px
        }
      }
    }
  }
</style>
