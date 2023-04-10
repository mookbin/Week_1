import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |
        <Link to="/counter">Counter</Link>|<Link to="/input "> Input</Link>|
        <Link to="/input2"> input2</Link> | <Link to="/list"> List</Link>
        {/*같은 /about 을 가지고 있는 라우터를 찾아서 연결 */}
        {/*link는  a태그라고 보면 된다 */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input2" element={<Input2 />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div> //jsx 문법 html처럼 보이지만 아님~
    //누를 때마다 원하는 컴포넌트를 보여주게 하는 것을 라우팅 처리라고 한다
    //라우팅을 하려면 모듈을 하나 설치해야함 //
    //my-app 으로 터미널 창 옮겨서 npm install react-router-dom@6 // 버전 6
  );
}

export default App;
