import { Box, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CustomBreadcrumbs from "../../components/Breadcrumbs";
import ProjectCard from "../../components/Cards/ProjectCard";
import TopHeader from "../../components/Header/TopHeader";
import CustomAppBar from "../../components/Header/index";
import Loader from "../../components/Loader";
import { getAllprojects } from "../../services/projectServices";
import { debounce } from "../../utils/debounce";
import { ProjectDetails } from "../../types";
import NotFound from "../../components/NotFound";

const styles = {
  style: {
    width: "100%",
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const Project: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [projectsDeatils, setProjectsDeatils] = useState<ProjectDetails[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const fetchProjects = async () => {
    const obj: {
      searchValue: string;
    } = {
      searchValue: searchValue ?? "",
    };
    try {
      setLoading(true);
      const response = await getAllprojects(obj);
      if (response?.data?.statusCode === 200) {
        setProjectsDeatils(response?.data?.data?.projects);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [searchValue, isSuccess]);

  const handleSearchChange = debounce((e) => {
    setSearchValue(e);
  }, 2000);

  const handleRedirect = () => {
    navigate("/dashboard/project/add");
  };

  return (
    <Box>
      <CustomAppBar />
      <Container sx={{ mt: 5 }}>
        <CustomBreadcrumbs />
        <TopHeader
          label="All Projects"
          onHandleChange={handleSearchChange}
          handleRedirect={handleRedirect}
        />

        <Grid container sx={{ pb: 5, mt: 4 }}>
          {loading && (
            <Box sx={styles.style}>
              <Loader color="blue" width="50px" height="50px" />
            </Box>
          )}

          {projectsDeatils?.length === 0 && !loading && (
            <Box sx={styles.style}>
              <NotFound text="No Project Found" />
            </Box>
          )}

          {projectsDeatils?.map((item: ProjectDetails) => (
            <Grid lg={4} key={item._id}>
              <Box sx={{ mt: 4 }}>
                <ProjectCard
                  projectsDeatils={item}
                  setIsSuccess={setIsSuccess}
                  isSuccess={isSuccess}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Project;
