"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 统一暴露
var school = "尚硅谷";

function findJob() {
    console.log('我们可以开课');
}

// 对象的方式暴露【简化写法】
exports.school = school;
exports.findJob = findJob;