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

export const completeProject = async (obj: any) => {
  return axios.put(`/project/complete/${obj?.id}`, obj);
};

export const archiveProject = async (obj: any) => {
  return axios.put(`/project/archive/${obj?.id}`, obj);
};

export const updateProject = async (obj: any) => {
  return axios.put(`/project/update/${obj?.id}`, obj);
};
