import React from "react";

function Signup(props) {
  return (
    <div className="signup_wrap">
      <div className="signup email">
        <span className="span">email: </span>
        <input className="input input_email" type="email" placeholder="ex) abc@google.com"></input>
      </div>

      <div className="signup password">
        <span className="span">password: </span>
        <input className="input input_password" type="password" placeholder="비밀번호는 8자리 이상"></input>
      </div>

      <div className="signup nickname">
        <span className="span">nickname: </span>
        <input className="input input_nickname" type="text" placeholder="ex) 김코딩"></input>
      </div>

      <p className="error"></p>

      <button className="signup_btn" onClick={SignupCheck}>회원가입</button>
    </div>
  );
}

function SignupCheck() {
  let email = document.getElementsByClassName('input_email')[0];
  let password = document.getElementsByClassName('input_password')[0];
  let nickname = document.getElementsByClassName('input_nickname')[0];
  let errorMessage = document.getElementsByClassName('error')[0];

  if (!email.value.includes('@')) {
    errorMessage.style.display = "block";
    errorMessage.textContent = "이메일 형식이 맞지 않습니다.";
  }
  else if (password.value.length < 8) {
    errorMessage.style.display = "block";
    errorMessage.textContent = "비밀번호는 8자리 이상이어야 합니다.";
  }
  else if (!nickname.value) {
    errorMessage.style.display = "block";
    errorMessage.textContent = "닉네임을 입력해주세요.";
  }
  else {
    errorMessage.style.display = "none";
    document.location.href = "/"
  }
}

export default Signup;
