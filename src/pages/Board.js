import axios from "axios";
import React, { Component } from "react";
import BoardItem from "../components/BoardItem";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post_data: [],
    };

    axios
      .get("http://3.35.208.49:5000/board")
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            post_data: res.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  newPost = () => {
    document.location.href = "/newpost";
  };

  render() {
    const { post_data } = this.state;
    const { newPost } = this;
    //app 에서 받아온 props 함수
    const { handleBoardView } = this.props;

    return (
      <div className="board_wrap">
        <table className="board">
          <tbody>
            <tr className="board_title">
              <th className="no">번호</th>
              <th className="genre">장르</th>
              <th className="title">제목</th>
              <th className="writer">등록일</th>
              <th className="write_date">수정일</th>
            </tr>
            {post_data.map((el) => (
              <BoardItem
                key={el.id}
                post_data={el}
                handleBoardView={handleBoardView}
              />
            ))}
          </tbody>
        </table>

        <div className="board_button_wrap">
          <button className="new_post_btn" onClick={newPost}>
            새 글 작성
          </button>
        </div>
      </div>
    );
  }
}

export default Board;
