const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: '/'
    },
    devServer: {
      historyApiFallback: true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
        },
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, './src/Components'),
            common: path.resolve(__dirname, './src/Common'),
            routes: path.resolve(__dirname, './src/Routes'),
            mocks: path.resolve(__dirname, './src/Mocks'),
            utils: path.resolve(__dirname, './src/utils')
        }
    },
    module: {
      rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                plugins: [
                    [
                        "babel-plugin-styled-components",
                        { "displayName": true, "fileName": false }
                    ]
                ]
            }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
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