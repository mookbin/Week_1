//refactoring
//re : 다시
// factoring : 구조화
//비효율적인 코드를 효율적인 코드로 변경하는 작업

var addCoffee = function (name) {
  return function (prevName) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var newName = prevName ? `${prevName}, ${name}` : name;
        console.log(newName);
        resolve(newName);
      }, 500);
    });
  };
};

addCoffee("에스프레소")()
  .then(addCoffee("아메리카노"))
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라떼"));
