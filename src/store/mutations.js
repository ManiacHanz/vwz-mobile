import Vue from 'vue'

import {
	SAVE_USERID,
	SAVE_THEME,
	SET_PANELLINK,
} from './mutation-types.js'

export default {
	//保存用户id
	[SAVE_USERID](state, id) {
		state.uid = id
	},
	//保存主题配色
	[SAVE_THEME] (state, theme) {
		state.theme = theme
	},
	// 设置默认的面板菜单的链接
	[SET_PANELLINK] (state, payload) {
		if(payload.name == 'home') {
			state.homeLink = payload.link
		}
		else if(payload.name == 'list') {
			state.listLink = payload.link
		}
		else if(payload.name == 'user') {
			state.userLink = payload.link
		}
	}
}