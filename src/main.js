// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import CONFIG from '@/configs/env'
import axios from 'axios'
import '@/services/headers'
import API from '@/services/api'
import { i18n } from '@/services/languages/i18n'

console.log(CONFIG)
Vue.config.productionTip = false
Vue.prototype.API = API

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  axios,
  components: { App },
  template: '<App/>'
})
