import axios from "axios";
import { urls } from "./urls.js";
const BASE_URL = "http://127.0.0.1:8000/";

export const getApi = async (url) => {
  const res = await axios.get(`${BASE_URL}${urls[url]}`, {});
  return res.data;
};
