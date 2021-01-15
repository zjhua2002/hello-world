function propDecorator(param1: boolean, param2?: string) {
    return function (target: any, propertyKey: string) {
        console.log(param1 + ", " + param2 + ", " + target + ", " + propertyKey);
    };
}

class MyFourthClass {
    @propDecorator(false, "Hi")
    public static A: number = 0;

    @propDecorator(true)
    public a: string = "hello";
}

console.log(MyFourthClass.A);
var objFour = new MyFourthClass();
console.log(objFour.a);

// 我们可以发现，属性装饰器返回的函数会在解释类的对应属性时被调用一次，并可以得到装饰器的参数和被装饰的属性的相关信息。
// 装饰器方法的调用只会在加载代码时执行一次，调用被装饰的属性不会触发装饰器方法