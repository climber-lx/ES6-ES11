// 1.引入 fs 模块
const fs = require('fs');


// 2.调用方法读取文件
fs.readFile('./file/为学.md', function (err, data) {
    // 如果失败，则抛出错误
    if (err) throw err;
    // 如果没有出错，则输出内容
    console.log(data);// 输出文件流 buffer
    console.log(data.toString());// 可以使用toString()将buffer转为字符串
})


// 3.使用 Promise 封装
const p = new Promise(function (resolve, reject) {
    fs.readFile('./file/为学.md', function (err, data) {
        // 如果失败，则抛出错误
        if (err) throw err;
        // 更改路径导致失败
        // if (err) {
        //     reject(err)
        // }
        // 如果成功
        resolve(data);
    })
});

p.then(function (value) {
    console.log(value.toString());
}, function (reason) {
    console.log('读取文件失败')
})