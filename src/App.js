import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// pages
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import CheckPassword from "./pages/CheckPassword";
import ModifyInfo from "./pages/ModifyInfo";
import Login from "./pages/Login";
import Board from "./pages/Board";
import NewPost from "./pages/NewPost";
import ViewPost from "./pages/ViewPost";
import MovieList from "./pages/MovieList";
// components
import Nav from "./components/Nav";
import Logout from "./components/Logout";
import axios from "axios";

class App extends Component {
  state = {
    isLogin: false,
    isModalopen: false,
    userid: null,
  };

  onLogin = async (userid, accessToken) => {
    // 로그인이 되면 axios Headers 인증 키에 accessToken 값 설정
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken.token}`;

    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
      userid: userid,
    }));
    console.log("현재 로그인상태", this.state.isLogin);
    // console.log("accessToken : ", accessToken.token);
    // console.log("axiosHeaders : ", axios.defaults.headers);
  };

  //로그아웃 핸들링 - 서버
  handleLogoutClose = async () => {
    // console.log( "Authorization : ", axios.defaults.headers.common.Authorization);
    try {
      // 세션 파괴 요청 → 쿠키 삭제 요청 : 현재 헤더에는 실렸는데 서버와 통신 체크요망
      await axios.post("http://3.35.208.49:5000/signout");
      // state 재세팅
      this.setState((prevState) => ({
        isLogin: !prevState.isLogin,
        isModalopen: !prevState.isModalopen,
        userid: null,
      }));
    } catch (error) {
      throw error;
    }
  };

  setisModalOpen = () => {
    this.setState((prevState) => ({
      isModalopen: !prevState.isModalopen,
    }));
  };

  setisModalClose = () => {
    this.setState((prevState) => ({
      isModalopen: !prevState.isModalopen,
    }));
    document.location.href = "/";
  };

  render() {
    const { isLogin, isModalopen, userid } = this.state;
    //핸들링 함수
    const {
      handleLogoutClose,
      setisModalClose,
      setisModalOpen,
      onLogin,
    } = this;

    return (
      <div className="wrap">
        <header>
          <Nav
            isLogin={isLogin}
            handleLogoutClose={handleLogoutClose}
            userid={userid}
          />
        </header>
        <div className="contents">
          <Switch>
            <Route path="/login">
              <Login isLogin={isLogin} onLogin={onLogin} userid={userid} />
            </Route>

            <Route path="/logout">
              <Logout
                isModalopen={isModalopen}
                setisModalClose={setisModalClose}
              />
            </Route>

            <Route exact path="/mypage" component={MyPage} />
            <Route path="/mypage/checkpassword" component={CheckPassword} />
            <Route path="/modifyinfo" component={ModifyInfo} />

            <Route path="/signup" component={Signup} />

            <Route path="/findtheater" />

            <Route path="/board" component={Board}>
              <Board />
            </Route>

            <Route path="/newpost" component={NewPost}>
              <NewPost />
            </Route>

            <Route path="/viewpost" component={ViewPost}>
              <ViewPost />
            </Route>

            <Route path="/movielist">
              <MovieList
                isLogin={isLogin}
                userid={userid}
                isModalopen={isModalopen}
                setisModalOpen={setisModalOpen}
              />
            </Route>
            <Route exact path="/" component={Main} />
          </Switch>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
