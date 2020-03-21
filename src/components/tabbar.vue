
<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <!-- tabcontainer -->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="听吧">
          <!-- 听吧首页内容 -->
          <navbar></navbar>
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">22222</mt-tab-container-item>
        <mt-tab-container-item id="发现">44444</mt-tab-container-item>
        <mt-tab-container-item id="账号">55555</mt-tab-container-item>
      </mt-tab-container>
    </div>

    <!-- tabbar -->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="听吧">
        <img slot="icon" src="../../static/img/bar1.png" v-if="selected=='听吧'" />
        <img slot="icon" src="../../static/img/tab1.png" v-else />
        听吧
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../../static/img/bar2.png" v-if="selected=='我的'" />
        <img slot="icon" src="../../static/img/tab2.png" v-else />
        我的
      </mt-tab-item>
      <mt-tab-item>
        <img src="../../static/img/tabmus.png" class="music" alt />
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../../static/img/bar3.png" v-if="selected=='发现'" />
        <img slot="icon" src="../../static/img/tab3.png" v-else />
        发现
      </mt-tab-item>
      <mt-tab-item id="账号">
        <img slot="icon" src="../../static/img/bar4.png" v-if="selected=='账号'" />
        <img slot="icon" src="../../static/img/tab4.png" v-else />
        账号
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
 
<script>
import Navbar from "./navbar";
export default {
  name: "tabbar",
  components: {
    Navbar
  },
  data() {
    return {
      selected: "听吧",
    };
  },
};
</script>
 
<style scoped>
.mint-tabbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.08);
  color: rgb(208, 208, 208);
}
.page-tabbar {
  overflow: hidden;
  height: 100%;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #fff;
  color: rgb(248, 154, 12);
}
.mint-tabbar > .mint-tab-item {
  position: relative;
}
.mint-tabbar .music {
  width: 82px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-radius: 50%;
  border-top: 1px solid rgba(0, 0, 0, 0.4);
}
</style>