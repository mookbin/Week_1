// // [콜백 함수 내부의 this에 다른 값 바인딩하기]
// // 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까?
// //콜백 함수 내부의 this에 다른 값을 바인딩 하는 방법

// //closure 방식 //현재의 함수가 끝났음에도 불구하고 영향을 끼친다.
// var obj1 = {
//   name: "obj1",
//   func: function () {
//     var self = this; //이 부분!
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// var callback = obj1.func();
// setTimeout(callback, 1000);

// var obj1 = {
//   name: "obj1",
//   func: function () {
//     console.log(obj1.name);
//   },
// };
// setTimeout(obj1.func, 1000);

// //obj.func를 setTimeout에 바로 넣었다
// // 전형적인 하드코딩
// //결과만을 위한코딩...10점짜리 코딩 (지양!) this를 이용해서 할 수 있는 것들을 다 버리는 코드다~

// var obj1 = {
//   name: "obj1",
//   func: function () {
//     var self = this; //이 부분!
//     //this를 self 에 할당하고
//     //그 self를return 하는 ... 즉,
//     // 그 self에서 name 을 console로 찍어서
//     // 그 console로 찍는 함수를 return하는 것
//     //그래서 콜백의 실행한 결과를 담아서 콜백함수로 넣어주는
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

var obj1 = {
  name: "obj1",
  func: function () {
    var self = this; //이 부분!
    return function () {
      console.log(self.name);
    };
  },
};

var obj3 = { name: "obj3" };
var callback3 = obj1.func.call(obj3);
//obj1에 있는 func를 즉시 실행하게끔 제어
setTimeout(callback, 2000);

// var obj2 = {
//   name: "obj2",
//   func: obj1.func,
// };

// var callback2 = obj2.func();

// // obj2.func() 에
// //  func: function () {
// //     var self = this; //이 부분!
// //     return function () {
// //       console.log(self.name);
// //     };
// //   },
// //를 넣은 것과 같다
// setTimeout(callback2, 1500);
