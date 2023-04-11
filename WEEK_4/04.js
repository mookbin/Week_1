Array.prototype.mookbin = function (callback, thisArg) {
  // map 함수에서 return 할 결과 배열
  var mappedArr = [];

  for (var i = 0; i < this.length; i++) {
    //여기서 말하는 this는 mookbin의 호출 주체인 [1,2,3]이므로 this.length 는 3
    var mappedValue = callback.call(thisArg || global, this[i]);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
  //function 을 mookbni에 갖다 놓기 시작하면 어떤 배열이든지 .mookbin 으로 호출할 수 있다. map함수 처럼
};
var newArr = [1, 2, 3].mookbin(function (number) {
  return number * 2;
});
console.log(newArr); //[ 2, 4, 6 ]
