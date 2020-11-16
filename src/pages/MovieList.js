import axios from "axios";
import React, { Component } from "react";
import "../components/MovieList.css";
import MovieListEntry from "../components/MovieListEntry";
//API - 배포 하기 전에 체크해야할 필수항목(노출X)
// import params from "../config/Api";
// console.log(params);
// {1,액션} 코드 값 넣어야함..
const moviegerne = [
  { code: 1, value: "드라마" },
  { code: 2, value: "판타지" },
  { code: 3, value: "서부" },
  { code: 4, value: "공포" },
  { code: 5, value: "로맨스" },
  { code: 6, value: "모험" },
  { code: 7, value: "스릴러" },
  { code: 8, value: "느와르" },
  { code: 9, value: "컬트" },
  { code: 10, value: "다큐멘터리" },
  { code: 11, value: "코미디" },
  { code: 12, value: "가족" },
  { code: 13, value: "미스터리" },
  { code: 14, value: "전쟁" },
  { code: 15, value: "애니메이션" },
  { code: 16, value: "범죄" },
  { code: 17, value: "뮤지컬" },
  { code: 18, value: "SF" },
];

class MovieList extends Component {
  state = {
    searchKeyword: "",
    searchGenre: "",
    movies: null,
  };

  updateKeyword(e) {
    this.setState({
      searchKeyword: e.target.value,
    });
  }

  updateGenre(e) {
    this.setState({
      searchGenre: e.target.value,
    });
  }

  onSearch = async (keyword) => {
    let movieData = await axios
      .get("http://3.35.208.49:5000/search", { params: { query: keyword } })
      .then((res) => res.data.items);

    this.setState({ movies: movieData });
  };

  makeWishList = async (data) => {
    let { isLogin, userid } = this.props;

    const sendWishBody = {
      userid: userid,
      title: data.title,
      director: data.director,
      actor: data.actor,
      image: data.image,
      link: data.link,
    };

    // 로그인한 유저이면 전송이 가능하고, 로그인 안한 유저는 불가능하다.
    if (isLogin) {
      // 서버 POST - BODY : { sendWishBody }
      await axios.post("http://3.35.208.49:5000/search", sendWishBody);

      // res.status 409 : 이미 찜한 목록
    } else {
      console.log("로그인 후 시도해주세요");
    }
  };

  render() {
    const { searchKeyword, searchGenre, movies } = this.state;
    const { updateKeyword, updateGenre, onSearch, makeWishList } = this;

    return (
      <div className="movieContents">
        <div className="row h30">
          <select value={searchGenre} onChange={updateGenre.bind(this)}>
            {moviegerne.map((ele) => (
              <option value={ele.code}>{ele.value}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="영화명을 검색해주세요"
            value={searchKeyword}
            onChange={updateKeyword.bind(this)}
          />
          <button
            onClick={() => {
              onSearch(searchKeyword);
            }}
          >
            검색
          </button>
        </div>
        <div className="row h80">
          {!movies ? (
            <div>보고 싶은 영화를 검색하세요!</div>
          ) : (
            <div>
              {movies.map((ele) => (
                <MovieListEntry
                  key={ele.link}
                  movies={ele}
                  makeWishList={makeWishList}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MovieList;

// ---------- ---------- local test ----------  ----------
// const { IDkey, SCkey } = params;

// let url = `/v1/search/movie.json`;

// let movieData = await axios
//   .get(url, {
//     params: { query: keyword, display: 10 },
//     headers: {
//       "X-Naver-Client-Id": IDkey,
//       "X-Naver-Client-Secret": SCkey,
//     },
//   })
//   .then((res) => res.data.items);
