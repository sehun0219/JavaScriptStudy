var string1 = '';
var number1 = 1;
var boolean1 = true;
var null1 = null;
var undefined1 = undefined;
var object1 = {};
var array1 = [];
var function1 = function () { };
console.log('string1: ', string1);
console.log('number1: ', number1);
console.log('boolean1: ', boolean1);
console.log('null1: ', null1);
console.log('undefined1: ', undefined1);
console.log('object1: ', object1);
console.log('array1: ', array1);
console.log('function1: ', function1);
string1 = 'hello';
// --------------------------------

// node let-const.js

// let, const
let string2 = '';
string2 = 'helloooo';

const PI = 3.14159;
// PI = 1; // error
// let과 const는 블록 스코프를 가진다.
var a = 1;
function hello() {
  a = 2;
}

var b = 3
if (true) {
  b = 1;
}

// --------------------------------

let number2 = 1;
if (true) {
  number2 = 2;
  console.log('number2: ', number2);
}

// --------------------------------

if (true) {
  let number3 = 1;
}
console.log('number3: ', number3);