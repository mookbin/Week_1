// 배열

// 1. 생성
// 1-1. 기본 생성
// key -value pair 인 객체와 다르게 그냥 나열된 모습.
// 항상 index를 가지고 있음.(0부터 시작!)

// let fruits = ["사과", "바나나", "오렌지"];

// // 1-2. 크기 지정
// let number = new Array(5);

// console.log(number); // [ <5 empty items> ]

// console.log(fruits.length); // 배열에 length 정말 자주 쓰임! //3
// console.log(number.length); //5

// // 2. 요소 접근 (인덱스로)
// console.log(fruits[0]); // 사과
// console.log(fruits[1]); // 바나나
// console.log(fruits[2]); // 오렌지

// 3. 배열 메소드
// // 3-1. push (넣는 거)
// let fruits = ["사과", "바나나"];
// console.log("1 =>", fruits); //1 => [ '사과', '바나나' ]

// fruits.push("오렌지");
// console.log("2 =>", fruits); //2 => [ '사과', '바나나', '오렌지' ]

// 3-2. pop (마지막 요소 삭제)
// let fruits = ["사과", "바나나"];
// console.log("1 =>", fruits);

// fruits.pop();
// console.log("2 =>", fruits);

//3-3. shift (첫번째 요소 삭제)
// let fruits = ["사과", "바나나", "키위"];
// console.log("1 =>", fruits);

// fruits.shift();
// console.log("2 =>", fruits);

//3-4. unshift (맨 앞자리에 어떤 걸 추가하는 것)

// fruits.unshift("포도");
// console.log(fruits);
// let fruits = ["사과", "바나나", "키위"];
// // 3-5. splice
// fruits.splice(1, 1, "포도"); // 첫번째요소부터 시작해서 첫번째 요소까지를 삭제하고 포도로 갈아끼어줘
// console.log(fruits);

// 3-6. slice
// let slicedFruites = fruits.slice(1, 2); // (start,end) 해당되는 요소를 뽑아 새로운 배열로 만드는 것
//console.log(slicedFruites); // ["바나나"];

// let slicedFruites = fruits.slice(1, 3);
// console.log(slicedFruites); //[ '바나나', '키위' ]

// (1) forEach

// let numbers = [4, 1, 5, 4, 5];

// //매개변수 자리에 함수를 넣는 것 : 콜백 함수
// numbers.forEach(function (item) {
//   console.log("item입니다 =>" + item);
// });

// // (2) map 기존에 있었던 배열을 가공해서 새로운 배열을 생성하는 역할
// // 항상 원본 배열의 길이 만큼이 리턴된다.
// let newNumbers = numbers.map(function (item) {
//   return item * 2; //return 필수
// });
// console.log(newNumbers); // [ 8, 2, 10, 8, 10 ]

// (3) filter

// let numbers = [4, 1, 5, 4, 5];
// let filteredNumbers = numbers.filter(function (item) {
//   return item === 5; // return 필요함, 필터링할 조건이 들어간다
// });

// console.log(filteredNumbers); // [5,5] 조건에 해당하는 것만 리턴

//(4) find

let numbers = [4, 1, 5, 4, 5];
let result = numbers.find(function (item) {
  return item > 3; // 조건에 맞는 것중 첫번째로 들어오는 것만 반환
});

console.log(result); //4

//forEach 를 제외한 나머지는 다 리턴문 이 필요했다.
// return 문이 필요했던 것들은 모두 다 새로운 배열을 내뱉었다.
// 새로운 배열과 새로운 값을 리턴했다.
// 새로운 값으로 받아줘야 했다. ex) let filteredNumbers
