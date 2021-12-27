<template>
  <div class="header-content">
    <div class="clearfix header-main">
      <p class="logo">
        <a :href="url"
          ><img :src="logo" alt="おいくら" width="185" height="50"
        /></a>
      </p>
      <p class="renewal">
        全国のリサイクルショップ・質屋&nbsp;&nbsp;<span class="cnt">1,000</span
        ><span>件掲載</span>
      </p>
      <div class="header-action">
        <a :href="offerFormUrl">
          <img height="24" :src="offerFormIcon" alt="一括査定" />
          <span class="bold">一括査定</span>
        </a>
        <a :href="guideUrl">
          <img height="24" :src="guideIcon" alt="ご利用ガイド" />
          <span>ご利用ガイド</span>
        </a>
        <a :href="mypageUrl">
          <img height="24" :src="mypageIcon" alt="マイページ" />
          <span>マイページ</span>
        </a>
      </div>
    </div>
    <nav class="clearfix">
      <ul
        id="site_nav"
        class="clearfix"
        role="navigation"
        itemscope
        itemtype="https://schema.org/SiteNavigationElement"
      >
        <li>
          <a :href="url"><span>トップ</span></a>
        </li>
        <li>
          <a :href="`${url}offer-form/?baitai=rps`"
            ><span>一括買取査定</span></a
          >
        </li>
        <li>
          <a :href="`${url}bought/`"><span>買取実績</span></a>
        </li>
        <li>
          <a :href="`${url}magazine/`"><span>おいくらマガジン</span></a>
        </li>
        <li>
          <a :href="`${url}shopsupport/`"><span>掲載のお問合せ</span></a>
        </li>
      </ul>
    </nav>
    <div id="cta_fixed">
      <a class="btn-sink" :href="`${url}offer-form/?rt=topmain&baitai=rps`">
        <span>高く売れる<br />お店が見つかる</span>
        <h3>一括査定 スタート</h3>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import {
  url,
  logo,
  offerFormUrl,
  offerFormIcon,
  guideUrl,
  guideIcon,
  mypageUrl,
  mypageIcon
} from '../common/utils'
export default {
  data() {
    return {
      url: url,
      logo: logo,
      offerFormUrl: offerFormUrl,
      offerFormIcon: offerFormIcon,
      guideUrl: guideUrl,
      guideIcon: guideIcon,
      mypageUrl: mypageUrl,
      mypageIcon: mypageIcon
    }
  }
}
</script>
