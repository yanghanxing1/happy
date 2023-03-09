/*
 * @Descripttion: 
 * @version: 
 * @Author: yangxing
 * @Date: 2023-03-08 17:11:13
 * @LastEditors: yangxing
 * @LastEditTime: 2023-03-09 11:17:07
 */
// 将同一个字母的值归类成一组
// function toAgroup(key, obj) {
//     let tempArr = []
//     for (let item1 of obj) {
//         if (item1.key === key) { tempArr.push(item1.val) }
//     }
//     return tempArr.length == 1 ? tempArr[0] : tempArr
// }
// //获取字母种类
// function getDiffKey(obj) {
//     let keyArr = []
//     for (const itemKey of obj) {
//         keyArr.push(itemKey.key)
//     }
//     let keySet = new Set(keyArr)
//     return [...keySet]
// }
// const obj = [
//     { key: "a", val: 1 },
//     { key: "a", val: 3 },
//     { key: "b", val: 2 },
//     { key: "b", val: 4 },
//     { key: "a", val: 5 },
// ]

// let res = {}
//     //根据字母种类数量执行
// for (const itemkey of getDiffKey(obj)) {
//     res[itemkey] = toAgroup(itemkey, obj)
// }
// console.log(res)
//     // 0,1,2,3,4
//     // 5,2,0,9,8
//     // 冒泡排序
// function Bubble(array) {
//     let temp = null;
//     for (let i = 0; i < array.length - 1; i++) {
//         let flag = false
//         for (let j = i - 1; j < array.length - 1; j++) {
//             //交换
//             if (array[j] > array[j + 1]) {
//                 temp = array[j]
//                 array[j] = array[j + 1]
//                 array[j + 1] = temp
//                 flag = true
//             }
//         }
//         if (flag === false) {
//             break
//         }
//     }
// }
// let array1 = [1, 2, 0, 33, 8]
// Buble(array1)
// console.log(array1);
// 闭包
// function a() {
//     let i = 0;
//     return (() => {
//         if (i === 2) {
//             i = 0
//         }
//         console.log(++i);
//     })
// }
// let foo = a()
// foo()
// foo()
// foo()
// foo()
console.log("省廊坊计算机复试的开发");
console.log("省廊坊计算机复试的开发");

// 防抖
// 回城
function preventShink(doSomething, delay) {
    let timer
    return function() {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            doSomething.apply(this, arguments)
        }, delay);
    }
}
// 节流
// cd技能
function cdStream(doSomething, delay) {
    let pre = 0
    return function() {
        let now = new Date()
        if (now - pre > delay) {
            doSomething.apply(this, arguments)
            pre = now
        }
    }
}