import axios from "axios";
import React, { Component } from "react";
import "../components/MovieList.css";
import MovieListEntry from "../components/MovieListEntry";
//API - 배포 하기 전에 체크해야할 필수항목(노출X)
import params from "../config/Api";
// console.log(params);

const moviegerne = [
  "액션",
  "멜로",
  "드라마",
  "스릴러",
  "코믹",
  "판타지",
  "모험",
  "SF",
  "가족",
  "애니메이션",
  "범죄",
  "전쟁",
  "다큐멘터리",
];

class MovieList extends Component {
  state = {
    searchKeyword: "",
    movies: null,
  };

  updateKeyword(e) {
    this.setState({ searchKeyword: e.target.value });
  }

  onSearch = async (keyword) => {
    //null 입력값은 경고창
    const { IDkey, SCkey } = params;

    let url = `/v1/search/movie.json`;

    let movieData = await axios
      .get(url, {
        params: { query: keyword, display: 10 },
        headers: {
          "X-Naver-Client-Id": IDkey,
          "X-Naver-Client-Secret": SCkey,
        },
      })
      .then((res) => res.data.items);

    this.setState({ movies: movieData });
  };

  render() {
    const { searchKeyword, movies } = this.state;
    const { updateKeyword, onSearch } = this;

    return (
      <div className="movieContents">
        <div className="row h30">
          <select>
            {moviegerne.map((ele) => (
              <option>{ele}</option>
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
              {movies.map((ele, idx) => (
                <MovieListEntry key={idx} movies={ele} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MovieList;
