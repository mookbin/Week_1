import React, { useState } from "react";

const Counter = () => {
  const [num, setNumber] = useState(0);
  //num 은 0을 기본값으로 갖는 변수(const num=0 이라고 쓴 것과 유사)
  //setNumber은  num 값을 세팅할 수 있는 set 함수

  const increase = () => {
    setNumber(num + 1); //   num = num+ 1 이라고 쓴 것과 같다
  };

  const decrease = () => {
    setNumber(num - 1);
  };
  return (
    <div>
      <button onClick={increase}>+1</button>
      {/* 버튼 클릭할 때마다 함수 increase 호출 */}
      <button onClick={decrease}>-1</button>
      <p>{num}</p>
      {/* 동적인 값을 state라고 하고 state를 관리하는 useState 사용 */}
    </div>
  );
};

export default Counter;
