'use strict'
var path = require('path');//路径工具
console.log('__dirname = '+__dirname)//该文件的目录
console.log('. = '+path.resolve("."))//工作目录
console.log(path.resolve(__dirname,'cfg'))//D:\prj\coding\myvue\build\cfg，cfg不一定存在
console.log(path.join(__dirname,'..','src'))//当前目录的上级的src目录

console.log(process.env.NODE_ENV)//系统环境

console.log(typeof (new Array(1)))//object

console.log(JSON.stringify( Object.assign({}, "options")));//{"0":"o","1":"p","2":"t","3":"i","4":"o","5":"n","6":"s"}


const webpack = require('webpack')
new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: '"production"'
  }
})
console.log(Array.isArray([]))


const merge = require('webpack-merge')
const prodEnv = require('../config/prod.env')

console.log(merge(prodEnv, {
  NODE_ENV: '"development"'
}))
testArgs()
function testArgs() {
  console.log(arguments.length)//0
}




