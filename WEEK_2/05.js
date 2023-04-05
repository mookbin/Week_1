// 일급객체로써의 함수 (2)
// const person = {
//   name: "John",
//   age: 31,
//   isMarried: true,
//   sayHello: function () {
//     console.log(`Hello, My name is ${this.name}`);
//     //this 는 항상 자기 자신을 가리킨다.
//     //여기서 말하는 this는 person
//   },

// };

// person.sayHello();//Hello, My name is John

const person = {
  name: "John",
  age: 31,
  isMarried: true,
  sayHello: () => {
    console.log(`Hello, My name is ${this.name}`);
  },
};
person.sayHello(); //Hello, My name is undefined
//화살표함수는 this를 바인딩하지 않는다.
