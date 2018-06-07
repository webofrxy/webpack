'use strict'

const path = require('path')
//path.join() 方法可以使用平台特定的分隔符把括号中的path片段拼接在一起，并规范化生成的路径
//path.resolve() 方法可以把括号中的路径系列解析成绝对路径，并去除掉末尾的斜杠
function resolve (dir) {
    return path.join(__dirname, './', dir)
}

const dist = resolve('dist')

module.exports = {
    context: path.resolve(__dirname, './'),
    entry: {
        app: './src/iponex-2.png'
    },
    output: {
        path: dist,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    resolveLoader: {
        alias: {
            "file-loader": resolve('./build/file-loader')
        }
    },
    module: {
        rules: [
            {
                test: /\.png$/,
                loader: 'file-loader?name=[name]_[hash].[ext]'
            }
        ]
    }

}