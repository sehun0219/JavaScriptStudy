const obj = {
  name: "ellie",
  age: 4,
  array: [1, 2, 3],
  hello: function () {
    console.log(this.name);
  },
};

obj.hello();

// 생성자 함수란?
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello = function () {
    console.log("hello", this.name, this.age);
  };
}

Person.prototype.hello = function () {
  console.log("hello", this.name, this.age);
};
// 먼 먼 머나먼 옛날에 쓰이던 방법
const p = new Person("ellie", 30);
