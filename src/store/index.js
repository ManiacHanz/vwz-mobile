

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'


Vue.use(Vuex)


const state = {
	uid: '',     // 保存用户id
	theme: '',	// 保存手机配色方案
	homeLink: false,				// 设置默认菜单是否是第三方配置
	listLink: false,
	userLink: false,
	showFoot: true,				//是否显示底栏
	iframeUrl: '',
	footActive: 0,				// 面板活动的位数
}



export default new Vuex.Store({
	state,
	mutations,
})