// 1.引入 fs 模块
const fs = require('fs');

// 读取

function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile('../ES6/file/为学.md', (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}

function readChayangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile('../ES6/file/插秧诗.md', (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}

function readGuanshu() {
    return new Promise((resolve, reject) => {
        fs.readFile('../ES6/file/观书有感.md', (err, data) => {
            // 如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data);
        })
    })
}

// 声明一个 async 函数
async function main() {
    console.log(00)
    const weixue = await readWeiXue();
    console.log(11)
    const chayangshi = await readChayangShi(weixue);
    console.log(22)
    const guanshu = await readGuanshu();
    console.log(33)

    console.log(weixue.toString());
    console.log(chayangshi.toString());
    console.log(guanshu.toString());
}
main();
// 如果相互有依赖也可以传值。
// 相当于放入了事件队列，同步的先执行。

// 打印结果
// 0
// 11
// 22
// 33
// 为学
// 天下事有难易乎?为之，则难者亦易矣；
// 不为，则易者亦难矣。
// 人之为学有难易乎?学之，则难者亦易矣；
// 不学，则易者亦难矣。
// 插秧诗
// 手把青秧插满田，低头便见水中天。
// 六根清净方为道，退步原来是向前。
// 观书有感
// 半亩方塘一鉴开，天光云影共徘徊。
// 问渠那得清如许？为有源头活水来。