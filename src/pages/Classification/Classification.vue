<template>
  <div v-if="Category.categoryL1List">
    <Header/>
    <div class="ClassIf">
      <div class="ClassIf_left">
        <ul v-if="Category.categoryL1List">
            <!--点击左侧切换图片下标-->
          <li :class="{active:thisIndex=== index}" @click="to(index)"
              v-for="(item,index) in Category.categoryL1List" :key="index">{{item.name}}</li>
        </ul>
      </div>
      <div class="ClassIf_right" v-if="Category.categoryL1List[thisIndex]">
        <div class="scroll">
         <div>
           <img class="ClassIf_right_img clearfix" :src="Category.categoryL1List[thisIndex].wapBannerUrl" alt="">
           <ul>
             <li v-for="(item, index) in Category.categoryL1List[thisIndex].subCateList" :key="index">
               <a href="">
                 <img :src="item.bannerUrl" alt="">
                 <span>{{item.name}}</span>
               </a>
             </li>
           </ul>
         </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import {mapState}from 'vuex'
  import BScroll from 'better-scroll';
  import {reqCategory} from '../../api';
  import Header from '../../../src/components/Header/header'
  export default {
    data() {
      return {
        thisIndex: 0
      }
    },
    methods: {
      to(index) {
        this.thisIndex = index
      }
    },

    computed: {
      ...mapState({
        Category: state => state.Category,
      })
    },
    watch: {
      Category() {
        this.$nextTick(() => {
          let scroll = new BScroll('.ClassIf_left',{
            scrollY: true,
            click: true
          })
        }),
        this.$nextTick(() => {
            let scroll2 = new BScroll('.scroll',{
              scrollY: true,
              click: true
            })
          })
      },
    },
  }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .ClassIf{
      margin-top 50px
      width 100%
      /*height 90%*/
      .ClassIf_left{
        ul{
          height 200px
          float left
          margin-right 20px
          margin-top 10px
          li{
            width 80px
            line-height 50px
            text-align center
            margin-top 3px
            padding-left 2px
            &.active{
              color #CE2424
              border-left:5px solid #CE2424
            }
          }
        }
      }
      .ClassIf_right{
        display flex
        flex-direction column
        align-items center
        justify-content center
        .scroll{
          height 550px
          box-sizing border-box
          div{
            overflow hidden
            .ClassIf_right_img{
              width 100%
              /*height 200px*/
            }
            ul{
              float right
              /*width 200px*/
              li{
                float left
                width 80px
                height 100px
                img{
                  width 100%
                  span{
                    display inline-block
                    text-align center
                    margin-right 3px
                  }
                }
              }
            }
          }
        }

      }
    }
</style>
