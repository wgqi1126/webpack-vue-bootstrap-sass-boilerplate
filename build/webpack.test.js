'use strict'
process.env.NODE_ENV = 'testing'

const webpack = require('webpack')
const webpackConfig = require('./webpack.base')
const _ = require('./utils')

webpackConfig.devtool = '#inline-source-map'
webpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('testing')
  })
)
webpackConfig.resolveLoader = {
  alias: {
    // necessary to to make lang="scss" work in test when using vue-loader's ?inject option 
    // see discussion at https://github.com/vuejs/vue-loader/issues/724
    'scss-loader': 'sass-loader'
  }
}

// push loader for css files
_.cssProcessors.forEach(processor => {
  let loaders
  if (processor.loader === '') {
    loaders = []
  } else {
    loaders = [processor.loader]
  }
  webpackConfig.module.loaders.push(
    {
      test: processor.test,
      loaders: ['style-loader', _.cssLoader].concat(loaders)
    }
  )
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
