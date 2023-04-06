//예제 적용
//얕은 복사
var copyObject = function (target) {
  var result = {};

  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

var user = {
  name: "eunbin",
  gender: "female",
};

var user2 = copyObject(user);
//console.log(user2);
user2.name = "twobin";
//console.log(user2);

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다!");
}

console.log(user.name, user2.name);
console.log(user === user2);

// 중첩된 객체에 대해서는 완벽한 복사를 할 수 없는 것이 얕은 복사의 한계
