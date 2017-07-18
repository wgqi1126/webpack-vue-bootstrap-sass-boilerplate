import './utils/promise-polyfill'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'

sync(store, router)

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./utils/pwa')
}

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
