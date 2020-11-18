import React from "react";
import "./About.css";

//class로 변경

// 클릭하면 isEventActive : true → 클래스명에 animated가 붙는다.
// 1초후에 원상복귀 시키기?

function About(props) {
  // const all = (ele) => document.querySelectorAll(ele);
  const one = (ele) => document.querySelector(ele);
  const slide = (_) => {
    const wrap = one(".about-wrap"); // .slide 선택
    const target = wrap.children[0]; // .slide ul 선택
    const len = target.children.length; // .slide li 갯수
    // .slide ul의 너비 조정
    target.style.cssText = `width:calc(100% * ${len});display:flex;transition:1s`;
    // .slide li의 너비 조정
    Array.from(target.children).forEach(
      (ele) => (ele.style.cssText = `width:calc(100% / ${len});`)
    );
    // 화면 전환 실행
    let pos = 0;
    setInterval(() => {
      pos = (pos + 1) % len; // 장면 선택
      target.style.marginLeft = `${-pos * 100}%`;
    }, 2000); // 1500 = 1500ms = 1.5sec. 즉, 1.5초 마다 실행
  };
  window.onload = function () {
    slide();
  };

  return (
    <div className="about-wrap">
      <ul>
        <li className="section1">
          <h3>
            Hello! <strong>APPLIX</strong>
          </h3>
        </li>
        <li className="section2">
          <h3>
            WOW!! <strong>APPLIX</strong>
          </h3>
        </li>
        <li className="section3">
          <h3>
            Enjoy! Movie <strong>with APPLIX</strong>
          </h3>
        </li>
        <li className="section4">
          <h3>
            Happy <strong>with APPLIX</strong>
          </h3>
        </li>
      </ul>
    </div>
  );
}

export default About;
