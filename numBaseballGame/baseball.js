const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask() {
  rl.prompt();
}

let numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let pickList = [];

for (let i = 0; i < 3; i++) {
  let pick = Math.floor(Math.random() * numList.length);
  //console.log(pick);

  // Math.random(); //  Math.random() 함수는 0.0000 ~ 0.9999999999999999 까지 범위에서 임의의 숫자 1개를 만들어 내는 기능.

  //Math.random() * 10;  // 생성된 숫자에 10을 곱하면 0 ~ 9.99999 범위의 수가 만들어 진다. 이 숫자를 Math.floor() 함수에게 전달하면 0 ~ 9까지 범위의 정수를 만들어서 return 한다.

  //  Math.floor(숫자) // 내림하는 함수
  // numList.length // 10
  //Math.floor(Math.random() * numList.length); = 0~9 사이의 정수

  pickList = pickList.concat(numList.splice(pick, 1));
  //console.log(pickList);
}
// 여기까지 하면 랜덤한 숫자 세 개가 pickNum에 들어가게 하고 이미뽑힌 건 제외하고 돌릴 수 있다
//concat() 함수는 텍스트나 선택된 여러 개의 범위를 입력 순서대로 결합시켜서 반환해주는데 여러 배열을 하나로 만들어주는 역할도 해줌

let strike = 0;
let ball = 0;
let count = 0;

while (true) {
  rl.question("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!", (answer) => {
    //TODO: 입력 받은 후 할 작업 작성
    if (answer.length != 3) {
      rl.write("3자리 수를 입력해주세요");
    }
    let inputArr = answer.split(""); //입력받은 값을 세 개로 따로 나눠주자
    // split()함수는 문자열을 쪼개서 배열로 만들어준다 "" 구분자는 한글자씩 구분하라는 뜻

    strike = 0;
    ball = 0;
    count++;
    //console.log(inputArr);
    //console.log(count);
    // // 이제 컴퓨터가 만든 숫자와 입력받은 숫자를 비교해야됨

    for (let a = 0; a < 3; a++) {
      for (let b = 0; b < 3; b++) {
        if (inputArr[a] == pickList[b] && a == b) {
          strike++;
        } else if (a != b && inputArr[a] == pickList[b]) {
          ball++;
        }
      }
    }
    if (strike === 3) {
      console.log(count - 1 + "번 만에 맞추셨습니다. 게임을 종료합니다.");
    } else {
      console.log(
        `${count} 번째 시도 : ${answer}
      ${ball}B${strike}S `
      ); // join() 배열 모든 요소를 연결해서 하나의 문자열로 만들기
      ask();
    }

    rl.on("close", () => {
      console.log("종료");
      process.exit(0);
    }); //close()를 호출하지 않으면 무한 반복
  });
  break;
}
