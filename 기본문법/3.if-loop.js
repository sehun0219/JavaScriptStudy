if (true) {
  console.log("true");
} else if (20 > 10) {
  console.log("20 > 10");
} else {
  console.log("false");
}

// 반복문의 종류
// for, while, do while, for in, for of

// for
// for (시작조건; 종료조건; 증감조건) {
//   반복할 코드
// }

// 1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 1부터 10까지의 합
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// while
// while (조건) {
//   반복할 코드
// }

// 1부터 10까지 출력
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 1부터 10까지의 합
let sum2 = 0;
let i2 = 1;
while (i2 <= 10) {
  sum2 += i2;
  i2++;
}
console.log(sum2);

// do while
// do {
//   반복할 코드
// } while (조건)

// 1부터 10까지 출력
let i3 = 1;
do {
  console.log(i3);
  i3++;
} while (i3 <= 10);

// for in
// for (변수 in 객체) {
//   반복할 코드
// }

// 객체
const obj = {
  name: "홍길동",
  age: 20,
  address: "서울",
};

// 객체의 키를 출력
for (let key in obj) {
  console.log(key); // name, age, address
}

// 객체의 값 출력
for (let key in obj) {
  console.log(obj[key]); // 홍길동, 20, 서울
}

// for of
// for (변수 of 배열) {
//   반복할 코드
// }

// 배열
const arr = [1, 2, 3, 4, 5];

// 배열의 요소를 출력
for (let item of arr) {
  console.log(item); // 1, 2, 3, 4, 5
}

// 배열의 인덱스를 출력
for (let item of arr.keys()) {
  console.log(item); // 0, 1, 2, 3, 4
}

// map으로 조회
const testMapResult = [1, 2, 3, 4, 5].map((item) => item * 2);

console.log(testMapResult); // [2,4,6,8,10]
// filter로 조회
const testFilterResult = [1, 2, 3, 4, 5].filter((item) => item % 2 === 0);

console.log(testFilterResult); // [2,4]

const test1 = [1, 2, 3, 4, 5].filter((item) => item % 2 !== 0);
console.log("test1>>", test1);

// 할일을 완료한 것만 조회
// const todoList = [
//   { id: 1, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 3, content: 'Javascript', completed: false },
// ];

const completedList = todoList.filter((todo) => todo.completed);

