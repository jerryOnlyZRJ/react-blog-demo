var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.join(__dirname, './src/client/pages/Main/index'),
        article: path.join(__dirname, './src/client/pages/Article/index')
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|gif|webp)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './index.html'),
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'article.html',
            template: path.join(__dirname, './index.html'),
            chunks: ['article']
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals: {
        "react": 'React',
        'react-dom': 'ReactDOM'
    }
}