// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// app自适应字体
import './assets/js/rem'
// icon-font字体
import './assets/font/iconfont.css'
// mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 引入自定义交互的封装函数
import ajax from './api/ajax'
Vue.prototype.$ajax = ajax;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
