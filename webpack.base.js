'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir){
    const mypath =  path.join(__dirname, './', dir)
    console.log(mypath)
    return mypath;
}

const dist = resolve('dist')

