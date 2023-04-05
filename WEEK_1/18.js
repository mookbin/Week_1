// while

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// for (초기값; 조건; 증감) {

// }

// while 문을 활용해서, 3초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예

// let i = 3;
// while (i < 100) {
//   if (i % 5 === 0 && i >= 5) {
//     console.log(i + "는 5의 배수입니다!");
//   }
//   i++;
// }

// do ~ while
// 일단 한 번 코드를 실행함 그다음 while을 돌림

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // 5가 되면 스탑
  }
  console.log(i);
}

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue; // 0~4까지 정상적으로 찍히다가 5가 되면 밑으로 흐르지 않고 다음 순서 for문, i로 넘어감
//   }
//   console.log(i);
// }
