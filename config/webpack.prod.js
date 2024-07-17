const webpack = require('webpack')
const { baseOptions, getBanner } = require('./webpack.config.base')

module.exports = env => {
  baseOptions.output.filename = env.filename
  baseOptions.plugins.push(
    new webpack.BannerPlugin({
      banner: getBanner({}),
      raw: true,
      entryOnly: true,
    }),
    new webpack.DefinePlugin({
      PRODUCTION: true,
    })
  )
  baseOptions.mode = 'production'
  baseOptions.externals = {
    // Exclude some dependencies from the bundle to reduce the size of the final package.
    // The dependencies should be provided by `require` in `config/common.meta.json`.
    react: 'React',
    'react-dom': 'ReactDOM',
  }

  return baseOptions
}
