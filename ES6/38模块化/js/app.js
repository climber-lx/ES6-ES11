// 入口文件

// 模块引入
import * as m1 from './m1.js';
import * as m2 from './m2.js';
import * as m3 from './m3.js';
console.log(m1);
console.log(m2);
console.log(m3);

// 修改源文件后一定需要再次编译打包
m1.teach();
m2.findJob();
m3.default.change();

// 使用下载的npm包
import $ from 'jquery';
// 类似 ES5 的引入 const $ = require('jquery)
// 修改背景颜色
$('body').css('background', 'pink');
