var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

// method 함수 안의 this는 항상 obj
obj.method(2, 3);

obj.method.call({ a: 4 }, 5, 6);
//obj.method.apply({ a: 4 }, [5, 6]); 매개변수만 대괄호로 묶어주는 것 빼고는 완전히 똑같다
