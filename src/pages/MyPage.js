import React from "react";

function MyPage(props) {
  return (
    <div className="mypage_wrap">
      <div className="info">
        <p className="welcome">
          {/* {getMypage.nickname} 님 환영합니다. */}nickname 님 환영합니다.
          </p>
      </div>
      <div className="mypage_list">
        <div className="list">내가 쓴 게시글 목록</div>
        <div className="list">내가 찜한 영화 목록</div>
        <div className="list" >회원정보 변경</div>
        {/* onClick={() => console.log(history)} */}
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
