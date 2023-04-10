// 함수를 정의하는 방법
// 1. 함수 선언문
function add(x, y) {
  return x + y;
}

// 2. 함수 표현식
var addStr = function (x, y) {
  return x + y;
};

// 3. Function 생성자 함수
var add = new Function("x", "y", "return x + y");
// 쓰지마시라...

// 함수를 호출하는 방법
// 1. 함수 선언문으로 정의한 함수
add(2, 5); // 7

// 2. 함수 표현식으로 정의한 함수
addStr("coding", " everybody"); // 'coding everybody'

// 3. Function 생성자 함수로 정의한 함수
add(2, 5); // 7

// 함수 선언문으로 정의한 함수의 특징
// 함수 호이스팅
// 함수 선언문으로 정의한 함수는 코드가 실행되기 전에 먼저 실행 컨텍스트에 등록된다.\
a();
function a() {
  console.log("a");
}

// 함수 표현식으로 정의한 함수의 특징
// 함수 호이스팅이 발생하지 않는다.
// b(); // Uncaught TypeError: b is not a function
// const b = function () {
//   console.log('b');
// }

// 익명함수
// 함수 이름이 없는 함수
// 함수 이름이 없는 함수는 변수에 할당하여 사용한다.
// 함수 이름이 없는 함수는 함수 표현식으로 정의한다.
const b = function () {
  console.log("b");
};
b();

// 화살표 함수
// ES6에서 도입된 함수
// 함수 이름이 없는 함수를 간결하게 표현할 수 있다.

// 기본 문법
// (매개변수) => {함수 몸체}
// 람다 표현식
const add1 = (x, y) => {
  return x + y;
};

// 매개변수가 하나일 경우 괄호 생략 가능
const add2 = (a) => {
  return a + 10;
};

// 함수 몸체가 표현식 '하나'일 경우 중괄호와 return 생략 가능
const add3 = (x, y) => x + y;

// 이런건 안됨 바꿀수가없음...
const add4 = (x, y) => {
  console.log(x + y);
  return x + y;
};
