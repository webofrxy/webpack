'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir){
    const mypath =  path.join(__dirname, './', dir)
    console.log(mypath)
    return mypath;
}

const dist = resolve('dist')

module.exports = {
    context: path.resolve(__dirname, './'),
    entry: {
        app: './src/index.js'
    },
    output: {
        path: dist,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    resolveLoader: {
        alias: {
            "babel-loader": resolve('./build/babel-loader'),
            
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [resolve('src')]
            },
        ]
    },
    plugin: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}

