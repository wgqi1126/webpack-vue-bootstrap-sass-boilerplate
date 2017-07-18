import { app } from './app'
import './utils/promise-polyfill'

// Enable progressive web app support (with offline-plugin)
if (process.env.NODE_ENV === 'production') {
  require('./utils/pwa')
}

app.$mount('#app')
