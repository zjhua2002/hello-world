var Issue = "如果在javascript 中定义了两个名字相同的函数，则名字属于后定义的函数";
console.log("Issue = " + Issue);
function addSomeNumber (num) {
    return num + 100;   
}
function addSomeNumber (num){
    return num + 200;
}
var result = addSomeNumber(100);//300
console.log("result = " + result);

var Try1 = "可以根据传递的参数不一样，实现模拟重载的功能";
console.log("Try1 = " + Try1);
function sum(num) {
    if (typeof num === 'undefined') {
        return 0;
    }
    return num;
}
var a = sum(100);
console.log("a = " + a);

var b = sum();
console.log("b = " + b);

// This way needs to use 'alert' function which can be run in Browser context
// var Try2 = "在Javascript 高级程序设计(第三版)中提到，通过检查函数中参数的类型和数量并作出不同的反应，可以模仿方法的重载";
// console.log("Try2 = " + Try2);
// function doAdd (){
//     if(arguments.length === 1){
//         alert(arguments[0] + 10);
//     }else if (arguments.length === 2){
//         alert(arguments[0] + arguments[1]);
//         }
// }
// doAdd(10);//20
// doAdd(10,20);//30

var Try3 = "在JQuery之父John Resig写的《secrets of the JavaScript ninja》找到了一个绝佳巧妙的方法！那种方法充分的利用了闭包的特性！"
// addMethod函数，它接收3个参数，第一个为要绑定方法的对象，第二个为绑定的方法名称，第三个为需要绑定的方法（一个匿名函数）。函数体的的分析已经在注释里面了。
console.log("Try3 = " + Try3);

//addMethod
function addMethod(object, name, fn) {
    　　var old = object[name];
    　　object[name] = function() {
    　　　　if(fn.length === arguments.length) {
    　　　　　　return fn.apply(this, arguments);
    　　　　} else if(typeof old === "function") {
    　　　　　　return old.apply(this, arguments);
    　　　　}
    　　}
    }
    
    
    var people = {
    　　values: ["Dean Edwards", "Alex Russell", "Dean Tom"]
    };
    
    /* 下面开始通过addMethod来实现对people.find方法的重载 */
    
    // 不传参数时，返回peopld.values里面的所有元素
    addMethod(people, "find", function() {
    　　return this.values;
    });
    
    // 传一个参数时，按first-name的匹配进行返回
    addMethod(people, "find", function(firstName) {
    　　var ret = [];
    　　for(var i = 0; i < this.values.length; i++) {
    　　　　if(this.values[i].indexOf(firstName) === 0) {
    　　　　　　ret.push(this.values[i]);
    　　　　}
    　　}
    　　return ret;
    });
    
    // 传两个参数时，返回first-name和last-name都匹配的元素
    addMethod(people, "find", function(firstName, lastName) {
    　　var ret = [];
    　　for(var i = 0; i < this.values.length; i++) {
    　　　　if(this.values[i] === (firstName + " " + lastName)) {
    　　　　　　ret.push(this.values[i]);
    　　　　}
    　　}
    　　return ret;
    });
    
    // 测试：
    console.log(people.find()); //["Dean Edwards", "Alex Russell", "Dean Tom"]
    console.log(people.find("Dean")); //["Dean Edwards", "Dean Tom"]
    console.log(people.find("Dean Edwards")); //["Dean Edwards"]