const path = require('path')
const webpack = require('webpack') // 用于访问内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractText = require('extract-text-webpack-plugin')
const CleanDist = require('clean-webpack-plugin')

const BASE_PATH = path.resolve(__dirname)
const DEV_PATH = path.resolve(__dirname, 'src')
module.exports = {
    target: 'web', // 构建目标 默认是web（省略）
    entry: {
        app: `${DEV_PATH}/App.jsx`, // 文件入口可以多个
    },
    output: {
        path: `${BASE_PATH}/dist`,
        filename: 'js/[name].bundle.[hash].min.js', // 输出
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 使用loader解析 css文件
                use: ExtractText.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { modules: true, localIdentName: '[path][name]__[local]--[hash:base64:5]' } },
                        { loader: 'postcss-loader' },
                    ],
                }),
            },
            {
                test: /\.js|jsx$/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'eslint-loader' },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Voc',
            template: './template/template.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractText({
            filename: 'css/[name].css',
        }),
        new webpack.optimize.UglifyJsPlugin({ // 压缩
            compress: {
                warnings: false,
            },
        }),
        new CleanDist('dist/*', { // 清理以前的文件
            root: __dirname,
            verbose: true,
            dry: false,
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // 引入模块时可以不用拓展名
    },
}
