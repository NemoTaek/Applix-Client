import React from "react";

// class CheckPassword extends Component {
//   constructor(props) {
//     super(props);

//     state = {
//       passwordValue: "",
//       errorValue: ""
//     }

//     handlePasswordCheck = (e) => {
//       this.setState({
//         passwordValue: e.target.value,
//       });
//     };

//     handlePassword = async () => {
//       const { passwordValue } = this.state;

//       // axios 를 통해 서버 연결을 받아와서 출력 표시
//       await axios
//         // .post("서버 주소/login", userData)
//         .post("http://3.35.208.49:5000/checkpassword", passwordValue)
//         .then((res) => {

//         })
//         .catch((error) => {
//           // console.log("에러", error.response.status);
//           if (error.response) {
//             // 404 : not found user
//             this.setState({
//               errorValue: "찾을 수 없는 유저입니다",
//             });
//           } else if (error.request) {
//             // 500 : server error
//             this.setState({
//               errorValue: "서버로부터 응답을 받을 수 없습니다.",
//             });
//           } else {
//             console.log("error", error.message);
//           }
//         });
//     }
//   }

//   render() {
//     return (
//       <div className="check_password_wrap">
//         <div className="signup password">
//           <span className="span">password: </span>
//           <input className="input input_password" type="password" onPasswordCheck={handlePasswordCheck.bind(this)}></input>
//         </div>

//         <p className="error"></p>

//         <button className="check_btn" onClick={handlePassword}>확인</button>
//       </div>
//     );
//   }
// }

function CheckPassword(props) {
  return (
    <div className="check_password_wrap">
      <div className="signup password">
        <span className="span">password: </span>
        <input className="input input_password" type="password" placeholder="비밀번호는 8자리 이상"></input>
      </div>

      <p className="error"></p>

      <button className="check_btn" onClick={() => { PasswordCheck(props.userdata.password) }}>확인</button>
    </div>
  );
}

function PasswordCheck(pw) {
  let password = document.getElementsByClassName('input_password')[0];
  let errorMessage = document.getElementsByClassName('error')[0];

  if (password.value === pw) {
    // 회원 정보 수정 페이지로 이동
    document.location.href = "/modifyinfo";
  }
  else {
    errorMessage.style.display = "block";
    errorMessage.textContent = "비밀번호가 일치하지 않습니다.";
  }
}

export default CheckPassword;
