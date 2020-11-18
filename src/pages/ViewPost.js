import React, { Component } from "react";

class ViewPost extends Component {

  goBoard = () => {
    document.location.href = "/board";
  };

  render() {
    console.log("View", this.props);
    const { goBoard } = this;
    return (
      <div className="post_wrap">
        <table className="post">
          <tbody>
            <tr>
              <td className="item">제목</td>
              <td>{this.props.currentPost.title}</td>
            </tr>
            <tr>
              <td className="item">장르</td>
              <td>{this.props.currentPost.genre}</td>
            </tr>
            <tr>
              <td className="item">닉네임</td>
              <td>1</td>
            </tr>
            <tr>
              <td className="item">내용</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>

        <div className="post_button_wrap">
          <button className="new_post_btn" onClick={goBoard}>
            목록으로
          </button>
        </div>
      </div>
    );
  }
}

export default ViewPost;

// import React from "react";

// function ViewPost(props) {
//   console.log("View", props);

//   return (
//     <div className="post_wrap">
//       <table className="post">
//         <tbody>
//           <tr>
//             <td className="item">제목</td>
//             <td>임시 테스트</td>
//           </tr>
//           <tr>
//             <td className="item">장르</td>
//             <td>1</td>
//           </tr>
//           <tr>
//             <td className="item">닉네임</td>
//             <td className="post_nickname">1</td>
//           </tr>
//           <tr>
//             <td className="item">내용</td>
//             <td>1</td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="post_button_wrap">
//         <button
//           className="new_post_btn"
//           onClick={() => (document.location.href = "/board")}
//         >
//           목록으로
//         </button>
//       </div>
//     </div>
//   );
// }
