function exampleRegex(regex,str){
    return regex.test(str);
}
console.log(exampleRegex(/hello/,"hello world"));
console.log(exampleRegex(/[0-9]/,"chawala"));