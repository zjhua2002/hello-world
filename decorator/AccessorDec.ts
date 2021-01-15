function methodAccessorDecorator(param1: boolean, param2?: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(param1 + ", " + param2 + ", " + target + ", " + propertyKey + ", " + JSON.stringify(descriptor));
    };
}

class MyThirdClass {
    private static _myName: string;

    @methodAccessorDecorator(true, "this is static")
    public static set myName(value: string) {
        this._myName = value;
    }

    public static get myName(): string {
        return this._myName;
    }

    private _age: number;

    @methodAccessorDecorator(false)
    public set age(value: number) {
        this._age = value;
    }

    public get age(): number {
        return this._age;
    }
}

MyThirdClass.myName = "hello";
console.log(MyThirdClass.myName);

var objThird = new MyThirdClass();
objThird.age = 28;
console.log(objThird.age);

// 我们可以发现，访问器装饰器返回的函数会在解释类的对应访问器时被调用一次，并可以得到装饰器的参数和被装饰的访问器的相关信息。
// 装饰器方法的调用只会在加载代码时执行一次，调用被装饰的访问器不会触发装饰器方法。

// Second example
// class Point {
//     private _x: number;
//     private _y: number;
//     constructor(x: number, y: number) {
//       this._x = x;
//       this._y = y;
//     }
  
//     @configurable(false)
//     get x() {
//       return this._x;
//     }
  
//     @configurable(false)
//     get y() {
//       return this._y;
//     }
//   }

//   function configurable(value: boolean) {
//     return function (
//       target: any,
//       propertyKey: string,
//       descriptor: PropertyDescriptor
//     ) {
//       descriptor.configurable = value;
//     };
//   }