const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')
console.log(`Output Path => ${outputPath}`)

module.exports = {
  mode: 'development',
  entry: './src/js/app.ts',
  output: {
    filename: 'bundle.js',
    path: outputPath,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: outputPath,
		compress: true,
		port: 9000,
		historyApiFallback: true,
		publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src/js')],
        exclude: [path.resolve(__dirname, 'node_modules')],
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}