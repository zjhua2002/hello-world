function log() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
      ) {
        return {
            value: function (...args: any[]) {
                var a = args.map(a => JSON.stringify(a)).join();
                var result = descriptor.value.apply(this, args);
                var r = JSON.stringify(result);
                console.log(`log: Call: ${propertyKey}(${a}) => ${r}`);
                return result;
            }
        };
      }
}

// target — The prototype of our class (or the constructor of the class if the decorated method is static).
// propertyKey — The name of the decorated method.
// descriptor — An object that holds the decorated function and some meta-data regarding it.
const log3 = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

    return {
        value: function (...args: any[]) {
            var a = args.map(a => JSON.stringify(a)).join();
            var result = descriptor.value.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`log3: Call: ${propertyKey}(${a}) => ${r}`);
            return result;
        }
    };
}

// Test only (can be ignored)
function log2() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
      ) {
        const className = target.constructor.name;
        console.log(`log2: Call: ${className}: ${propertyKey}(${target}) => ${descriptor}`);
      };

}

class TestClass {
    constructor() {}

    @log()
    foo(n: number, m: number) {
        return n * 2 * m;
    }

    // Test only (can be ignored)
    @log2()
    foo2(n: number) {
        return n * 2;
    }

    @log3
    foo3(n: number) {
        return n * 2;
    }
}

var c = new TestClass();

var r = c.foo(23, 3); //  "Call: foo(23) => 46"
console.log("c.foo", r); // 46

var r2 = c.foo2(23); //  "Call: foo(23) => 46"
console.log("c.foo2", r2); // 46

var r3 = c.foo3(23); //  "Call: foo(23) => 46"
console.log("c.foo3", r3); // 46
