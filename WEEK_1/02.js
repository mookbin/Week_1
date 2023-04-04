// 데이터 타입
// runtime : run 하는 time
// 코드를 작성할 때가 아니라, 실제 코드가 실행될 때
// 터미널에 코드가 실행될 때
// 그 때, 데이터 타입이 결정된다.
// java : String a= "a,b,c"
// const a = "a,b,c"

// 1. 숫자
// 1-1. 정수
let num1 = 10;
console.log(num1); // 10
console.log(typeof num1); // number

// 1-2. 실수 (float).
let num2 = 3.14;
console.log(num2); // 3.14
console.log(typeof num2); // number

// 1-3. 지수형(Exp).
let num3 = 2.5e5; //2.5 x 10^5
console.log(num3); //250000
console.log(typeof num3); // number

// 1-4.
let num4 = " Hello" / 2; // 문자열을 2로 나눈다는 뜻
console.log(num4); // 결과는 NaN (Not a Number).
console.log(typeof num4); //number

// 1-5. Infinity (무한대)
let num5 = 1 / 0;
console.log(num5); //Infinity
console.log(typeof num5); //number

// 1-6. Infinity (무한대)
let num6 = -1 / 0;
console.log(num6); // -Infinity
console.log(typeof num6); //number
