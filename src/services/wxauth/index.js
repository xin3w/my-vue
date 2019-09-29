import axios from 'axios'
import storage from 'good-storage'

export function init () {
  // 获取appid及跳转url接口刷新页面并获得code
  axios.get(`/weixin/info`).then((res) => {
    console.log('init() res', res)
    location.href = res.url
  })
}

export function getToken (code) {
  // 拿code换accessToken,换不到就重新走流程
  axios.get(`/weixin/callback?code=${code}`).then((res) => {
    let accessToken = res.accessToken
    storage.set('accessToken', accessToken)
  }).catch(() => {
    init()
  })
}

export function getUserInfo () {
  // 获取用户信息
  return axios.get('/message/user/info')
}
export function getWechatInfo () {
  // 获取js-sdk功能列表
  return axios.post('/wechat/info')
}
