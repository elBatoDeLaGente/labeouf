const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, './src'),
    output: {
        path: path.join(__dirname, './build'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.ts']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:3000'
        }
    }
}