import fetch from '../utils/fetch'
import {getStore} from '../utils/mUtils'
import {axiosInstance} from './axios'

/**
 * 获取首页默认地址
 */

export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});

// export const homeList = (data) => fetch('/front/menu',data,'POST')
// export const homeList = axiosInstance.get('/front/menu')
// export const homeList = axiosInstance('/front/menu')

// export const listList = () => fetch('/list',{},'POST')

// export const userList = () => fetch('/user',{},'POST')
/**
 * 账号密码登录
 */
export const accountLogin = (username, password, captcha_code) => fetch('/v2/login', {username, password, captcha_code}, 'POST');


/**
 * 退出登录
 */
export const signout = () => fetch('/v2/signout');


/**
 * 改密码
 */
export const changePassword = (username, oldpassWord, newpassword, confirmpassword, captcha_code) => fetch('/v2/changepassword', {username, oldpassWord, newpassword, confirmpassword, captcha_code}, 'POST');
