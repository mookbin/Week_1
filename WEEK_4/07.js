//bind
// call과 apply는 괄호 열고 닫자마자 바로 실행, 즉시실행하는 반면
// bind 는 this를 바인딩해서 새로운 함수를 return 해준다
//함수를 만들어놓을 때 유용

var obj1 = {
  name: "obj1",
  func: function () {
    console.log(this.name);
  },
};
//방법 1.
// setTimeout(function () {}, 1000);
//첫번째 인자 함수, 두번째 인자 초
//첫번째 인자의 함수 부분에 bind를 이용해서 새로운 함수를 return 해주자
setTimeout(
  obj1.func.bind(
    //여기에 우리가 원하는 this를넣어주자,
    obj1
    // obj1이 this로 묶이는것
    //this는 무조건obj1이 된다
  ),
  1000
);

// 출력 값 : 1초 뒤에 obj1이 출력

//방법 2. 함수 자체를 바인딩

var obj2 = { name: "obj2" };
setTimeout(obj1.func.bind(obj2), 1500); //1.5초
// obj.func를 실행할 때 this는 obj2를 바인딩 해준다
//obj2 가 출력된다
//어떤 this든 원하는대로 바인딩 가능

//결국 바인드 쓰는게 제일 좋다고 생각
