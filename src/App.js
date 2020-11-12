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
// components
import Nav from "./components/Nav";
import Logout from "./components/Logout";
import axios from "axios";

class App extends Component {
  state = {
    isLogin: false,
    isModalopen: false,
    userdata: null,
  };

  onLogin = async (userid) => {
    let result = await axios
      .get("http://3.35.208.49:5000/")
      .then((res) => res.data)
      .then((userdata) => userdata);

    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
      userdata: result,
    }));
  };

  //로그아웃 핸들링 - 서버
  handleLogoutClose = async () => {
    try {
      // 세션 파괴 요청
      await axios.post("http://3.35.208.49:5000/signout");
      // state 재세팅
      this.setState((prevState) => ({
        isLogin: !prevState.isLogin,
        isModalopen: !prevState.isModalopen,
        userdata: null,
      }));
    } catch (error) {
      throw error;
    }
  };

  setisModalClose = () => {
    this.setState((prevState) => ({
      isModalopen: !prevState.isModalopen,
    }));
    document.location.href = "/";
  };

  render() {
    const { isLogin, isModalopen } = this.state;
    //핸들링 함수
    const { handleLogoutClose, setisModalClose, onLogin } = this;

    return (
      <div className="wrap">
        <header>
          <Nav isLogin={isLogin} handleLogoutClose={handleLogoutClose} />
        </header>
        <div className="contents">
          <Switch>
            <Route path="/login">
              <Login isLogin={isLogin} onLogin={onLogin} />
            </Route>
            <Route path="/logout">
              <Logout
                isModalopen={isModalopen}
                setisModalClose={setisModalClose}
              />
            </Route>
            <Route path="/mypage" component={MyPage} />
            <Route path="/checkpassword" component={CheckPassword} />
            <Route path="/modifyinfo" component={ModifyInfo} />
            <Route path="/signup" component={Signup} />
            <Route path="/findtheater" />
            <Route path="/board" />
            <Route path="/movielist" />
            <Route exact path="/" component={Main} />
          </Switch>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
