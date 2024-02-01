export type ProjectDetails = {
  _id: string;
  name: string;
  description: string;
  startDate: string;
  image: string;
  techstack: string;
  githubRepoLink: string;
  liveUrl: string;
  user: string;
  isCompleted: boolean;
  isArchived: boolean;
  __v: number;
};

export type ProjectDefaultValues = {
  _id: string;
  name: string;
  description: string;
  startDate: string;
  image: string;
  techstack: string;
  githubRepoLink: string;
  liveUrl: string;
};
