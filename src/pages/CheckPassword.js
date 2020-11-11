import React from "react";

function CheckPassword(props) {
  return (
    <div className="check_password_wrap">
      <div className="signup password">
        <span className="span">password: </span>
        <input className="input input_password" type="password" placeholder="비밀번호는 8자리 이상"></input>
      </div>

      <p className="error"></p>

      <button className="check_btn" onClick={PasswordCheck}>확인</button>
    </div>
  );
}

function getPassword() {
  // axios.get('/mypage/password', {
  //   headers: {
  //     session: req.session.userid
  //   }
  // })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
}

function PasswordCheck() {
  let password = document.getElementsByClassName('input_password')[0];
  let errorMessage = document.getElementsByClassName('error')[0];

  if (/*getPassword() === password.value*/ password.value === "codestates") {
    // 회원 정보 수정 페이지로 이동
    document.location.href = "/modifyinfo";
  }
  else {
    errorMessage.style.display = "block";
    errorMessage.textContent = "비밀번호가 일치하지 않습니다.";
  }
}

export default CheckPassword;
