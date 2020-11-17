import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
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

class BoardItem extends Component {
  state = {
    title: this.props.post_data.title,
    genre: this.props.post_data.genre,
  }

  viewPost = () => {
    // return (
    //   <Route path="/viewpost" >
    //     <ViewPost title={this.state.title} genre={this.state.genre} />
    //   </Route>
    // );
    // document.location.href = "/viewpost"
  }

  render() {
    const { viewPost } = this;
    const date = this.props.post_data.createdAt.substring(0, 10);
    return (
      <tr>
        <td>{this.props.post_data.id}</td>
        <td>{this.props.post_data.genre}</td>
        <td >
          <Link to="/viewpost">{this.props.post_data.title}</Link>
        </td>
        <td>111</td>
        <td>{date}</td>
      </tr>
    );
  }
}


export default BoardItem;
