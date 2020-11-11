import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    const { isLogin } = this.props;

    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="selected">
                배너 이미지(HOME)
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
                <li>
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
