import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import BoardItem from "../components/BoardItem";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // post_id: "1",
      // post_title: "1",
      // post_genre: "1",
      // nickName: "1",
      // createdAt: "1"
      post_data: [
        {
          post_id: "1",
          post_title: "1",
          post_genre: "1",
          nickName: "1",
          createdAt: "1"
        },
        {
          post_id: "2",
          post_title: "2",
          post_genre: "2",
          nickName: "2",
          createdAt: "2"
        }
      ]
    }

    // axios.get("http://3.35.208.49:5000/board")
    //   .then((res) => {
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

  newPost = () => {
    document.location.href = "/newpost";
  };

  render() {
    const { post_data } = this.state;
    const { newPost } = this;
    return (
      <div className="board_wrap">
        <table className="board">
          <tbody>
            <tr>
              <th className="no">번호</th>
              <th className="genre">장르</th>
              <th className="title">제목</th>
              <th className="writer">글쓴이</th>
              <th className="write_date">등록일</th>
            </tr>
            {post_data.map((el) => (
              // <BoardItem post_id={post_id} post_title={post_title} post_genre={post_genre} nickName={nickName} createdAt={createdAt} key={post_id} />
              <BoardItem key={el.post_id} post_id={el.post_id} post_title={el.post_title} post_genre={el.post_genre} nickName={el.nickName} createdAt={el.createdAt} />
            ))}
          </tbody>
        </table>

        <div className="board_button_wrap">
          <button className="new_post_btn" onClick={newPost}>새 글 작성</button>
        </div>
      </div>
    );
  }
}

export default Board;
