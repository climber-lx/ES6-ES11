// 之前使用，不管啥时候用直接加载。
// import * as m1 from './hello.js';
// 需求：使用饿时候在加载，类似懒加载功能。

const btn = document.getElementById('btn');

btn.onclick = function () {
    import('./hello.js').then(module => {
        console.log(module);
        module.hello();
    })
}