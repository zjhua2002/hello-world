// function log(target: Function, key: string, value: any) {

//     // target === C.prototype
//     // key === "foo"
//     // value === Object.getOwnPropertyDescriptor(C.prototype, "foo")

//     return {
//         value: function (...args: any[]) {

//             // convert list of foo arguments to string
//             var a = args.map(a => JSON.stringify(a)).join();

//             // invoke foo() and get its return value
//             var result = value.value.apply(this, args);

//             // convert result to string
//             var r = JSON.stringify(result);

//             // display in console the function call details
//             console.log(`Call: ${key}(${a}) => ${r}`);

//             // return the result of invoking foo
//             return result;
//         }
//     };
// }

function log() {
    return function (
        target: any,
        propertyKey: string,
        value: any
      ) {
        console.log(`Call: ${propertyKey}(${target}) => ${value}`);
      };

}

class Test {
    constructor() {}

    @log()
    foo(n: number) {
        return n * 2;
    }
}

var c = new Test();
var r = c.foo(23); //  "Call: foo(23) => 46"
console.log(r); // 46
