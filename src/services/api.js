import axios from "axios";

const baseURL = "https://damp-sea-62257.herokuapp.com";
//const baseURL = "http://localhost:8080";

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default api;
