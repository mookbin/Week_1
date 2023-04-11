//콜백함수는 함수다
//= this 바인딩을 글로벌로 한다(항상 전역객체를 바라봄)

//obj
// 2가지 속성
// 배열을 가짐
//logValues 라는 함수를 가짐
var obj = {
  vals: [1, 2, 3],
  logValues: function (v, i) {
    console.log("test starts");
    if (this === global) {
      console.log("this 가 global입니다. 원하지 않는 결과");
    } else {
      console.log(this, v, 1);
    }
    console.log("test ends");

    //       test starts
    // { vals: [ 1, 2, 3 ], logValues: [Function: logValues] } 1 1
    // test ends
  },
};

// method로서 호출
// obj.logValues(1, 2); //this 를 obj로 잡는다

//forEach, map, filter 인자는 기준이 되는 배열의 n번째 요소 그리고 그요소의 인덱스
[4, 5, 6].forEach(obj.logValues); // 메서드의 형태처럼 보이지만 obj.logValues를 차용한 것일 뿐 결국 function부터 시작하는 함수 자체를 넣은 것이므로 this는 global이다
