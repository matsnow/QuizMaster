const webpack = require('webpack');
const path    = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  
  output: {
    path: path.resolve(__dirname, '../app/assets/javascripts/webpack'),
    filename: '[name].js',
  },
  
  module: {
    loaders: [{
      test: /\.(js|jsx)$/, loader: "babel", exclude: /node_modules/,
      query: { presets: ["es2015", "react"], }
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true, sourceMap: true}),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name:     'commons',
        filename: 'commons.js',
        minChunks: Infinity
    })
  ],
  devtool: 'inline-source-map'
}
