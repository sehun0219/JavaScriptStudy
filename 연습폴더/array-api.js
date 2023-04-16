// q1) make a string out of an array
{
  const fruits = ["apple", "orange", "banana"];
  const result = fruits.join(", and ");
  console.log(result);
  console.log(result);
}

// q2) string to an array

{
  const fruits = "1,2,3,4,5";
  const result = fruits.split(",", 3);
  console.log(result);
}

// q3) revers array

{
  const arr = [1, 2, 3, 4, 5, 6];
  const result = arr.reverse();
  console.log(result);
  console.log(arr);
}

// q4)
{
  const arr = [1, 2, 3, 4, 5];
  const result = arr.slice(2, 4);
  console.log(result);
  console.log(arr);
}

// q5)
class student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new student("a", 29, true, 45),
  new student("b", 28, false, 80),
  new student("c", 30, true, 90),
  new student("d", 40, false, 66),
  new student("e", 18, true, 88),
];

// find students with the score 90
{
  const result = students.find((students) => students.score === 90);
  console.log(result);
}

// q6) make an array of enrolled students
{
  const result = students.filter((students) => students.enrolled);
  console.log(result);
}
// q7) make anarray of students scores only
{
  const result = students.map((student) => student.score);
  console.log(result);
}
// q8) check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// q9) average student scores
{
  const result = students.reduce((prev, curr) => {
    console.log("==============");
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

//q10) make string constant values of scores

{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}
