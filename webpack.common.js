const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: '/'
    },
    devServer: {
      historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, './src/Components')
        }
    },
    module: {
      rules: [
        {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'css-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader?limit=10000&name=img/[name].[ext]'
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};