import axios from "axios";

const baseURL = "https://damp-sea-62257.herokuapp.com";

const api = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export default api;
