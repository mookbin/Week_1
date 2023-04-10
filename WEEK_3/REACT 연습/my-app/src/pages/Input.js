import React, { useState } from "react";

const Input = () => {
  const [txtValue, setTxtValue] = useState("");

  const onChange = (e) => {
    setTxtValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={txtValue} onChange={onChange} />
      {/* onChange가 일어날 때마다 */}
      <br />
      <p>{txtValue}</p>
    </div>
  );
};

export default Input;
