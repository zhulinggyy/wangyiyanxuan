<template>
  <div class="m-indexHD">
    <!--头部-->
    <div class="line">
      <img class="img_1" :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png'" alt="网易严选">
      <div class="m-topSearchIpt ipt">
        <img class="img_2" :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png'" alt="放大镜">
        <span class="placeholder">搜索商品, 共22102款好物</span>
      </div>
    </div>

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
    <div class="bannerBotText">
      <span><i class="iconfont icongouwuche"></i>网易自营品牌</span>
      <span><i class="iconfont icongouwuche"></i>30天无忧退货</span>
      <span><i class="iconfont icongouwuche"></i>48小时快速退款</span>
    </div>
    <!--商品分类列表-->
    <div class="classLists">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="classList_content">
              <ul>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
              </ul>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="classList_content">
              <ul>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
                </li>
                <li>
                  <img src="http://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
                  <P>居家生活</P>
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
          <ul>
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
        <ul>
          <li>
            <div class="xianshigou_img"><img src="http://yanxuan.nosdn.127.net/13b5e44efa717730da99387de63bde3b.png?imageView&thumbnail=216x216&quality=75" alt=""></div>
            <p>¥216</p>
          </li>
          <li>
            <div class="xianshigou_img"><img src="http://yanxuan.nosdn.127.net/13b5e44efa717730da99387de63bde3b.png?imageView&thumbnail=216x216&quality=75" alt=""></div>
            <p>¥216</p>
          </li>
          <li>
            <div class="xianshigou_img"><img src="http://yanxuan.nosdn.127.net/13b5e44efa717730da99387de63bde3b.png?imageView&thumbnail=216x216&quality=75" alt=""></div>
            <p>¥216</p>
          </li>
          <li>
            <div class="xianshigou_img"><img src="http://yanxuan.nosdn.127.net/13b5e44efa717730da99387de63bde3b.png?imageView&thumbnail=216x216&quality=75" alt=""></div>
            <p>¥216</p>
          </li>
          <li>
            <div class="xianshigou_img"><img src="http://yanxuan.nosdn.127.net/13b5e44efa717730da99387de63bde3b.png?imageView&thumbnail=216x216&quality=75" alt=""></div>
            <p>¥216</p>
          </li>
          <li>
            <div class="xianshigou_img"><img src="http://yanxuan.nosdn.127.net/13b5e44efa717730da99387de63bde3b.png?imageView&thumbnail=216x216&quality=75" alt=""></div>
            <p>¥216</p>
          </li>
        </ul>
      </div>
    </div>

    <!--新品首发-->
    <div class="xianshigou newshoufa">
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
        <ul>
          <li>
            <div class="xianshigou_img"><img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt=""></div>
            <p>2019明前特级西湖龙井 ... <i>¥216</i></p>
            <span>新茶品尝</span>
          </li>
          <li>
            <div class="xianshigou_img"><img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt=""></div>
            <p>2019明前特级西湖龙井 ... <i>¥216</i></p>
          </li>
          <li>
            <div class="xianshigou_img"><img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt=""></div>
            <p>2019明前特级西湖龙井 ... <i>¥216</i></p>
          </li>
          <li>
            <div class="xianshigou_img"><img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt=""></div>
            <p>2019明前特级西湖龙井 ... <i>¥216</i></p>
          </li>
          <li>
            <div class="xianshigou_img"><img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt=""></div>
            <p>2019明前特级西湖龙井 ... <i>¥216</i></p>
          </li>
          <li>
            <div class="xianshigou_img"><img src="http://yanxuan.nosdn.127.net/55d8d878ee00b7a59c1b45f740087c93.png?imageView&quality=65&thumbnail=330x330" alt=""></div>
            <p>2019明前特级西湖龙井 ... <i>¥216</i></p>
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

        </ul>
      </div>
    </div>

    <button @click="getMockHome">aaa</button>



  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import Swiper from 'swiper'
  import {reqMockHome} from '../../api';
  import 'swiper/dist/css/swiper.css'

  export default {
    data(){
      return{
        isAllChannel: false
      }
    },
    mounted(){
      const bScroll = new BScroll(".left_ul_box", {
        scrollX: true
      })

      const bScroll2 = new BScroll(".indexfloor_list_warp", {
        scrollX: true
      })








      // let wrapper = document.querySelector('.gou')
      // let scroll = new BScroll(wrapper)

      // const bScroll = new BScroll(".indexfloor_list", {
      //   scrollX: true
      // })


      const mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },

      })





    },
    methods: {
      allChannelShow(){
        this.isAllChannel = !this.isAllChannel;
      },
      async getMockHome(){
        const result = await reqMockHome();
        console.log(result)
      }
    },

  }





</script>




<style lang="less" scoped>
  /*@import "swiper/dist/css/swiper.min.css"*/
  @import "./index";

</style>
