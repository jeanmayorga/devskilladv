import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8081/",
});

api.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem("token") || "").state.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
