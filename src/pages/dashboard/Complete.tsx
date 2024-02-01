import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomBreadcrumbs from "../../components/Breadcrumbs";
import ProjectCard from "../../components/Cards/ProjectCard";
import TopHeader from "../../components/Header/TopHeader";
import ButtonAppBar from "../../components/Header/index";
import Loader from "../../components/Loader";
import { getAllCompleteProjects } from "../../services/projectServices";
import { debounce } from "../../utils/debounce";
import NotFound from "../../components/NotFound";
import { ProjectDetails } from "../../types";

const styles = {
  style: {
    width: "100%",
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const CompleteProject: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [projectsComplete, setProjectsComplete] = useState<ProjectDetails[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const fetchProjects = async () => {
    try {
      const obj: {
        searchValue: string;
      } = {
        searchValue: searchValue ?? "",
      };
      setLoading(true);
      const response = await getAllCompleteProjects(obj);
      if (response?.data?.statusCode === 200) {
        setProjectsComplete(response?.data?.data?.projects);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRedirect = () => {
    navigate("/dashboard/project/add");
  };

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, isSuccess]);

  const handleSearchChange = debounce((e) => {
    setSearchValue(e);
  }, 1000);

  return (
    <Box>
      <ButtonAppBar />
      <Container sx={{ mt: 5 }}>
        <CustomBreadcrumbs />
        <TopHeader
          label="All Complete Projects"
          onHandleChange={handleSearchChange}
          handleRedirect={handleRedirect}
        />
        <Grid container sx={{ pb: 5, mt: 4 }}>
          {loading && (
            <Box sx={styles.style}>
              <Loader color="blue" width="50px" height="50px" />
            </Box>
          )}

          {projectsComplete?.length === 0 && !loading && (
            <Box sx={styles.style}>
              <NotFound text="No Complete Project Found" />
            </Box>
          )}

          {projectsComplete?.map((item: any) => (
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

export default CompleteProject;
