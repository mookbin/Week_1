import React from "react"; //jsx를 쓸 수 있게 함
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App"; // App.js를 의미
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root")); //root라는 애를가져와서 creatRoot로 만들어주고 그 안에 랜더링을 시킬건데 그 코드는 App.js에 있다
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode> // 엄격모드를 쓰겠다
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // 성능 측정을 위한 라이브러리 호출
