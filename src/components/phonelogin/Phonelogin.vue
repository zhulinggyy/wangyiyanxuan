<template>
  <div>
    <ProfileHeader/>
    <div class="header_personage">

    <div class="top_login">
      <div class="top_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>

      <label class="input_phone">
        <div class="login_tips">
          <p></p>
          <p></p>
        </div>
        <input type="text" placeholder="请输入手机号" v-model="phone"/>
      </label>
      <label class="input_code">
        <input type="text" placeholder="请输入手机验证码" v-model="code"/>
        <div class="get_phone_code">获取验证码</div>
      </label>

      <div class="login_help">
        <span>遇到问题? </span>
        <span>使用密码验证登录</span>
      </div>
      <div class="phone_login active" @click="$router.push('/home')">
        <span @click="toLogin">登录</span>
      </div>
      <div class="email_login" @click="$router.push('/Profile')">
        <span>其他账号登录</span>
      </div>
      <div class="email_register">快速注册&nbsp;&gt;</div>
    </div>
  </div>
  </div>
</template>

<script>
  import ProfileHeader from '../../components/ProfileHeader/profile_header'
  export default{
    components:{
      ProfileHeader
    },
    data(){
      return{
        isUser:false,
        phone:'',
        code:'',
        phone_tips: "",
        code_tips: ""
      }
    },

//    watch:{
//      user:{
//        handl(user){
//          if(/^1[0-9]{10}$/.test(user.phone)){
//            this.phone_tips=''
//          }else{
//           this.phone_tips='请输入正确的手机号码'
//          }
//          if(phone_tips._test(user.pwd)){
//            this.code_tips=''
//          }else{
//            this.code_tips = "请输入正确的验证码"
//          }
//        }
//      }
//    },
    methods:{
      toLogin(){
        if(! /^1\d{10}$/.test(this.phone) && !/^\d{6}$/.test(this.code) ){
//          return alert('请输入正确的手机号')
//        }else if(){
          return alert('请输入正确的手机号和验证码')
        }else{
          return alert('登录成功')
        }
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header_personage{
    overflow hidden
    width 100%
    height 100%
    padding 88px 0 0
    background-color white
    box-sizing border-box
    position relative
    &.is_personal{
      background-color #f2fsf4
    }
    .top_login{
      display: block;
      .top_img{
        text-align: center;
        margin-top: .4rem;
        margin-bottom: 0;
        img{
          width: 2.56rem;
          height: .85333rem;
          margin-bottom 40px
        }
      }

      .input_phone{
        width 100%
        margin-bottom 10px
        padding-left: 10px
        border-bottom 1px solid #cccccc
        display block
        height 50px
        line-height 50px
      }
      .input_code{
        padding-left: 10px
        border-bottom 1px solid #cccccc
        display block
        height 50px
        width: 100%;
        line-height 50px
        .get_phone_code{
          margin-top 10px
          margin-right 20px
          line-height 20px
          padding 3px 10px
          float: right
          border:1px solid #666666
          border-radius 5px
        }
      }
      .login_help{
        color #666
        padding 10px 10px
        display flex
        justify-content space-between
      }

      .phone_login{
        margin 10px auto
        width 80%
        height 50px
        background: #B4282D
        margin-bottom 10px
        color white
        line-height 50px
        text-align center
        border-radius 3px
      }
      .email_login{
        border-radius 3px
        margin 0 auto
        width 80%
        height 50px
        line-height 50px
        text-align center
        background: #ffffff
        color  #B4282D
        border:1px solid #B4282D
      }
      .email_register{
        text-align center
        margin-top 20px
      }
      .login_help{
        display flex
        justify-content space-between
        margin-top 20px
      }
    }


  }

</style>
