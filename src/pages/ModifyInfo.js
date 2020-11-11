import React from "react";

function ModifyInfo(props) {
  return (
    <div className="signup_wrap">
      <div className="signup email">
        <span className="span">email: </span>
        <input className="input input_email" type="email" defaultValue={1/*DB에서 email 값 */} readOnly></input>
      </div>

      <div className="signup password">
        <span className="span">password: </span>
        <input className="input input_password" type="password" placeholder="비밀번호는 8자리 이상"></input>
      </div>

      <div className="signup nickname">
        <span className="span">nickname: </span>
        <input className="input input_nickname" type="text" defaultValue={1/*DB에서 email 값 */} placeholder="ex) 김코딩"></input>
      </div>

      <p className="error"></p>

      <button className="signup_btn" onClick={ModifyCheck}>수정 완료</button>
    </div>
  );
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

function ModifyCheck() {
  let password = document.getElementsByClassName('input_password')[0];
  let nickname = document.getElementsByClassName('input_nickname')[0];
  let errorMessage = document.getElementsByClassName('error')[0];

  if (password.value.length < 8) {
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

export default ModifyInfo;
