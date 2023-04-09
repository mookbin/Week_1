//bind 메서드 ;
//this 를 바인딩하는 메서드
// call, apply 와는 좀 다르다! 즉시 호출하지 않음

//[목적]
//1. 함수에 This를 '미리' 적용한다.
//2. 부분 적용 함수

var func = function (a, b, c, d) {
  console.log(this, a, b, c, d);
};

func(1, 2, 3, 4); // global~~,1,2,3,4
// 이러한 결과를 방지하기 위해서 바인딩을 해준다

//함수에 this를 미리 적용!

var bindFunc1 = func.bind({ x: 1 }); // this로 바인딩할 객체를 써준다
bindFunc1(5, 6, 7, 8); //{ x: 1 } 5 6 7 8

//부분 적용 함수
var bindFunc2 = func.bind({ x: 1 }, 4, 5);

bindFunc2(6, 7); //{ x: 1 } 4 5 6 7

//name 프로퍼티
//"bound"라는 접두어가 붙어있다(bind가 되었다) 추적하기가 쉽다!

console.log(func.name); //func
console.log(bindFunc1.name); //bound func
console.log(bindFunc2.name); //bound func
