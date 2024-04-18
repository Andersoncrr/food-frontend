import axios from "axios";

export const axiosApp = axios.create({
  baseURL: "http://localhost:5001/api",
});
