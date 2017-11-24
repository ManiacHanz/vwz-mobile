import axios from 'axios'
import {getStore} from 'src/utils/mUtils'

const uid = getStore(uid)

const baseUrl = 'http://192.168.100.14:8080/lltrvl'; 

const imageBaseUrl = 'http://192.168.100.14:8080/lltrvl'; 

export const axiosInstance = axios.create({
	baseUrl: baseUrl,
	timeout: 15000,
	method: 'POST',
	data: {
		uid,
	}
}) 