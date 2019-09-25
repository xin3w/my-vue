import axios from 'axios'
import CONFIG from '../configs/env'

axios.defaults.baseURL = CONFIG['API_HOST']

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 获取token
  let TOKEN = localStorage.token
  // 设置token
  if (TOKEN) {
    config.headers['X-ODAPI-Authorization'] = TOKEN
  }
  // 返回配置项
  return config
}, function (error) {
  // 请求错误时做些事
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // console.log(JSON.stringify(response));
  if (response['status'] === 200) {
    if (response['data']['err_no'] === 0) {
      return response['data']['data']
    } else {
      if (response['data'].hasOwnProperty('erron')) {
        console.log(response['data']['erron'])
      }
      return false
    }
  } else {
    console.log('网络错误！')
  }
}, function (error) {
  // 请求错误时做些事
  return Promise.reject(error)
})
