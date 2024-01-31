import axios from "./axios-default";

type RegisterData = {
  email: string;
  password: string;
  name: string;
};

type LoginData = {
  email: string;
  password: string;
};

export const login = async (data: LoginData) => {
  return axios.post("/user/login", data);
};

export const register = async (data: RegisterData) => {
  return axios.post("/user/signup", data);
};
