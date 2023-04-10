// 자바스크립트에서 함수는 일급객체이다.
// 함수는 변수에 할당할 수 있다.
const f1 = () => {
  console.log("f1");
};

// 함수는 다른 함수의 인자로 전달할 수 있다.
const f2 = (f) => {
  console.log("f2");
  f();
};

f2(f1);
// [1,2,3,4].filter(() => {
//   console.log('map');
// })
// c#의 람다식과 비슷하다.

// 함수는 함수 리턴할 수 있다.
console.log("--------------------");

const f3 = () => {
  console.log("f3");
  return () => {
    console.log("return f3 ");
  };
};

const f4 = f3();
f4();

f3()();
