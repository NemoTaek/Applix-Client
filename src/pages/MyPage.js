import axios from "axios";
import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Board from "./Board";

class MyPage extends Component {
  render() {
    const { nickname } = this.props;
    // console.log(nickname)
    return (
      <div className="mypage_wrap">
        <div className="info">
          <p className="welcome"><br /><br /><br />
            <span>{nickname}</span> 님 환영합니다.<br /><br /><br /></p>
        </div>

        <div className="mypage_list">
          <div className="list"><br /><br />
            <Link to="/board">내가 쓴 게시글 목록</Link>
            <br /><br /><br />
          </div>
          <div className="list"><br /><br />
            <Link to="/movielist">내가 찜한 영화 목록</Link>
            <br /><br /><br /></div>
          <div className="list"><br /><br />
            <Link to="/mypage/checkpassword">회원정보 변경</Link>
            <br /><br /><br />
          </div>
        </div>
      </div>
    );
  }
}

export default MyPage;
