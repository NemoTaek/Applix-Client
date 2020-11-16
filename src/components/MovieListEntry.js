import React from "react";
import "./MovieList.css";

function MovieListEntry(props) {
  // console.log(props);
  const { title, actor, director, image, pubDate, userRating } = props.movies;

  return (
    <div className="movieEntry">
      영화이미지
      <img src={image} alt={title} />
      <div className="movieinfo">
        <h3>{title}</h3>
        <div className="detail">
          <p>장르 : </p>
          <p>감독 : {director}</p>
          <p>출연배우 : {actor}</p>
          <p>제작년도 : {pubDate}</p>
          <p>유저평점 : {userRating}</p>
          <button>♥ 찜하기</button>
        </div>
      </div>
    </div>
  );
}

export default MovieListEntry;
