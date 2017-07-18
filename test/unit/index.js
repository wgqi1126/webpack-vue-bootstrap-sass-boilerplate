import '@src/utils/promise-polyfill'
import Vue from 'vue'

Vue.config.productionTip = false

// require all test files that ends with '.spec.js' from the
// specs directory and all subdirectories
var testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)
