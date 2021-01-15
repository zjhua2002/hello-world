function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log("hit class decorator here");
}

@sealed
class MyClassOne {
    constructor(parameters?) {
        
    }

    a: number = 0;
    b: string = "hello";
}

var objOne = new MyClassOne();
// objOne.c = true;