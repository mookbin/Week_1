// 2. 문자 : string(문자열 = 문자의 나열)
// ' ' = " "

// * 주석 처리 단축어 : ctrl + /

let str = "Hello, World!";
// console.log(str);
// console.log(typeof str); // string

// 2-1. 문자열 길이 확인하기
console.log(str.length); // 13.  띄어쓰기 포함

// 2-2. 문자열 결합하기
let str1 = "Hello, ";
let str2 = "World!";
let result = str1.concat(str2);
console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World!";
console.log(str3.substr(7, 5)); // .substr(start number, 몇 개까지)
console.log(str3.slice(7, 12)); // .slice(start number, end number)

// 2-4. 문자열 검색
let str4 = "Hello, World!";
console.log(str4.search("World")); //7. 시작되는 지점(start number)을 찾아준다

//2-5. 문자열 대체
let str5 = "Hello, World!";
let result01 = str5.replace("World", "JavaScript"); // .replace(기존 문자열, 대체 문자열)
console.log(result01);

//2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(","); // .split(자르는 기준이 될 문자)
console.log(result02); // [ 'apple', ' banana', ' kiwi' ].  배열 형태로 각각 분할되어 들어감
