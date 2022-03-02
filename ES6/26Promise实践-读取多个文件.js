// 引入 fs模块
const fs = require('fs');

// 嵌套式的获取
fs.readFile('./file/为学.md', (err, data) => {
    fs.readFile('./file/插秧诗.md', (err1, data1) => {
        fs.readFile('./file/观书有感.md', (err3, data3) => {
            let result = data + '\r\n' + data1 + '\r\n' + data3;
            console.log(result);
        })
    })
})

// 使用promise
const p = new Promise((resolve, reject) => {
    fs.readFile('./file/为学.md', (err, data) => {
        resolve(data);
    });
})

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./file/插秧诗.md', (err, data) => {
            resolve([value, data]);
        });
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./file/观书有感.md', (err, data) => {
            // 传入
            value.push(data);
            resolve(value);
        });
    })
}).then(value => {
    console.log(value.join('\r\n'));
})