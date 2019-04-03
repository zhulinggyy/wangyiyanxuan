<template>
  <div>
    <ProfileHeader/>
    <div class="header_personage">
      <div class="top_login">
        <div class="top_img">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>

        <label class="input_phone">
          <input type="text" placeholder="邮箱账号" v-model="email" style="outline 0 none">
        </label>
        <label class="input_code">
          <input type="text" placeholder="密码" v-model="pwd"/>
        </label>
        <div class="login_help">
          <span>注册账号 </span>
          <span>忘记密码</span>
        </div>
        <div class="phone_login active" @click="$router.push('/home')">
          <span @click="toLogin">登录</span>
        </div>
        <div class="email_login" @click="$router.push('/Profile')">
          <span>其他账号登录</span>
        </div>
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
        email:'',
        pwd:'',
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
        if(! /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email) && !/^[a-zA-Z0-9_]{6,20}$/.test(this.pwd) ){
//          return alert('请输入正确的手机号')
//        }else if(){
          return alert('请输入正确的邮箱和密码')
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
        outline 0 none
        margin-bottom 10px
        padding-left: 10px
        border-bottom 1px solid #cccccc
        display block
        height 30px
      }
        .input{
          outline 0 auto
        }
      .input_code{
        outline 0 none
        padding-left: 10px
        border-bottom 1px solid #cccccc
        display block
        height 30px
        width: 100%;
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
        margin-bottom 5px
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
    }


  }
</style>
