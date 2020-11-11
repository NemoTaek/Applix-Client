import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
// pages
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import CheckPassword from "./pages/CheckPassword";
import ModifyInfo from "./pages/ModifyInfo";
// import Login from "./pages/Login";
// components
import Nav from "./components/Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  onLogin = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
    }));
    console.log("로그인버튼state:", this.state);
  };

  render() {
    const { isLogin } = this.state;

    return (
      <div className="wrap">
        <header>
          <Nav isLogin={isLogin} />
        </header>
        <div className="contents">
          <Switch>
            <Route path="/login">
              {/* <Login isLogin={isLogin} onLogin={this.onLogin} /> */}
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
