const webpack = require('webpack')
module.exports = {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      minChunks: (module) => {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true}),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
}
