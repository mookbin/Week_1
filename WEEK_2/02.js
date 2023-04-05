// 4. 구조 분해 할당 : destructuring(de + structure + ing)
// de = not
// structure = 구조

// (1) 배열의 경우
// let [value1, value2] = [1, "new"];
// console.log("1", value1);
// console.log("2", value2);
// let arr = ["value1", "value2", "value3", "value4"];
// let [a, b, c, d = 4] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d); // 4가 아닌 value4가 찍힌다

// (2)객체의 경우
// let user = { name: "nbc", age: 30 };

// // 구조분해할당 // 객체 안에 있는 속성들, 즉 오른쪽 구조를 분해해서 각각 name, age에 할당해준다
// let { name, age } = {
//   name: "nbc",
//   age: 30,
// };

// console.log(name, age); // nbc 30

// 새로운 이름으로 할당
// let user = { name: "nbc", age: 30 };
// let { name: newName, age: newAge } = user;
// console.log(name, age); // ReferenceError: name is not defined
// console.log(newName, newAge); //nbc 30

let user = { name: "nbc", age: 30 };
let { name, age, birthDay } = user;
console.log(birthDay); // undefined

// let { name, age, birthDay = "today" } = user; // 초기값 정해주기 가능
// console.log(birthDay); // today
