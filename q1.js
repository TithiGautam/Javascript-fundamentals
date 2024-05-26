function outerFunction(func){
    let x = 10;
    function innerFunction(){
        console.log(func);
        console.log(x);
    }
    return innerFunction;
}
const myInnerFunction = outerFunction("hello world");
myInnerFunction();