// 산술 연산자
// +, -, *, /, %, **
// + 연산자는 문자열 연결 연산자로도 사용된다.

// 할당 연산자
// =, +=, -=, *=, /=, %=, **=

// 비교 연산자
// >, >=, <, <=, ==, ===, !=, !==
console.log(1 == true);
console.log(1 === true);
// 논리 연산자
// &&, ||, !

// 삼항 연산자
// 조건 ? 값1 : 값2

// typeof 연산자
// typeof 값

typeof 1; // number
typeof '1'; // string
typeof true; // boolean
typeof undefined; // undefined
typeof null; // object

// 자바스크립트가 이상하다...
// null인지 아닌지 확인하는 방법
console.log(null === null); // true
typeof {}; // object
typeof []; // object
// 배열은 객체의 일종이다.
// 왜냐?
// const testArray2 = [1, 2, 3]; // [1, 2, 3]
// const testArray = new Array(1, 2, 3); // [1, 2, 3]
// 배열 리터럴로 만들어도 내부적으로는 new Array()로 만들어진다.
const array = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
}

for (let index = 0; array.length > index; index++ ) { 
  console.log(array[index]);
}

typeof console.log; // function
typeof Symbol(); // symbol

