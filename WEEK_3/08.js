// 명시적 this binding
// call,apply, bind
//call

var func = function (a, b, c) {
  console.log(this, a, b, c);
};

//no binding
//func(1, 2, 3);

//명시적 binding

func.call({ x: 1 }, 4, 5, 6); //{x:1}이라는 객체가 this로서 바인딩 된다.
