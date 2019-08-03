// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入jQuery
import $ from 'jquery'
Vue.prototype.$=$
//全局配置的访问服务端的域名
import domain from './domain.js'
//存入全局备用
Vue.prototype.domain=domain

//AES加密
import utils from '@/js/utils.js'
Vue.prototype.toAes=utils

//配置Axios
import vueAxios from 'axios'


//自己导入的小图片
import './assets/font/iconfont.css'
import './assets/xiaotubiao/iconfont.css'
//vue的样式配置start
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
//vue的样式配置end
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
