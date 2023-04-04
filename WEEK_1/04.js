//불리언(Boolean)
//true (참), false(거짓)
let bool1 = true;
let bool2 = false;

console.log(bool1); //true
console.log(typeof bool1); // boolean
console.log(bool2); // false
console.log(typeof bool2); // boolean

// undefined
// un : not, define : 정의하다
let x; //선언만 해놓고 값을 할당하지 않으면 나온다
console.log(x); // undefined
console.log(typeof x); //undefined

// null : 값이 존재하지 않음을 '명시적'으로 나타내는 방법
// null === undefined
let y = null;
console.log(y); // null
console.log(typeof y); //object

// object (객체) : key-value pair
let person = {
  name: "Choi",
  age: 20,
  isMarried: true, //value에 데이터타입 아무거나 가능!
};

console.log(person);
console.log(typeof person); //object

// array (배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입!
let number = [1, 2, 3, 4, 5];
// index : 위치에 대한 데이터를 가지고 있다.
let fruits = ["apple", "banana", "orange"]; // 0, 1, 2
