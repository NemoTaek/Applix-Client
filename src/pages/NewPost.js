// import axios from "axios";
import React, { Component } from "react";
// import { Link } from "react-router-dom";

class NewPost extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state = {
      post_title: "",
      post_genre: "",
      post_content: "",
    };

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

  handleTitleChange = (e) => {
    this.setState({
      post_title: e.target.value,
    });
  };

  handleGenreChange = (e) => {
    this.setState({
      post_genre: e.target.value,
    });
  };

  handleContentChange = (e) => {
    this.setState({
      post_content: e.target.value,
    });
  };

  goBoard = () => {
    // const { post_title, post_genre, post_content } = this.state;
    // const postData = { post_title: post_title, post_genre: post_genre, post_content: post_content };

    // axios.post("http://3.35.208.49:5000/post", postData)
    //   .then((res) => {
    //     // 회원가입에 성공하면 로그인 페이지로 이동
    //     if (res.status === 201) {
    //       document.location.href = "/board";
    //     }
    //     else if (!post_title || !post_genre || !post_content) {
    //       alert("모든 칸을 입력해주세요");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    document.location.href = "/board";
  };

  render() {
    // const { nickname } = this.state;
    const {
      handleTitleChange,
      handleGenreChange,
      handleContentChange,
      goBoard,
    } = this;
    return (
      <div className="post_wrap">
        <table className="post">
          <tbody>
            <tr>
              <td className="post_item">글 제목</td>
              <td className="post_title" colSpan="3">
                <input onChange={handleTitleChange.bind(this)}></input>
              </td>
            </tr>

            <tr>
              <td className="post_item">장르</td>
              <td className="post_value">
                <select defaultValue="" onChange={handleGenreChange.bind(this)}>
                  <option value=""></option>
                  <option value="액션">액션</option>
                  <option value="멜로">멜로</option>
                  <option value="스릴러">스릴러</option>
                </select>
              </td>
              <td className="post_item">닉네임</td>
              <td className="post_value">된다</td>
            </tr>

            <tr>
              <td className="post_item">내용</td>
              <td className="post_text" colSpan="3">
                <textarea onChange={handleContentChange.bind(this)} ></textarea>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="post_button_wrap">
          <button className="new_post_btn" onClick={goBoard}>
            작성 완료
          </button>
        </div>
      </div>
    );
  }
}

export default NewPost;
