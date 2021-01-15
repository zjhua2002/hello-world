function paramDecorator(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log(target + ", " + <any> propertyKey + ", " + parameterIndex);
}

class MyFifthClass {
    public func(@paramDecorator a: number, @paramDecorator b: string = "hello", @paramDecorator c?: boolean): void {
        console.log("call method: ", a, b, c);
    }
}

var objFifth = new MyFifthClass();
objFifth.func(1);
objFifth.func(2);

// 我们可以发现，参数装饰器返回的函数会在解释方法的参数时被调用一次，并可以得到参数的相关信息。我们有3个参数就调用了3次。
// 装饰器方法的调用只会在加载代码时执行一次，调用被装饰的参数的方法不会触发装饰器方法