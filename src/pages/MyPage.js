import React from "react";
import { Link } from "react-router-dom";

function MyPage(props) {
  return (
    <div className="mypage_wrap">
      <div className="info">
        <p className="welcome">{props.userdata.nickName} 님 환영합니다.</p>
      </div>

      <div className="mypage_list">
        <div className="list">
          <Link to="/mypage/checkpassword">내가 쓴 게시글 목록</Link>
        </div>
        <div className="list" onClick={() => console.log(props.location.pathname)}>내가 찜한 영화 목록</div>
        <div className="list" onClick={() => props.history.push("/mypage/checkpassword")}>회원정보 변경</div>
      </div>
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

export default MyPage;
