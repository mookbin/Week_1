// 스코프, 전역변수, 지역변수, 화살표함수

// 함수 안에서 선언된변수. 지역변수. 함수 바깥에서 사용 불가
function printX() {
  let x = 10;
  console.log(x);
}

console.log(x); // 오류발생
printX();
