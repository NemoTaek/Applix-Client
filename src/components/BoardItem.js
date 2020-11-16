import React from "react";

function BoardItem({ post_id, post_title, post_genre, nickName, createdAt }) {
  function viewPost() {
    document.location.href = "/viewpost";
  }

  return (
    <tr>
      <td>{post_id}</td>
      <td>{post_genre}</td>
      <td onClick={viewPost}>{post_title}</td>
      <td>{nickName}</td>
      <td>{createdAt}</td>
    </tr>
  );
}



export default BoardItem;
