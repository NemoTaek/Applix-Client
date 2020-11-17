import React, { Component } from "react";
import { Link } from "react-router-dom";
import ViewPost from "../pages/ViewPost";

// function BoardItem(props) {
//   function viewPost() {
//     return (
//       <ViewPost post_data={props.post_data} />
//     );
//     // document.location.href = "/viewpost";
//   }

//   return (
//     <tr>
//       <td>{props.post_data.id}</td>
//       <td>{props.post_data.gener}</td>
//       <td onClick={viewPost}>
//         <Link to="/viewpost">{props.post_data.title}</Link>
//       </td>
//       <td>{props.post_data.UserId}</td>
//       <td>{props.post_data.createdAt}</td>
//     </tr>
//   );
// }

// 추후에 수정할 것
// gener -> genre
// UserId -> nickName

class BoardItem extends Component {
  viewPost = (e) => {
    e.preventDefault();
    let currentPost = this.props.post_data;
    this.props.handleBoardView(currentPost);
  };

  render() {
    return (
      <tr onClick={this.viewPost}>
        <td>{this.props.post_data.id}</td>
        <td>{this.props.post_data.genre}</td>
        <td>{this.props.post_data.title}</td>
        <td>{this.props.post_data.UserId}</td>
        <td>{this.props.post_data.createdAt}</td>
      </tr>
    );
  }
}

export default BoardItem;
