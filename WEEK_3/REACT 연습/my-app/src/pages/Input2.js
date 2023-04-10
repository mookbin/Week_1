// input 받을 게 많을 때 하나씩 만드는데에는 한계가 있다 그래서.,.
import React, { useState } from "react";

const Input2 = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: "",
  });

  const { name, email, tel } = inputs;

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setInputs({
      ...inputs, //깊은복사 필요
      [id]: value,
    });
  };

  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={onChange} />
      </div>
      <div>
        <label>이메일</label>
        <input type="email" id="email" value={email} onChange={onChange} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={onChange} />
      </div>
      <p>이름:{name}</p>
      <p>이메일:{email}</p>
      <p>전화번호:{tel}</p>
    </div>
  );
};

export default Input2;
