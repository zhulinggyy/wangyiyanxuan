<template>
  <div class="m-indexHD">
    <!--头部-->
     <Header />
    <!--导航-->
    <div class="header_nav">
      <div class="left_ul_box">
        <ul class="left_ul clearfix">
          <li class="left_li"><a class="left_a active" href="javascript:">推荐</a></li>
          <li class="left_li"><a class="left_a"  href="javascript:">居家生活</a></li>
          <li class="left_li"><a class="left_a"  href="javascript:">服饰鞋包</a></li>
          <li class="left_li"><a class="left_a"  href="javascript:">美食酒水</a></li>
          <li class="left_li"><a class="left_a"  href="javascript:">个户清洁</a></li>
          <li class="left_li"><a class="left_a"  href="javascript:">母婴亲子</a></li>
          <li class="left_li"><a class="left_a"  href="javascript:">运动旅行</a></li>
          <li class="left_li"><a class="left_a"  href="javascript:">数码家电</a></li>
          <li class="left_li"><a class="left_a"  href="javascript:">礼品特色</a></li>
        </ul>

        <div class="right_span" :class="{isRightSpan:isAllChannel}" @click="allChannelShow">
          <i class="iconfont iconiconfontjiantou"></i>
        </div>

        <div class="allChannel" v-show="isAllChannel">
          <div class="moreCate">
            <div class="tabAlter">全部频道</div>
            <ul>
              <li>推荐</li>
              <li>居家生活</li>
              <li>服饰鞋包</li>
              <li>美食酒水</li>
              <li>个护清洁</li>
              <li>母婴亲子</li>
              <li>运动旅行</li>
              <li>数码家电</li>
              <li>全球特色</li>
            </ul>
          </div>
        </div>


      </div>

    </div>
    <!--轮播图-->
    <div class="banner">
      <mt-swipe :auto="3000">
        <mt-swipe-item><img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"></mt-swipe-item>
        <mt-swipe-item><img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"></mt-swipe-item>
        <mt-swipe-item><img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"></mt-swipe-item>
        <mt-swipe-item><img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"></mt-swipe-item>
        <mt-swipe-item><img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"></mt-swipe-item>
      </mt-swipe>
    </div>


    <!--banner图下面文字-->
    <div class="bannerBotText" v-if="MSiteData.policyDescList">
      <span v-for="(item,index) in MSiteData.policyDescList" :key="index"><i class="item.icon"></i>{{item.desc}}</span>
    </div>
    <!--商品分类列表-->
    <div class="classLists">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="classList_content">
              <ul v-if="MSiteData.kingKongModule">
                <li v-for="(item, index) in MSiteData.kingKongModule.kingKongList" :key="index">
                  <img :src="item.picUrl" alt="">
                  <P>{{item.text}}</P>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>


      <!--新人专享礼-->
      <div class="m-freshmanModule">
          <div class="moduleTitle">
            <span class="txt">新人专享礼</span>
          </div>
          <div class="content clearfix">
            <div class="content_left">
              <a class="left" href="javascript:void(0)">
                <div class="name" >新人专享礼包</div>
                <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
              </a>
            </div>
            <div class="content_right">
              <div class="content_right_top">
                <p>福利社</p>
                <p>今日特价</p>
                <img src="http://yanxuan.nosdn.127.net/a1e0d26680c493dedead73808232d346.png?imageView&thumbnail=200x200&quality=75" alt="">
                <div class="mey">
                  <span>￥390</span>
                  <span>￥459</span>
                </div>
              </div>
              <div class="content_right_top">
                <p>新人拼团</p>
                <p class="fontColor">一元起包邮</p>
                <img src="http://yanxuan.nosdn.127.net/b60e3b6a07a7a1673c82b0c1e1104382.png?imageView&thumbnail=200x200&quality=75" alt="">
                <div class="mey">
                  <span>￥1</span>
                  <span>￥9.9</span>
                </div>
              </div>
            </div>
          </div>

      </div>
      <!--品牌制造-->
      <div class="m-indexManufacturersSupplying">
        <div class="moduleTitle">
          <div class="left">
            <span>品牌制造商直供</span>
          </div>
          <a class="right" href="/manufacturer/list">
            <span>更多</span>
            <i class="iconfont iconjiantou"></i>
          </a>
        </div>
        <ul class="list">
          <a href="javascript:;" class="item">
            <div class="cnt">
              <h4 class="title">海外制造商</h4>
              <div>
                <span class="price">
                  <span>9.9</span>
                  <span>元起</span>
                </span><i class="newIcon">上新</i>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="item">
            <div class="cnt">
              <h4 class="title">海外制造商</h4>
              <div>
                <span class="price">
                  <span>9.9</span>
                  <span>元起</span>
                </span><i class="newIcon">上新</i>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="item">
            <div class="cnt">
              <h4 class="title">海外制造商</h4>
              <div>
                <span class="price">
                  <span>9.9</span>
                  <span>元起</span>
                </span><i class="newIcon">上新</i>
              </div>
            </div>
          </a>
          <a href="javascript:;" class="item">
            <div class="cnt">
              <h4 class="title">海外制造商</h4>
              <div>
                <span class="price">
                  <span>9.9</span>
                  <span>元起</span>
                </span><i class="newIcon">上新</i>
              </div>
            </div>
          </a>
        </ul>
      </div>
      <!--美目热销榜-->
      <div class="m-categoryHotSellModule">
        <div class="moduleTitle">
          <div class="left">
            <span>类目热销榜</span>
          </div>
        </div>

        <div class="hotContent">
          <div class="top_cont_top">
            <ul>
              <li>
                <span>热销榜</span>
                <div class="hotContent_img">
                  <img src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                </div>
              </li>
              <li>
                <span>热销榜</span>
                <div class="hotContent_img">
                  <img src="http://yanxuan.nosdn.127.net/1fa535e25330987297a27e63c27db2e6.png?imageView&quality=65&thumbnail=200x200">
                </div>
              </li>
            </ul>
          </div>
          <div class="top_cont_botm">
            <ul class="top_cont_botm_list">
              <li>
                <span class="span">热销榜</span>
                <div class="hotContent_img">
                  <img src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                </div>
              </li>
              <li>
                <span class="span">热销榜</span>
                <div class="hotContent_img">
                  <img src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                </div>
              </li>
              <li>
                <span class="span">热销榜</span>
                <div class="hotContent_img">
                  <img src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                </div>
              </li>
              <li>
                <span class="span">热销榜</span>
                <div class="hotContent_img">
                  <img src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                </div>
              </li>
              <li>
                <span class="span">热销榜</span>
                <div class="hotContent_img">
                  <img src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                </div>
              </li>
              <li>
                <span class="span">热销榜</span>
                <div class="hotContent_img">
                  <img src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                </div>
              </li>
              <li>
                <span class="span">热销榜</span>
                <div class="hotContent_img">
                  <img src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                </div>
              </li>
              <li>
                <span class="span">热销榜</span>
                <div class="hotContent_img">
                  <img src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png?imageView&amp;quality=65&amp;thumbnail=200x200">
                </div>
              </li>
            </ul>
          </div>
        </div>





      </div>

     <!--人气推荐-->
      <div class="m-indexFloor">
        <div class="moduleTitle">
          <div class="left">
            <span>人气推荐</span>
          </div>
          <a class="right" href="">
            <span>更多</span>
            <i class="iconfont iconjiantou"></i>
          </a>
        </div>
        <div class="indexfloor_cont">
          <a class="spItem">
            <div class="wraper">
              <div class="m-lazyload  m-lazyload-loaded">
                <img src="http://yanxuan.nosdn.127.net/bbd83d44d6d8fc61031256143ad37c93.png?imageViewng?imageView">
              </div>
            </div>
            <div class="is-right">
              <div class="tagWraper new">
                <span>每满299减60</span>
                <span>每满299减50券</span>
              </div>
              <div class="is-right_font">泰国制造 天然乳胶枕 护颈按摩</div>
              <div class="desc">0合成胶 SGS全程监控</div>
              <div class="price">
                <span>¥</span>
                <span>199</span>
              </div>
            </div>
          </a>
        </div>
        <div class="indexfloor_list">
          <ul class="popular_goods" v-if="MSiteData.popularItemList">
            <li v-for="(item, index) in MSiteData.popularItemList" :key="index">
              <div class="indexfloor_img"><img :src="item.primaryPicUrl" alt=""></div>
              <div class="is-right_font">{{item.name}}</div>
              <div class="desc">吸尘器 <i>￥{{item.retailPrice}}</i></div>
              <div class="tagWraper new">
                <span>爆品</span>
                <span>限时购</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

    <!--限时购-->
    <div class="xianshigou">
      <div class="moduleTitle">
        <div class="left">
          <span>限时购</span>
        </div>
        <a class="right" href="">
          <span>更多</span>
          <i class="iconfont iconjiantou"></i>
        </a>
      </div>
      <div class="xianshigou_list">
        <ul v-if=" MSiteData.flashSaleModule">
          <li v-for="(item, index) in MSiteData.flashSaleModule.itemList" :key="index">
            <div class="xianshigou_img">
              <img :src="item.picUrl" alt="">
            </div>
            <p>¥{{item.activityPrice}}</p>
            <p>¥{{item.originPrice}}</p>
          </li>
        </ul>
      </div>
    </div>

    <!--新品首发-->
    <div class="xianshigou newshoufa ">
      <div class="moduleTitle">
        <div class="left">
          <span>新品首发</span>
        </div>
        <a class="right" href="">
          <span>更多</span>
          <i class="iconfont iconjiantou"></i>
        </a>
      </div>
      <div class="xianshigou_list">
        <ul v-if=" MSiteData.newItemList">
          <li v-for="(item,index) in MSiteData.newItemList" :key="index" style="width: 22%">
            <div class="xianshigou_img"><img
              :src="item.listPicUrl" alt=""></div>
            <p>{{item.simpleDesc}}<i>¥216</i></p>
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>

    <!--新品首发下面-->
    <div class="chuncha clearfix">
      <ul>
        <li>
          <span>春茶尝鲜季</span>
          <span>春茶尝鲜季</span>
          <div class="picList clearfix">
            <img src="http://yanxuan.nosdn.127.net/ad072f3fc7f677671b8e8070c9d87853.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic">
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic">
          </div>
        </li>
        <li>
          <span>春茶尝鲜季</span>
          <span>春茶尝鲜季</span>
          <div class="picList clearfix">
            <img src="http://yanxuan.nosdn.127.net/ad072f3fc7f677671b8e8070c9d87853.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic">
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic">
          </div>
        </li>
        <li>
          <span>春茶尝鲜季</span>
          <span>春茶尝鲜季</span>
          <div class="picList clearfix">
            <img src="http://yanxuan.nosdn.127.net/ad072f3fc7f677671b8e8070c9d87853.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic">
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic">
          </div>
        </li>
        <li>
          <span>春茶尝鲜季</span>
          <span>春茶尝鲜季</span>
          <div class="picList clearfix">
            <img src="http://yanxuan.nosdn.127.net/ad072f3fc7f677671b8e8070c9d87853.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic">
            <img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&amp;thumbnail=150x150&amp;quality=75" class="pic">
          </div>
        </li>
      </ul>
    </div>

    <div class="guanggao">
      <a class="bannder" href="javascript:void(0)" style="background-image:url(https://yanxuan.nosdn.127.net/65809aa8953965561715b1d721f3e710.jpg?imageView&thumbnail=750x0&quality=75);background-size:100% 100%;"></a>
    </div>


      <!--超火断货王-->
    <div class="m-indexFloor gouwarp">
      <div class="indexfloor_list indexfloor_list_warp clearfix">
        <ul class="contentdd">
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li class="icon_is-right">
            <div class="is-right_font_gengduo">查看更多<i class="iconfont iconjiantou"></i></div>
          </li>
        </ul>
      </div>

      <div class="guanggao">
        <a class="bannder" href="javascript:void(0)" style="background-image:url(https://yanxuan.nosdn.127.net/65809aa8953965561715b1d721f3e710.jpg?imageView&thumbnail=750x0&quality=75);background-size:100% 100%;"></a>
      </div>
    </div>
    <div class="m-indexFloor gouwarp">
      <div class="indexfloor_list indexfloor_list_warp-2 clearfix">
        <ul class="contentdd">
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li class="icon_is-right">
            <div class="is-right_font_gengduo">查看更多<i class="iconfont iconjiantou"></i></div>
          </li>
        </ul>
      </div>

      <div class="guanggao">
        <a class="bannder" href="javascript:void(0)" style="background-image:url(https://yanxuan.nosdn.127.net/f64270dfb7410b7b17a1e8232db144ff.png?imageView&thumbnail=750x0&quality=75);background-size:100% 100%;"></a>
      </div>
    </div>
    <div class="m-indexFloor gouwarp">
      <div class="indexfloor_list indexfloor_list_warp-3 clearfix">
        <ul class="contentdd">
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li>
            <div class="indexfloor_img"><img src="./imgs/1.png" alt=""></div>
            <div class="is-right_font">网易智造N520除螨</div>
            <div class="desc">吸尘器 <i>￥449</i></div>
            <div class="tagWraper new">
              <span>爆品</span>
              <span>限时购</span>
            </div>
          </li>
          <li class="icon_is-right">
            <div class="is-right_font_gengduo">查看更多<i class="iconfont iconjiantou"></i></div>
          </li>
        </ul>
      </div>
      <div class="guanggao">
        <a class="bannder" href="javascript:void(0)" style="background-image:url(https://yanxuan.nosdn.127.net/fc2388e61c4e083924689c889987cc10.jpg?imageView&thumbnail=750x0&quality=75);background-size:100% 100%;"></a>
      </div>
    </div>








  </div>
