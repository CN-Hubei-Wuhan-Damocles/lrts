<template>
  <div class="navbar">
    <!-- navbar -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <span>推荐</span>
        <hr />
        <div class="content content1">
          <div class="left">
            <span>
              <span class="icon iconfont icon-sousuo"></span>
              <span>暗黑神使</span>
            </span>
          </div>
          <div class="right">
            <span>
              <span>相声书评</span>
              <span>限时免费</span>
            </span>
          </div>
        </div>
      </mt-tab-item>
      <mt-tab-item id="2">
        <span>出版</span>
        <hr />
        <div class="content content2">
          <div class="left">
            <span>
              <span class="icon iconfont icon-sousuo"></span>
              <span>三体</span>
            </span>
          </div>
          <div class="right">
            <span>
              <span>国学</span>
              <span>成功</span>
              <span>
                <span class="icon iconfont icon-shaixuan"></span>
                <span>筛选</span>
              </span>
            </span>
          </div>
        </div>
      </mt-tab-item>
      <mt-tab-item id="3">
        <span>原创</span>
        <hr />
        <div class="content content3">
          <div class="left">
            <span>
              <span class="icon iconfont icon-sousuo"></span>
              <span>两世欢</span>
            </span>
          </div>
          <div class="right">
            <span>
              <span class="icon iconfont icon-shaixuan"></span>
              <span>筛选</span>
            </span>
          </div>
        </div>
      </mt-tab-item>
      <mt-tab-item id="4">
        <span>战疫情</span>
        <hr />
        <div class="content content4">
          <div class="left">
            <span>
              <span class="icon iconfont icon-sousuo"></span>
              <span>养生堂疫情防控</span>
            </span>
          </div>
          <div class="right">
            <span>
              <span class="icon iconfont icon-shaixuan"></span>
              <span>筛选</span>
            </span>
          </div>
        </div>
      </mt-tab-item>
      <mt-tab-item id="5">
        <span>节目</span>
        <hr />
        <div class="content content5">
          <div class="left">
            <span>
              <span class="icon iconfont icon-sousuo"></span>
              <span>一首歌，一段琴</span>
            </span>
          </div>
          <div class="right">
            <span>
              <span>汽车</span>
              <span>音乐</span>
              <span>
                <span class="icon iconfont icon-shaixuan"></span>
                <span>筛选</span>
              </span>
            </span>
          </div>
        </div>
      </mt-tab-item>
      <mt-tab-item id="6">
        <span>儿童</span>
        <hr />
        <div class="content content6">
          <div class="left">
            <span>
              <span class="icon iconfont icon-sousuo"></span>
              <span>三国英雄传</span>
            </span>
          </div>
          <div class="right">
            <span>
              <span>家教</span>
              <span>故事</span>
              <span>
                <span class="icon iconfont icon-shaixuan"></span>
                <span>筛选</span>
              </span>
            </span>
          </div>
        </div>
      </mt-tab-item>
      <div class="item">
        <span class="icon iconfont icon-fenlei"></span>
      </div>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- 轮播图 -->
        <banner>
          <div class="swiper-slide" slot="img" v-for="item in arr" :key="item.id">
            <img :src="item.img" alt />
          </div>
        </banner>
        <!-- 菜单 -->
        <div class="menu">
          <router-link to="/vip" tag="div">
            <img src="../../static/img/menu1.png" alt />
            <span>会员</span>
          </router-link>
          <router-link to="/book" tag="div">
            <img src="../../static/img/menu2.png" alt />
            <span>看书</span>
          </router-link>
          <router-link to="/topOne" tag="div">
            <img src="../../static/img/menu3.png" alt />
            <span>榜单</span>
          </router-link>
          <router-link to="/listen" tag="div">
            <img src="../../static/img/menu4.png" alt />
            <span>听单</span>
          </router-link>
          <router-link to="/super" tag="div">
            <img src="../../static/img/menu5.png" alt />
            <span>精品</span>
          </router-link>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">222</mt-tab-container-item>
      <mt-tab-container-item id="3">333</mt-tab-container-item>
      <mt-tab-container-item id="4">444</mt-tab-container-item>
      <mt-tab-container-item id="5">555</mt-tab-container-item>
      <mt-tab-container-item id="6">666</mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import Banner from "./banner";
