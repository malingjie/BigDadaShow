// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './plugins/element.js'
import axios from './utils/http'
import store from './vuex/store'
// import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/common.css'


axios.defaults.baseURL = 'http://222.204.2.231:8083'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
// Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