</template>

<script>
  import Header from '../../../src/components/Header/header'
  import {mapState}from 'vuex'
  import BScroll from 'better-scroll';
  import Swiper from 'swiper'
  import {reqMockHome} from '../../api';
  import 'swiper/dist/css/swiper.css'

  export default {
    components:{
      Header,
    },
    data(){
      return{
        isAllChannel: false
      }
    },
    mounted(){
      const bScroll = new BScroll(".indexfloor_list_warp", {
        scrollX: true
      })
      const bScroll2 = new BScroll(".indexfloor_list_warp", {
        scrollX: true
      })
      const bScroll3 = new BScroll(".indexfloor_list_warp-2", {
        scrollX: true
      })
      const bScroll4 = new BScroll(".indexfloor_list_warp-3", {
        scrollX: true
      })
      const bScroll5 = new BScroll(".indexfloor_list_warp-4", {
        scrollX: true
      })

      const mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },
    updated(){
      if(!this.bScroll){
        this.bScroll = new BScroll(".left_ul_box", {
          scrollX: true
        })
      }else {
        this.bScroll.refresh()
      }
    },

    methods: {
      allChannelShow(){
        this.isAllChannel = !this.isAllChannel;
      },
    },
    computed: {
      ...mapState({
        MSiteData:state=>state.MSiteData,

      })
    }
  }





</script>




<style lang="less" scoped>
  /*@import "swiper/dist/css/swiper.min.css"*/
  @import "./index";

</style>
