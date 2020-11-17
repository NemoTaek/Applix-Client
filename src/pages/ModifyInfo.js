import axios from "axios";
import React, { Component } from "react";

class ModifyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem("ApplixID"),
      password: "",
      nickname: this.props.nickname,
      errorMessage: ""
    }
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleNicknameChange = (e) => {
    this.setState({
      nickname: e.target.value,
    });
  };

  ModifyCheck = (e) => {
    e.preventDefault();
    let error = document.getElementsByClassName("error")[0];
    const { email, password, nickname } = this.state;
    const modifyData = { email: email, password: password, nickName: nickname };

    if (!modifyData.password || modifyData.password.length < 8) {
      error.style.display = "block";
      error.textContent = "비밀번호는 8자리 이상이어야 합니다.";
    } else if (!modifyData.nickName) {
      error.style.display = "block";
      error.textContent = "닉네임을 입력해주세요.";
    } else {
      error.style.display = "none";

      axios
        .put("http://3.35.208.49:5000/mypage/userinfo", modifyData)
        .then((res) => {
          // 회원가입에 성공하면 로그인 페이지로 이동
          if (res.status === 200) {
            document.location.href = "/";
          } else if (res.status === 409) {
            error.style.display = "block";
            this.setState({
              errorMessage: "이메일 또는 닉네임이 이미 존재합니다.",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    const { email, password, nickname, errorMessage } = this.state;
    const { handlePasswordChange, handleNicknameChange, ModifyCheck } = this;

    return (
      <div className="signup_wrap">
        <div className="signup email">
          <span className="span">email: </span>
          <input
            className="input input_email"
            type="email"
            defaultValue={email}
            readOnly
          ></input>
        </div>

        <div className="signup password">
          <span className="span">password: </span>
          <input
            className="input input_password"
            type="password"
            placeholder="비밀번호는 8자리 이상"
            password={password}
            onChange={handlePasswordChange.bind(this)}
          ></input>
        </div>

        <div className="signup nickname">
          <span className="span">nickname: </span>
          <input
            className="input input_nickname"
            type="text"
            defaultValue={nickname}
            nickname={nickname}
            onChange={handleNicknameChange.bind(this)}
          ></input>
        </div>

        <p className="error">{errorMessage}</p>

        <button className="signup_btn" onClick={ModifyCheck}>
          수정 완료
        </button>
      </div>
    );
  }
}

// function getMypage() {
//   axios.get('/mypage', {
//     headers: {
//       session: req.session.userid
//     }
//   })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     })
// }

export default ModifyInfo;
