function methodDecorator(param1: boolean, param2?: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(param1 + ", " + param2 + ", " + target + ", " + propertyKey + ", " + JSON.stringify(descriptor));
    };
}

class MyClassTwo {
    @methodDecorator(true, "this is static")
    public static sFunc(): void {
        console.log("call static method");
    }

    @methodDecorator(false)
    public func(): void {
        console.log("call method");
    }
}

MyClassTwo.sFunc();
MyClassTwo.sFunc();

var objTwo = new MyClassTwo();
objTwo.func();
objTwo.func();