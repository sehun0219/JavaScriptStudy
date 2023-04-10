const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [1, 2, 3, 4, 5, 6, 7];
const users = [
  {
    name: "멍멍이",
  },
  {
    name: "야옹이",
  },
  {
    name: "멍뭉이",
  },
  {
    name: "야옹뭉이",
  },
  {
    name: "멍멍뭉이",
  },
];

for (let i = 0; i < users.length; i++) {
  // const user = {name: '멍멍이'}
  // console.log(user.name)
  console.log(users[i].name);
}

// for in
// console.log(array2[0]);

// // for (let i = 1; i <= 10; i++) {
// //     console.log(i);
// //   }

for (let i = 0; i < array2.length; i++) {
  console.log(array2[i]);
}

for (item of array2) {
  console.log(item);
}

const todoList = [
  {
    id: 1,
    text: "자바스크립트 입문",
    done: true,
  },
  {
    id: 2,
    text: "리액트 입문",
    done: false,
  },
  {
    id: 3,
    text: "리덕스 입문",
    done: false,
  },
  {
    id: 4,
    text: "nextjs 입문",
    done: false,
  },
];

for (let i = 0; i < todoList.length; i++) {
  const todoItem = todoList[i];
  if (todoItem.done === true) {
    console.log(todoItem.text);
  }
}
