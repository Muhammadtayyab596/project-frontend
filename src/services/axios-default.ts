import Axios, { AxiosError } from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:5000/api/v1",
});

axios.interceptors.request.use(
  (config) => {
    config.headers["Accept"] = "application/json";

    const accessToken = localStorage.getItem("ACCESS_TOKEN");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    config.headers["Content-Type"] = config.headers.images
      ? "multipart/form-data"
      : "application/json";

    config.headers["Access-Control-Allow-Origin"] = "*";

    return config;
  },
  (error) => {
    throw error;
  }
);

axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axios;
