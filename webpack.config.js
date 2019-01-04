var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')
const entries = glob.sync('./src/client/pages/**/index.js')

let _entry = {}
let _htmlPlugins = []
const fileRegExp = /\/(\w+)\/index.js$/
for (let entry of entries) {
    if (fileRegExp.test(entry)) {
        const _entryKey = RegExp.$1.toLocaleLowerCase()
        _entry[_entryKey] = path.join(__dirname, entry)
        _htmlPlugins.push(new HtmlWebpackPlugin({
            filename: _entryKey === 'main' ? 'index.html' : `${_entryKey}.html`,
            template: path.join(__dirname, './index.html'),
            chunks: [_entryKey]
        }))
    }
}

module.exports = {
    mode: 'development',
    entry: _entry,
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [{
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
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },
    plugins: [
        ..._htmlPlugins
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    externals: {
        "react": 'React',
        'react-dom': 'ReactDOM'
    }
}