<template>
  <div class="ShoppingCart">
    <div class="shopheader">
      <p class="p_1">购物车</p>
      <p class="p_2">领劵</p>
    </div>
    <ul class="ShoppingCart_size">
      <li><i class="iconfont icondian"></i>30天无忧退货</li>
      <li><i class="iconfont icondian"></i>48小时快速退款</li>
      <li><i class="iconfont icondian"></i>满88元免邮费</li>
    </ul>
    <div class="Cart">
      <img src="./img/car.png" alt="">
      <p>去添加点什么吧</p>
      <div class="button" @click="$router.push('/profile')">登录</div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .ShoppingCart{
    width:100%
    height 100%
    background: #f4f4f4
    .shopheader{
      position fixed
      overflow hidden
      margin-bottom 50px
      width 100%
      height 50px
      background #fff
      justify-content:center;
      .p_1{
        float left
        line-height 50px
        margin-left 10px
        font-size 18px
      }
      .p_2{
        float right
        line-height 50px
        margin-right 10px
        font-size 18px
        color #B4282D
      }
    }
    .ShoppingCart_size{
      padding-top:50px
      display flex
      align-items center
      justify-content space-between
      padding-left:10px
      padding-right:10px
      li{
        i{
          font-size 18px
          color #cccccc
          margin-top 13px
        }
      }
    }

    .Cart{
      width 100%
      height 550px
      display flex
      justify-content center
      align-items center
      flex-direction column
      padding 100px auto
      img{
        height 150px
        width 150px
        text-align center
      }
      p{
        margin-bottom 20px
        color #cccccc
      }
      .button{
        height 50px
        width 200px
        color #fff
        text-align center
        line-height 50px
        margin 0 auto
        border-radius 3px
        font-size 20px
        background #B4282D
      }
    }
  }
</style>
