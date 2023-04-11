//무슨 제어권?
// 1. 호출 시점에 대한 제어권을 갖는다.
// setInterval : 반복해서 매개변수로 받은 콜백함수의 로직을 수행
var count = 0;

var timer = setInterval(function () {
  console.log(count);
  if (++count > 4) {
    clearInterval(timer); //setInterval의 반환값이 timer 가 된다 4가 되면 없애줘
  } // 4가 찍히고 나서 ++count가 4보다 커졌기 때문에 clearInterval로 로직을 빠져나오게 됨
  //++한 count의 값이 4보다 클 때
}, 300); //0.3초
// 두번째 매개변수에는 몇 번 간격으로 로직을 반복할지에 대한 초가 들어간다

// 위의 코드를 다른 식으로 바꾸어 보면
var count = 0;
var cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};
var timer = setInterval(cbFunc, 300); // 제어권이 setInterval에 있다
//cbFunc(); //제어권은 사용자에게 있다
