//import a = require("temp/test");
// tsはファイルそのものがモジュールにはならない
// なんらかの方法でexportする必要がある
import a = require("./temp/test");

const test:string = 'test'
console.log(test)
const c = a.b
//use strictを使っているので
//thisはundefinedとなる
c()