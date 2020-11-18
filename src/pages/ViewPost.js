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
              <td className="post_item">글 제목</td>
              <td className="post_title" colSpan="3">
                {this.props.currentPost.title}
              </td>
            </tr>

            <tr>
              <td className="post_item">장르</td>
              <td className="post_value">
                {this.props.currentPost.genre}
              </td>
              <td className="post_item">닉네임</td>
              <td className="post_value">된다</td>
            </tr>

            <tr>
              <td className="post_item">내용</td>
              <td className="post_text" colSpan="3">
                1
              </td>
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
