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

// JavaScript에서 오브젝트와 관련된 자주 사용되는 함수들은 다음과 같아:

// Object.keys(obj): 오브젝트의 모든 키를 배열로 반환해. obj는 대상 오브젝트야.
// 예: Object.keys({ a: 1, b: 2 }) 결과는 ["a", "b"]

// Object.values(obj): 오브젝트의 모든 값을 배열로 반환해. obj는 대상 오브젝트야.
// 예: Object.values({ a: 1, b: 2 }) 결과는 [1, 2]

// Object.entries(obj): 오브젝트의 모든 키-값 쌍을 배열로 반환해. 각 배열 요소는 [key, value] 형태의 배열이야. obj는 대상 오브젝트야.
// 예: Object.entries({ a: 1, b: 2 }) 결과는 [["a", 1], ["b", 2]]

// Object.assign(target, ...sources): 하나 이상의 소스 오브젝트에서 대상 오브젝트(target)로 속성을 복사해. 병합된 오브젝트를 반환해.
// 예: Object.assign({ a: 1 }, { b: 2 }) 결과는 { a: 1, b: 2 }

// Object.freeze(obj): 오브젝트를 동결해. 동결된 오브젝트의 속성은 변경할 수 없어.
// 예: const frozenObj = Object.freeze({ a: 1 }) 그리고 frozenObj.a = 2를 시도하면, frozenObj.a는 여전히 1이야.

// Object.seal(obj): 오브젝트를 밀봉해. 밀봉된 오브젝트의 속성은 삭제할 수 없지만, 기존 속성의 값을 변경할 수 있어.
// 예: const sealedObj = Object.seal({ a: 1 }) 그리고 sealedObj.a = 2를 시도하면, sealedObj.a는 2로 변경돼. 그러나 delete sealedObj.a를 시도해도 sealedObj.a는 삭제되지 않아.

// Object.hasOwnProperty(prop): 오브젝트가 특정 속성을 가지고 있는지 여부를 반환해. prop는 검사하려는 속성 이름이야.
// 예: const obj = { a: 1 }에서 obj.hasOwnProperty("a") 결과는 true

// 이 외에도 많은 오브젝트 관련 함수들이 있지만, 위 함수들은 자주 사용되는 기본적인 것들이야.
