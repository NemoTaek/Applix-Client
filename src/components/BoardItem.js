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
  viewPost = () => {
    console.log(this.props);
    return (
      <ViewPost post_data={this.props.post_data} />
    );
  }

  render() {
    const { viewPost } = this;
    return (
      <tr>
        <td>{this.props.post_data.id}</td>
        <td>{this.props.post_data.gener}</td>
        <td onClick={viewPost}>
          <Link to="/viewpost">{this.props.post_data.title}</Link>
        </td>
        <td>{this.props.post_data.UserId}</td>
        <td>{this.props.post_data.createdAt}</td>
      </tr>
    );
  }
}


export default BoardItem;
