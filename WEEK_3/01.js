//user 객체를 생성
var user = {
  name: "eunbin",
  gender: "female",
};

// 이름을 변경하는 함수, changeName을 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
//출력값 : 새로운 user객체
// 특징 : 객체의 프로퍼티(속성)에 접근해서 이름을 변경했다 -> 가변

var changeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

// 변경한 user정보를 user2 변수에 할당
// 가변이기 때문에 user1도 함께 영향 받음
var user2 = changeName(user, "twobin");

//결국 아래 로직은 skip
if (user !== user2) {
  console.log("유저 정보가 변경되었습니다");
}

console.log(user.name, user2.name); // twobin twobin
console.log(user === user2); //true
