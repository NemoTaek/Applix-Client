import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewPost extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      post_title: "",
      post_genre: "",
      post_content: ""
    }

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
  }

  goBoard = () => {
    const { post_title, post_genre, post_content } = this.state;
    const postData = { post_title: post_title, post_genre: post_genre, post_content: post_content };

    // axios.post("http://3.35.208.49:5000/post", postData)
    //   .then((res) => {
    //     // 회원가입에 성공하면 로그인 페이지로 이동
    //     if (res.status === 201) {
    //       document.location.href = "/board";
    //     }
    //     else if (!post_title || !post_genre || !post_content) {

    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })

    document.location.href = "/board";
  };

  render() {
    // const { nickname } = this.state;
    const { goBoard } = this;
    return (
      <div className="post_wrap">
        <table className="post">
          <tbody>
            <tr>
              <td className="item">제목</td>
              <td>
                <input className="post_title"></input>
              </td>
            </tr>
            <tr>
              <td className="item">장르</td>
              <td>
                <select className="post_genre" defaultValue="">
                  <option value=""></option>
                  <option value="액션">액션</option>
                  <option value="멜로">멜로</option>
                  <option value="스릴러">스릴러</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="item">닉네임</td>
              <td className="post_nickname">된다</td>
            </tr>
            <tr>
              <td className="item">내용</td>
              <td>
                <textarea className="post_text"></textarea>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="post_button_wrap">
          <button className="new_post_btn" onClick={goBoard}>작성 완료</button>
        </div>
      </div>
    );
  }
}

export default NewPost;
