<template>
  <div class="line">
    <img class="img_1" :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png'" alt="网易严选">
    <div class="m-topSearchIpt ipt">
      <img class="img_2" :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png'" alt="放大镜">
      <span class="placeholder">搜索商品, 共22102款好物</span>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      food:Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*<!--头部-->*/
  .line {
    width:100%;
    padding-top: 10px;
    background: #fff;
    padding-left:10px;
    position: fixed;
    top:0;
    z-index: 500;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-bottom: 10px;

    .img_1 {
      display: flex;
      align-items: center;
      justify-content: center;
      float: left;
      width: 105px;
      height: 19px;
    }
    .m-topSearchIpt {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 230px;
      height: 32px;
      border: 1px solid #eee;
      border-radius: 10px;
      background: #eee;
      margin-left: 5px;

      .img_2 {
        width: 17px;
        height: 17px;
        margin-right: 5px;
      }

      .placeholder {
        color: #666;
      }

    }

  }
</style>
