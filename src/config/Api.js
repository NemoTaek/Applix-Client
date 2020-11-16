require("dotenv").config();

const params = {
  IDkey: process.env.REACT_APP_NAVER_API_KEY,
  SCkey: process.env.REACT_APP_NAVER_API_SECRET_KEY,
};

module.exports = params;
