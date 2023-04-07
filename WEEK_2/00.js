function solution(phone_number) {
  let answer = "";
  let newArray = [];

  for (let i = 0; i < phone_number.length - 4; i++) {
    newArray += "*";
  }

  answer = newArray.join("") + phone_number.slice(-4);

  return answer;
}

let phone_number = ["01022225693"];
console.log(newArray);
