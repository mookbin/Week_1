// 무슨 제어권?
// 2. 인자에 대한 제어권을 갖는다.
// map 함수
var newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  //첫번째 인자는 하나하나 순회, 두번째 인자는 인덱스 값이 순서대로 들어간다
  // 10 0
  // 20 1
  // 30 2

  return currentValue + 5;
});
console.log(newArr); //[ 15, 25, 35 ]
// return 이 없을 때의 console.log(newArr); 결과는? [ undefined, undefined, undefined ]
// return이 없으면 무조건 무엇인가를 할당해야 하기 때문에 undefined라도 할당한 것

// index, currentValue 라는 것은 사람이 이해할 수 있는 변수명일 뿐 컴퓨터가 인식할 수 있는 것은 매개변수의 위치이기 때문에 index와 currentValue의 자리를 바꿔서 써도 컴퓨터는 currentValue를 인덱스 값으로 인식한다.  => 인자에 대한 제어권은 map이 가지고 있다.
