<template>
    <div class="Profile">
      <ProfileHeader/>
      <div class="Profile_content_bottom">
        <div class="yanxian clearfix" >
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="content_bottom_pln" @click="$router.push('/phonelogin')">
          <i class="iconfont iconshouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="content_bottom_emil" @click="$router.push('/emaillogin')">
          <i class="iconfont iconmessage"></i>
          <span>邮箱账号登录</span>
        </div>
        <div class="register"> 手机号码快速注册 &nbsp;&gt; </div>
        <div class="mode">
          <span><i class="iconfont iconshouji"></i>微信</span>
          <span><i class="iconfont iconshouji"></i>QQ</span>
          <span><i class="iconfont iconshouji"></i>微博</span>
        </div>
      </div>
    </div>

</template>

<script>
  import ProfileHeader from '../../components/ProfileHeader/profile_header'
  export default {
    components:{
      ProfileHeader
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Profile{

    .Profile_content_bottom{
      height: 667px
      position relative
      background #F2F5F4
      .yanxian{
        width 100%
        height 80px
        text-align center
        margin 0px auto
        img{
          position absolute
          top: 23%;
          /* left: 50%; */
          margin-left: -20%;
          margin-top: -1.066667rem;
          width: 137px;
        }
      }

      .content_bottom_pln{
        position:absolute
        background #B4282D
        right: -11%;
        bottom: 300px;
        width:350px
        height 50px
        line-height 50px
        text-align center
        margin-right 55px
        border-radius 3px
        color #fff
      }
      .content_bottom_emil{
        position:absolute
        background #fff
        border: 1px solid #B4282D
        right: -11%;
        bottom: 240px;
        width:350px
        height 50px
        line-height 50px
        text-align center
        margin-right 55px
        border-radius 3px
        color #B4282D
      }
      .register{
        position:absolute
        right: -11%;
        bottom: 182px;
        width:350px
        height 50px
        line-height 50px
        text-align center
        margin-right 55px
        border-radius 3px
        color #666

      }
      .mode{
        position:absolute
        right: -11%;
        bottom: 0px;
        width:350px
        height 50px
        line-height 50px
        text-align center
        margin-right 55px
        border-radius 3px
        color #666
        span{
          font-size 16px
          margin-left 10px
          margin-right: 35px
        }

      }
    }

  }
</style>
