// var a = 1;
// function outer() {
//   function inner() {
//     console.log(a); //undefined
//     var a = 3;
//   }
//   inner(); // ---- 2번
//   console.log(a); //1
// }
// outer(); // ---- 3번
// console.log(a); // 1

//action point 1 : 매개변수 다시 쓰기(JS 엔진은 똑같이 이해한다)
//action point 2 : 결과 예상하기
//action point 3 : hoisting 적용해본 후 결과를 다시 예상해보기

function a(x) {
  console.log(x); //1
  var x;
  console.log(x); //1
  var x = 2;
  console.log(x); //2
}
a(1);

function a() {
  var x = 1;
  console.log(x);
  var x;
  console.log(x);
  var x = 2;
  console.log(x);
}
a(1);

function a() {
  var b; // 변수 선언부 호이스팅
  function b() {} // 함수 선언은 전체를 호이스팅

  console.log(b); //function
  b = "bbb"; // 변수의 할당부는 원래 자리에

  console.log(b); //'bbb'
  console.log(b); //'bbb'
}
a();
