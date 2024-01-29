import { useEffect } from "react";
import { getAllprojects } from "../../services/authServices";

const Project = () => {
  const fetchProjects = async () => {
    const response = await getAllprojects();
    console.log(response?.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return <div>Project</div>;
};

export default Project;
