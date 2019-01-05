/**
 * author: stephentian
 * email: stephentian@foxmail.com
 * day: 2018/1/5
 **/

// fs (file system)

// 文件系统模块，负责读写文件
// 和所有其它 javascript 模块不同的是，同时提供了异步和同步方法

// jQuery 提供的 getJSON() 操作
// $.getJSON('http://example.com/ajax/', function (data) {
//   console.log('IO结果返回后执行')
// })
// console.log('不等待 IO 结果直接执行')

// 同步 IO 操作
// var data = getJSONSync('http://example.com/ajax')
// 同步需要等待返回，好处是代码简单


// 1. 异步读写文件

// var fs = require('fs')
// 普通读取文件方法
// fs.readFile('text3.txt', 'utf-8', function (err, data) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// 封装一个方法，传给方法一个读取文件的路径，能读取文件，并返回内容
const fs = require('fs')
// 封装方法
function getFileByPath(fPath) {
  fs.readFile(fPath, 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
    return data
  })
}
var result = getFileByPath('./text2.txt')
console.log(result)
// undefined
// 2222
// 因为是异步读取，所以 result 会为 undefined
// 随后输出 text2 内容

// 读取二进制文件时，不传文件编码格式，回调函数的 data 参数将返回一个 Buffer 对象
// Buffer 对象是包含零个或任意个字节的数组(注意和 Array 不同)
// Buffer 对象可以和 String 转换

// Buffer --> String
// var text = data.toString('utf-8')
// console.log(text)

// String --> Buffer
// var buf = Buffer.from(text, 'utf-8')
// console.log(buf)