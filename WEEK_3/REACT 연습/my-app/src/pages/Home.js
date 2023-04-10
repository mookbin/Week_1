//크게 함수형 컴포넌트와 클래스 컴포넌트가 있는데

//함수형
// import React from "react";
// function Home() {
//   return <h1> 홈 화면입니다</h1>;
// }
// export default Home;

// 화살표 함수로
import React from "react";
const Home = () => {
  return <h1> 홈 화면입니다</h1>;
};
export default Home;

// //클래스
// import React, { Component } from "react";

// class Home extends Component {
//   // 추가한 커포넌트를 상속받는다
//   render() {
//     //render라는 함수를 이용한다

//     return <h1>Home 화면입니다 2</h1>;
//   }
// }
// export default Home;

// 함수형을 많이 사용하는 추세이다.
