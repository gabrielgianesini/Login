

import axios from "axios";

axios.defaults.withCredentials = true;
const host = "http://127.0.0.1:3002/";

export const api = axios.create({
  baseURL: host,
});
