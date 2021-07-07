const myvar = require('./myvar')
// 내장 모듈의 경우는 경로 지정을 하지 않는다

console.log(myvar.a)

const setVar = new myvar()
console.log(setVar.hello)