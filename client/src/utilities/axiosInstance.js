const axios = require("axios");

const url =
  process.env.NODE_ENV === "production"
    ? "https://ipl-mega-auction.herokuapp.com/"
    : "http://localhost:8000/";

const axiosInstance = axios.create({
  baseURL: url,
});

export default axiosInstance;
