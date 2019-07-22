import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from '../store/index.js'
import interfaces from './utils/interfaces';
import https from './utils/https';
Vue.config.productionTip = false
// 配置全局可使用

Vue.prototype.$store = store;
Vue.prototype.$interfaces = interfaces;
Vue.prototype.$https = https;
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
