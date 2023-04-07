// 런타임
// run + time
// 코드가 돌아가는 그 환경
//1. 노드
//2.브라우저

//전역환경에서 this 는
// -> node(global 객체)
// -> 브라우저(window 객체 )

var obj1 = {
  outer: function () {
    console.log(this); // (1)
    var innerFunc = function () {
      console.log(this); // (2), (3)
    };
    innerFunc();

    var obj2 = {
      innerMethod: innerFunc,
    };
    obj2.innerMethod();
  },
};
obj1.outer();
