// 조건부 실행

let x = 10;

// if (x > 0) {
//   console.log("x는 양수입니다.");
// }

x > 0 && console.log("x는 양수입니다.");
// && 조건 때문에 뒤 내용이 실행되고 있는 것

// or 조건(||)
//삼항 연산자와 단축평가
let y; // y에는 undefined
let z = y || 20; // y가 undefined 이면 기본값을 20으로 세팅해줘
console.log(z); // 20
