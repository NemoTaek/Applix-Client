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
          <p className="welcome">{nickname} 님 환영합니다.</p>
        </div>

        <div className="mypage_list">
          <div className="list">
            <Link to="/board">내가 쓴 게시글 목록</Link>
            {/* <Switch>
              <Route path="/board" component={Board} nickname={nickname}>
              </Route>
            </Switch> */}
          </div>
          <div className="list">내가 찜한 영화 목록</div>
          <div className="list">
            <Link to="/mypage/checkpassword">회원정보 변경</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPage;
