//5. 단축 속성명 property shorthand

//객체의 key와 value 값이 같다면, 생략 가능

// const name = "nbc";
// const age = "30";

// const obj = { name, 	age }
// const obj1 = {name : name, age: age };

// 6. 전개 구문 Spread Operator

// 배열이나 객체를 전개. 구조분해할당과 함께 가장 많이 사용되는 ES6 문법 중 하나

// 배열
// let arr = [1, 2, 3];

// let newArr = [...arr, 4];
// console.log(newArr); // [1,2,3,4]

// 객체
// let user = { name: "nbc", age: 30 };
// let user2 = { ...user };

// console.log(user); // { name: 'nbc', age: 30 }
// console.log(user2); // { name: 'nbc', age: 30 }

// 나머지 매개변수 rest parameter
function exampleFunc(a, b, c, ...args) {
  console.log(a, b, c);
  console.log(args);
}

exampleFunc(1, 2, 3, 4, 5, 6, 7);
// 1 2 3
// [ 4, 5, 6, 7 ]

// 템플릿 리터럴 Template literals
const testValue = "안녕하세요";
console.log(`Hello, World ${testValue}`);
console.log(`Hello, 
      My name
            is  JavaScript`); //멀티라인 ㅇ => 편의성
