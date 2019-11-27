import axios from "axios";

const baseURL = "https://visite-me.herokuapp.com"; // process.env.REACT_APP_API_HOST;
const headers = { Accept: "application/json" };

export default axios.create({
  baseURL: `${baseURL}`,
  headers,
});
