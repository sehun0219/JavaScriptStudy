// 1. shift: 첫 번째 요소를 배열에서 추출
const array = [1, 2, 3];
const value = array.shift();
console.log(value);
console.log(array);

// 2. pop: 마지막 요소를 배열에서 추출
const array2 = [1, 2, 3];
const value2 = array2.pop();
console.log(value2);
console.log(array);

// 3. unshift: 첫 번째 요소로 요소를 추가
const array3 = [1, 2, 3];
array3.unshift(0);
console.log(array3);

// 4. push: 마지막 요소로 요소를 추가
const array4 = [1, 2, 3];
array4.push(4);
console.log(array4);

// 5. splice: 인덱스로 요소를 추가, 삭제, 교체
const array5 = [1, 2, 3];
// 인덱스 2에 4를 추가
// 각 파라미터는
// 1. 시작 인덱스
// 2. 삭제할 요소의 수
// 3. 추가할 요소
array5.splice(2, 0, 4);
console.log(array5); // [1, 2, 4, 3]

// 6. concat: 여러 개의 배열을 하나의 배열로 합침
const array6 = [1, 2, 3];
const array7 = [4, 5, 6];
const concated = array6.concat(array7);
console.log(concated); // [1, 2, 3, 4, 5, 6]

// 7. map : 배열 안의 요소를 변형
const array8 = [1, 2, 3, 4, 5];
const squared = array8.map((item) => item * item);
console.log(squared); // [1, 4, 9, 16, 25]

// 8. forEach: 배열 안의 요소를 순회
const array9 = [1, 2, 3, 4, 5];
array9.forEach((item) => console.log(item));

// 9. indexOf: 특정 요소의 인덱스를 반환
const array10 = [1, 2, 3, 4, 5];
const index = array10.indexOf(3);
console.log(index); // 2

// 10. filter : 특정 조건을 만족하는 요소만 추출
const array11 = [1, 2, 3, 4, 5];
const even = array11.filter((item) => item % 2 === 0);
console.log(even); // [2, 4]

// 그럼 이어서 쓸 수 있나요?
const eventSquard = array11
  .filter((item) => item % 2 === 0)
  .map((item) => item * item); // 2, 4

// 11. reduce: 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환
const array12 = [1, 2, 3, 4, 5];
// 파라미터 설명
// 1. accumulator: 누산기
// 2. current: 현재 처리할 요소
// 3. index: 현재 처리할 요소의 인덱스
// 4. array: 현재 처리할 배열
const sum = array12.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15

// push(): 배열의 끝에 하나 이상의 요소를 추가하고, 새로운 배열의 길이를 반환합니다.
// pop(): 배열의 마지막 요소를 제거하고, 제거된 요소를 반환합니다.
// unshift(): 배열의 시작 부분에 하나 이상의 요소를 추가하고, 새로운 배열의 길이를 반환합니다.
// shift(): 배열의 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다.
// slice(): 배열의 일부분을 추출하여 새로운 배열로 반환합니다.
// splice(): 배열의 일부분을 제거하거나, 새로운 요소를 추가하고, 제거된 요소들의 배열을 반환합니다.
// concat(): 배열을 결합하여 새로운 배열로 반환합니다.
// join(): 배열의 모든 요소를 문자열로 변환하고, 이들을 연결하여 하나의 문자열로 반환합니다.
// reverse(): 배열의 순서를 반전합니다.
// sort(): 배열을 정렬합니다.
// filter(): 주어진 함수의 조건에 맞는 요소들만 추출하여, 새로운 배열로 반환합니다.
// map(): 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과를 새로운 배열로 반환합니다.
// reduce(): 배열의 각 요소를 주어진 함수로 처리하여 하나의 결과값을 반환합니다.
// every(): 배열의 모든 요소가 주어진 함수의 조건을 만족하는지 검사하여, 불리언 값을 반환합니다.
// some(): 배열의 요소 중 하나 이상이 주어진 함수의 조건을 만족하는지 검사하여, 불리언 값을 반환합니다.
