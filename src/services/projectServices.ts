import axios from "./axios-default";

type ArgTypes = {
  searchValue: string;
};

type DataTypes = {
  name: string;
  description: string;
  image: string;
  techstack: string;
  githubRepoLink: string;
  liveUrl: string;
};

export const getAllprojects = async (data: ArgTypes) => {
  return axios.get(`/project/all?name=${data.searchValue}`);
};

export const getAllCompleteProjects = async (data: ArgTypes) => {
  return axios.get(`/project/all?name=${data.searchValue}&isCompleted=true`);
};

export const getAllArchive = async (data: ArgTypes) => {
  return axios.get(`/project/all?name=${data.searchValue}&isArchived=true`);
};

export const createProject = async (data: DataTypes) => {
  return axios.post("/project/create", data);
};

export const completeProject = async (id: number) => {
  return axios.put(`/complete/${id}`);
};

export const updateProject = async (id: number) => {
  return axios.put(`/update/${id}`);
};
