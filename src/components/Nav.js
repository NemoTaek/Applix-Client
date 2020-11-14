import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
// import homeicon from "../img/icon_home.png";

class Nav extends Component {
  state = {
    isOpen: false,
  };

  setIsMenuOpen(e) {
    this.setState((prev) => ({
      isOpen: !prev.isOpen,
    }));

    e.target.classList.toggle("active");
  }

  render() {
    const { isLogin } = this.props;
    //props 핸들링 함수
    const { handleLogoutClose } = this.props;
    const { setIsMenuOpen } = this;
    // document.addEventListener("click", setIsMenuOpen, false);
    return (
      <div>
        <nav>
          <div className="ham-menu" onClick={setIsMenuOpen.bind(this)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={this.state.isOpen ? "open" : "close"}
            onClick={setIsMenuOpen.bind(this)}
          >
            <li>
              <NavLink exact to="/" activeClassName="selected">
                {/* <img src={homeicon} alt="homeiconimg" /> */} 홈
              </NavLink>
            </li>
            <li>
              <NavLink to="/findtheater" activeClassName="selected">
                영화관찾기
              </NavLink>
            </li>
            <li>
              <NavLink to="/board" activeClassName="selected">
                모임게시글
              </NavLink>
            </li>
            <li>
              <NavLink to="/movielist" activeClassName="selected">
                영화목록
              </NavLink>
            </li>
            {isLogin ? (
              <>
                <li onClick={handleLogoutClose}>
                  <NavLink to="/logout" activeClassName="selected">
                    로그아웃
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login" activeClassName="selected">
                    로그인
                  </NavLink>
                </li>
              </>
            )}
            {isLogin ? (
              <>
                <li>
                  <NavLink to="/mypage" activeClassName="selected">
                    마이페이지
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/signup" activeClassName="selected">
                    회원가입
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
