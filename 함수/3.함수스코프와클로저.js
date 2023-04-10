const f3 = () => {
  const a = 1;
  console.log("f3");

  return () => {
    console.log(a);
  };
};

const test = f3();
test(); // 1

// 변수가 유효한 범위를 의미한다.
// 자바스크립트는 크게 2가지 스코프를 가진다.
// 1. 전역스코프
const aa = 1;

function test1() {
  console.log(aa);
}

test1();
// 외부에 있는 값은 안쪽에서 읽을 수 있다.
// 내부에 있는 값은 외부에서 읽을 수 없다.
// 2. 함수스코프
// 외부에 있는 값은 안쪽에서 읽을 수 있다.
// 내부에 있는 값은 외부에서 읽을 수 없다.
function test2() {
  const bb = 1; // 1

  return function () {
    console.log("bb2", bb); // 기억한다.
  };
}

const test3 = test2();
test3(); // 1

// -----------

function addMaker(num) {
  return function (num2) {
    return num + num2;
  }
}

const add5 = addMaker(5);
const add10 = addMaker(10);

add10(10); // 20
// functional programming
// 객체지향 프로그래밍
// 선언적 프로그래밍