import Swiper from "swiper";
export default {
  name: "navbar",
  data() {
    return {
      selected: "1",
      arr: []
    };
  },
  methods: {
    async getData() {
      var res = await this.$ajax.get("../../static/json/banner.json");
      this.arr = res;
      this.$nextTick(() => {
        this.getSwiper();
      });
    },
    getSwiper() {
      var swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: true
      });
    }
  },
  mounted() {
    this.getData();
  },
  components: {
    Banner
  }
};
</script>

<style scoped>
.navbar div.mint-tab-item-label > span {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}
.navbar .mint-navbar {
  width: 100%;
  height: 120px;
  background-color: rgb(14, 47, 140);
  display: flex;
}
.navbar .mint-navbar > a {
  flex: 1;
}
.navbar .mint-navbar > div {
  flex: 0.8;
}
.navbar a.mint-tab-item {
  display: inline-block;
  height: 50px;
  box-sizing: border-box;
  position: relative;
}
.mint-tab-item.is-selected {
  border-bottom: none;
}
.mint-tab-item.is-selected hr {
  position: absolute;
  display: block;
  bottom: 0px;
  left: 33%;
  width: 33%;
  border: none;
  border-radius: 4px;
  height: 3px;
  background-color: rgb(247, 153, 21);
}
.mint-tab-item hr {
  display: none;
}
.mint-tab-item.is-selected div.mint-tab-item-label > span {
  color: white;
  font-size: 1rem;
  font-weight: 400;
}
.item {
  height: 50px;
  line-height: 50px;
}
.item span {
  color: white;
  font-size: 1.2rem;
}
.mint-tab-item.is-selected .content {
  display: block;
}
.content {
  position: absolute;
  top: 53px;
  height: 50px;
  width: 680%;
  padding: 0px 10px;
  box-sizing: border-box;
  display: none;
}
.content1 {
  left: 0px;
}
.content2 {
  left: -100%;
}
.content3 {
  left: -200%;
}
.content4 {
  left: -300%;
}
.content5 {
  left: -400%;
}
.content6 {
  left: -500%;
}
.content .left {
  float: left;
}
.content .right {
  float: right;
}
.content .left,
.content .right {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
}
.content .left > span,
.content .right > span {
  display: inline-block;
  background-color: rgb(86, 110, 174);
  margin-top: 5px;
  height: 40px;
  line-height: 40px;
  border-radius: 40px;
}
.content1 .left > span {
  padding: 0px 65px;
}
.content2 .left > span {
  padding: 0px 75px;
}
.content3 .left > span {
  padding: 0px 115px;
}
.content4 .left > span {
  padding: 0px 85px;
}
.content5 .left > span {
  padding: 0px 38px;
}
.content6 .left > span {
  padding: 0px 52px;
}
.content .right > span {
  padding: 0px 20px;
}
.content .right > span > span:nth-child(1) {
  margin-right: 15px;
}
.content .right > span > span:nth-child(2) {
  margin-right: 15px;
}
.content1 .right > span > span:nth-child(2) {
  margin-right: 0px;
}
.content3 .right > span > span:nth-child(1),
.content3 .right > span > span:nth-child(2) {
  margin-right: 0px;
}
.content4 .right > span > span:nth-child(1),
.content4 .right > span > span:nth-child(2) {
  margin-right: 0px;
}
/* 内容样式 */
/* 菜单 */
.menu {
  width: 100%;
  height: 60px;
  display: flex;
  padding: 17px 0px;
}
.menu > div {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.menu > div img {
  width: 40px;
}
.menu > div span {
  color: #333333;
  font-size: 0.6rem;
}
</style>