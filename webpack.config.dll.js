const webpack = require('webpack') // 用于访问内置插件
const path = require('path')

const BASE_PATH = path.resolve(__dirname)
const vendors = ['react', 'react-dom', 'redux', 'react-redux', 'redux-logger']

module.exports = {
    output: {
        path: `${BASE_PATH}/dist/manifest`,
        filename: '[name].[chunkhash].js',
        library: '[name]_[chunkhash]',
    },
    entry: [
        ...vendors,
    ],
    plugins: [
        new webpack.DllPlugin({
            path: 'dist/manifest/manifest.json', // manifest文件的输出路径
            name: '[name]_[chunkhash]', // name是dll暴露的对象名，要跟output.library保持一致
            context: __dirname, // context是解析包路径的上下文，这个要跟接下来配置的dlluser一致
        }),
    ],
}
