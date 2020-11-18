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
import About from "./pages/About";
// components
import Nav from "./components/Nav";
import Logout from "./components/Logout";
import axios from "axios";

class App extends Component {
  state = {
    isLogin: false,
    isModalopen: false,
    isMainOpen: false,
    userid: null,
    nickname: null,
    currentPost: null,
  };

  onLogin = async (userid, nickname, accessToken) => {
    // 로그인이 되면 axios Headers 인증 키에 accessToken 값 설정
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken.token}`;

    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
      userid: userid,
      nickname: nickname,
    }));
    console.log("현재 로그인상태", this.state);
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
      // axios 헤더 초기화
      axios.defaults.headers.common["Authorization"] = null;
    } catch (error) {
      throw error;
    }
  };

  setisMainOpen = () => {
    this.setState((prevState) => ({
      isMainOpen: !prevState.isMainOpen,
    }));

    document.location.href = "/about";
    document.body.style.overflowY = "scroll";
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

  handleBoardView = (currentPost) => {
    this.setState({
      currentPost: currentPost,
    });
    // console.log(currentPost)
    // document.location.href = "/viewpost";
  };

  render() {
    const {
      isLogin,
      isModalopen,
      isMainOpen,
      userid,
      nickname,
      currentPost,
    } = this.state;
    //핸들링 함수
    const {
      handleLogoutClose,
      setisModalClose,
      setisModalOpen,
      setisMainOpen,
      onLogin,
      handleBoardView,
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

            <Route exact path="/mypage">
              <MyPage nickname={nickname} />
            </Route>
            <Route path="/mypage/checkpassword" component={CheckPassword} />
            <Route path="/modifyinfo" component={ModifyInfo} />

            <Route path="/signup" component={Signup} />

            <Route path="/about" component={About} />

            <Route path="/board">
              <Board handleBoardView={handleBoardView} />
            </Route>

            <Route path="/newpost" component={NewPost}></Route>

            <Route path="/viewpost">
              <ViewPost currentPost={currentPost} />
            </Route>

            <Route path="/movielist">
              <MovieList
                isLogin={isLogin}
                userid={userid}
                isModalopen={isModalopen}
                setisModalOpen={setisModalOpen}
              />
            </Route>
            <Route exact path="/">
              <Main isMainOpen={isMainOpen} setisMainOpen={setisMainOpen} />
            </Route>
          </Switch>
        </div>
        {/* <footer></footer> */}
      </div>
    );
  }
}

export default App;
