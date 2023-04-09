var user = {
  name: "john",
  age: 20,
}; //name과 age라는 두개의 프로퍼티를 가지고 있는 객체 user

var getAged = function (user, passedTime) {
  //getAged 라는 함수는 두개의 인자를 받는다 age에서 passedTime만큼의 나이를 먹은 user 객체가 복사될 것이다
  // 여기를 작성해 주세요!
  //틀린 예시~(자바스크립트에서 객체는 직접 값을 저장하는 게 아니라 별도로 값을 저장하고 그 저장한 공간의  주소를 가져오는 참조형이기 때문에 이렇게 복사하면 안된다)
  //   var newUser = user;
  //   newUser.age += passedTime;
  //   return newUser; // "Failed! User same with past one"
  // 순회하면서 새로운 객체를 만들어야함

  // 성공 ("Passed! If you become older, you will be different from you in the past!")
  var newUser = {}; //빈객체 만들어주고
  for (var prop in user) {
    // user 객체 안에 있는 key가 prop에 계속 할당된다
    newUser[prop] = user[prop];
  }
  console.log("newUser =>", newUser); //newUser => { name: 'john', age: 20 }
  newUser.age += passedTime;
  return newUser;
};

var agedUser = getAged(user, 6);

//두개의 객체를 비교해서 메세지를 출력하는 코드
var agedUserMustBeDifferentFromUser = function (user1, user2) {
  if (!user2) {
    console.log("Failed! user2 doesn't exist!");
  } else if (user1 !== user2) {
    console.log(
      "Passed! If you become older, you will be different from you in the past!"
    );
  } else {
    console.log("Failed! User same with past one");
  }
};

agedUserMustBeDifferentFromUser(user, agedUser);
