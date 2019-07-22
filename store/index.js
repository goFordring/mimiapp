import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';
// 引入
// 初始化 状态比变量
Vue.use(Vuex);
 const state = {
	isAuthenticated: false,
    user: null,
	  openId:null,
    LessonInfo:null
 }

 export default new Vuex.Store({
 	state,
	getters,
	actions,
	mutations
 })
