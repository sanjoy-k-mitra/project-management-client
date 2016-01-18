var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackEntries = [
    './src/index.js',
    './src/styles/index.less',
    'webpack-dev-server/client?http://localhost:8888',
    'webpack/hot/only-dev-server',
];


module.exports = {
    entry: webpackEntries,
    devtool: 'eval',
    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')},
            {test: /\.png$/, loader: 'url-loader?prefix=img/&limit=5000'},
            {test: /\.jpg$/, loader: 'url-loader?prefix=img/&limit=5000'},
            {test: /\.gif$/, loader: 'url-loader?prefix=img/&limit=5000'},
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},
            {test: /\.json?$/, exclude: /node_modules/, loader: 'json-loader'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        port: 8888
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('bundle.css', {allChunks: true})
    ]
};