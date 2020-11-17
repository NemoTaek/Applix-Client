import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ViewPost extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // axios.get("http://3.35.208.49:5000/mypage")
  //   .then((res) => {
  //     // mypage 들어오면 닉네임을 받아와야 함
  //     if (res.status === 201) {
  //       this.setState({
  //         nickname: res.data
  //       })
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  goBoard = () => {
    document.location.href = "/board";
  };

  render() {
    console.log(this.props);
    // const { nickname } = this.state;
    const { goBoard } = this;
    return (
      <div className="post_wrap">
        <table className="post">
          <tbody>
            <tr>
              <td className="item">제목</td>
              <td>{this.props.title}</td>
            </tr>
            <tr>
              <td className="item">장르</td>
              <td>1</td>
            </tr>
            <tr>
              <td className="item">닉네임</td>
              <td className="post_nickname">1</td>
            </tr>
            <tr>
              <td className="item">내용</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>

        <div className="post_button_wrap">
          <button className="new_post_btn" onClick={goBoard}>목록으로</button>
        </div>
      </div>
    );
  }
}

export default ViewPost;
