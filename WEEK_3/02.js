//user 객체를 생성
var user = {
  name: "eunbin",
  gender: "female",
};

// 이름을 변경하는 함수 정의
// 입력값 : 변경대상 user 객체, 변경하고자 하는 이름
//출력값 : 새로운 user객체
// 특징 : 객체의 프로퍼티(속성)에 접근하는 것이 아니라, 아예 새로운 객체를 반환 -> 불변

var changeName = function (user, newName) {
  return {
    name: newName,
    gender: user.gender,
  };
};

// 변경한 user정보를 user2 변수에 할당
// 불변이기 때문에 user1은 영향 x
var user2 = changeName(user, "twobin");

//결국 아래 로직 수행
if (user !== user2) {
  console.log("유저 정보가 변경되었습니다");
}

console.log(user.name, user2.name); // eunbin twobin
console.log(user === user2); //false

// 하지만 이게 최선의 방법은 아님! 속성의 개수가 많아지면 return 해야하는 것도 많아지면서
// 하드코딩이 너무 많아지기 때문 (유지보수 힘듦)
