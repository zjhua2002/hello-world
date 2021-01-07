// A "callback" is any function that is called by another function which takes the first function as a parameter. （在一个函数中调用另外一个函数就是callback）
var Try1 = "以下是一个最简单的例子:";
console.log("Try1 = " + Try1);
function a() {
    return 1;
}
 
function b(aa) {
    return 2 + aa;
}
 
//调用：
var c=0;
c = b(a()); //A是个函数，但它又作为一个参数在B函数中被调用
console.log(c); //结果显示3

var Try2 = "下面再引入另一个概念：异步" + 
"Issue: 因为JS是一种异步执行语言，尽管timer函数内让a=6了，但是JS不会死等时间结束再跳出函数，而是马上就会执行下一步语句(即调用bb函数)，" + 
"但这时候3秒钟根本就没结束，a还没有被重新赋值，所以打印出来还是为0" ;
console.log("Try2 = " + Try2);
var a = 0;
 
function bb(x) {
    console.log(x);
}
 
function timer(time) {
    setTimeout(function () {
        a=6;
    }, time);
}
 
//调用:
console.log(a);
timer(3000);
bb(a);

var Try3 = "用回调函数可以解决这个问题:";
console.log("Try3 = " + Try3);
var c = 0;
 
function cc(x) {
    console.log(x);
}
// this function needs to be run in Browser context
function timer(time, callback) {
    setTimeout(function () {
        c = 6;
        callback(c);
    }, time);
}
 
//调用:
console.log(c);
timer(3000,cc);

console.log(c);
timer(3000, function (x) {
    console.log(x);
});