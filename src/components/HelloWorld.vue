<template>
  <div class="hello">
    <h1>{{$t('common.msg1')}}</h1>
    <button @click="switchLanguage">切换语言</button>
    <button @click="clearStorage">清理缓存并刷新页</button>
    <div v-if="userInfo">{{userInfo}}<img :src="userInfo.avatar" alt=""></div>
    <button @click="getUserInfo">获取用户信息</button>
    {{wechatInfo}}
    <button @click="getWechatInfo">获取jssdk</button>
    <div class="test" v-on:click="fly">test</div>
  </div>
</template>

<script>
import $ from 'jquery'
import 'animate.css'
import storage from 'good-storage'
import {getUserInfo, getWechatInfo} from '../services/wxauth/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      local: 'zhCN',
      userInfo: null,
      wechatInfo: null

    }
  },
  mounted () {
    // console.log(this)
    $('.hello h2').css('color', '#f00')
    // this.API.wxauth.post_openid({type: 1, url: window.location.href}).then((res) => { console.log(res) })
  },
  methods: {
    fly () {
      $('.test').addClass('animated bounceOutLeft')
    },
    switchLanguage () {
      this.local = (this.local === 'zhCN') ? 'enUS' : 'zhCN'
      this.$i18n.locale = this.local
    },
    testApi () {
      this.API.get_block_stats('btc').then((res) => {
        console.dir(res)
      })
      this.API.get_block_stats('bch').then((res) => {
        console.dir(res)
      })
    },
    clearStorage () {
      storage.remove('accessToken')
      this.$router.go(0)
    },
    getUserInfo () {
      getUserInfo().then(res => {
        this.userInfo = res
      })
    },
    getWechatInfo () {
      getWechatInfo().then(res => {
        this.wechatInfo = res
      })
    }
  }
}
</script>
