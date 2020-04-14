const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',

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
            }
        ]
    }
});