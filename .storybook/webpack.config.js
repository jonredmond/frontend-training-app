module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        loaders: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          require.resolve('resolve-url-loader'),
          require.resolve('sass-loader')
        ],
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/, 
        loader: 'url-loader?limit=100000'
      },
    ],
  },
}