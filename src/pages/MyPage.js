// import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import movieIcon from "../img/movie.svg";
// import Board from "./Board";

class MyPage extends Component {
  render() {
    const { nickname } = this.props;
    // console.log(nickname)
    return (
      <div className="mypage_wrap">
        <div className="info">
          <p className="welcome">
            <span>{nickname}</span> 님 환영합니다.
          </p>
        </div>

        <div className="mypage_list">
          <div className="list">
            <Link to="/board">내가 쓴 게시글 목록</Link>
          </div>
          <div className="list">
            {/* <img src={movieIcon} alt="" /> */}

            <Link to="/movielist">내가 찜한 영화 목록</Link>
          </div>
          <div className="list">
            <Link to="/mypage/checkpassword">회원정보 변경</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPage;
