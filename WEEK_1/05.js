// 형 변환
// 형태 -> 바꾼다
// 명시적 형 변환, 암시적 형 변환

// 1. 암시적 형 변환
//1-1. 문자열
let result1 = 1 + "2";
console.log(result1); //12
console.log(typeof result1); //string

let result2 = "1" + true;
console.log(result2); //1true
console.log(typeof result2); //string

// {}, null, undefined + "1" => 문자열

//1-2. 숫자
let result3 = 1 - "2";
console.log(result3); //-1
console.log(typeof result3); //number

let result4 = "2" * "3";
console.log(result4); // 6
console.log(typeof result4); // number

// 더하기 연산자가 아닌 다른 연산자(빼기, 곱하기, 나누기 등 )가 나왔을 때는 숫자가 우선시 된다 .
// 문자와 문자가 와도 숫자가 된다 .

// 2. 명시적 형 변환
// 2-1. Boolean
console.log(Boolean(0)); //0이라는 숫자를 Boolean 타입으로 바꾸고 싶다.
console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
// 전부 false
console.log("----------");
console.log(Boolean("false"));
console.log(Boolean({}));
// 전부 true
//값이 있는 문자열은 true가 나온다.
//객체도 true가 나온다.

// 2-2. 문자열
let result5 = String(123);
console.log(typeof result5);
console.log(result5); //123

let result6 = String(true);
console.log(typeof result6);
console.log(result6); //true

let result7 = String(false);
console.log(typeof result7);
console.log(result7); // false

let result8 = String(null);
console.log(typeof result8);
console.log(result8); // null

let result9 = String(undefined);
console.log(typeof result9);
console.log(result9); // undefined
// 전부 String 타입

// 2-3. Number
let result10 = Number("123");
console.log(result10); //123
console.log(typeof result10); //Number
