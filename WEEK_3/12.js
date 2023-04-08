var numbers = [10, 20, 3, 16, 45];
var max = (min = numbers[0]); //10
numbers.forEach(function (number, idx) {
  //두번째 인자는 인덱스값
  //현재 돌아가는 숫자가 max보다큰 경우
  if (number > max) {
    max = number;
  }

  if (number < min) {
    min = number;
  }
});

console.log(max, min); // 45, 3
