
import axios from 'axios'
import CONFIG from '../configs/env'
import storage from 'good-storage'
import { getQueryString } from '../utils/index'
import { init, getToken } from './wxauth/index'

axios.defaults.baseURL = CONFIG['API_HOST']

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 获取token
  let accessToken = storage.get('accessToken')
  // 设置token
  if (accessToken) {
    config.headers['accessToken'] = accessToken
    config.headers['sysType'] = 1
  }
  // 返回配置项
  return config
}, function (error) {
  // 请求错误时做些事
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) { // 响应拦截
  if (response.data.code === 0) {
    return Promise.resolve(response.data.data)
  } else if (response.data.code === '100100' || response.data.code === '100101') {
    console.log('accessToken错误')
    storage.remove('accessToken')
    init()
  } else { // 报错提示
    return Promise.reject(response.data.data)
  }
})
/* eslint-disable */
let accessToken
let code = getQueryString('code')
if (storage.get('accessToken')) {
  accessToken = storage.get('accessToken')
} else if (code) {
  getToken(code)
} else {
  init()
}
