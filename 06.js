// 연산자 (+, -, *, /, %)

//1. 더하기 연산자
console.log(1 + 1); // 2
console.log(1 + "1"); // 11. 문자열로 변환

// 2. 빼기 연산자
console.log(1 - "2"); // -1
console.log(1 - 2); // -1

//3. 곱하기 연산자(*)
console.log(2 * 3); // 6
console.log("2" * 3); // 6

//4. 나누기 연산자 (/)
console.log(4 / 2); // 2
console.log("4" / 2); // 2

// 5. 나누기 연산자(/) vs  나머지 연산자(%)
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1

// 6. 할당 연산자 (assignment)
// 6-1. 등호 연산자 (=)
let x = 10;
console.log(x); //10

// 6-2. 더하기 등호 연산자 (+=)
x += 5; // x에다가 5를 더해줘
// x = x+5 와 같다
console.log(x); // 15

// 6-3 빼기 등호 연산자 (-=)
x -= 5;
// x = x-5
console.log(x); // 10

// 여기서 x를 -10으로!
x -= 20;
// x = x - 20;
console.log(x); // -10

let a = 10;
a *= 2;
console.log(a); //20

// 비교 연산자 (중요!)
// 값을 비교해서 true 혹은 false의 값을 낸다

// 1. 일치 연산자 (===)
// 타입까지 일치해야 true를 반환하는 연산자

// 숫자 2가 숫자 2와 같은가?
console.log(2 === 2); // true
console.log("2" === 2); // false
console.log("2" == 2); //true

// 2. 불일치 연산자(!==)
// 타입까지 일치해야 false를 반환하는 연산자

// 숫자 2가 숫자 2와 다르니? 아니!
console.log(2 !== 2); //false
console.log("2" !== 2); //true

// 3. 작다 연산자(<)
console.log("--------");
console.log(2 < 3); // true
console.log(2 <= 3); // true
console.log(3 <= 3); // true
console.log(4 <= 3); // false

// 4. 논리 연산자
//4-1. 논리곱 연산자(&&) : 모두 true일 때 true 반환
console.log("--------");
console.log(true && true); //true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//4-2. 논리 합 연산자(||) : 두 값 중 하나라도 true인 경우 true 반환
console.log("--------");
console.log(true || true); //true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 4-3. 논리 부정 연산자(!)
// :값을 반대로 바꿈
console.log(!true); //false
let b = true; //false
console.log(!b); // false

// 5. 삼항 연산자 (중요!)
// 조건에 따라 값을 선택한다.
let y = 10;
let result = y > 5 ? "크다" : "작다"; // true 이면 크다 false 면 작다
console.log(result); //크다

let z = 20;
let answer = z < 10 ? "작다" : "크다";
console.log(answer); //크다

// 6. 타입 연산자(typeof )
console.log(typeof "5"); //string
