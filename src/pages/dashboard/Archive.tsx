import { Box, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomBreadcrumbs from "../../components/Breadcrumbs";
import ProjectCard from "../../components/Cards/ProjectCard";
import TopHeader from "../../components/Header/TopHeader";
import ButtonAppBar from "../../components/Header/index";
import Loader from "../../components/Loader";
import { getAllArchive } from "../../services/projectServices";
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

const ArchiveProject: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const [projectsArchive, setProjectsArchive] = useState<ProjectDetails[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const obj: {
        searchValue: string;
      } = {
        searchValue: searchValue ?? "",
      };
      const response = await getAllArchive(obj);
      if (response?.data?.statusCode === 200) {
        setProjectsArchive(response?.data?.data?.projects);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, isSuccess]);

  const handleSearchChange = debounce((e) => {
    setSearchValue(e);
  }, 1000);

  const handleRedirect = () => {
    navigate("/dashboard/project/add");
  };

  return (
    <Box>
      <ButtonAppBar />
      <Container sx={{ mt: 5 }}>
        <CustomBreadcrumbs />
        <TopHeader
          label="All Archive Projects"
          onHandleChange={handleSearchChange}
          handleRedirect={handleRedirect}
        />
        <Grid container sx={{ pb: 5, mt: 4 }}>
          {loading && (
            <Box sx={styles.style}>
              <Loader color="blue" width="50px" height="50px" />
            </Box>
          )}

          {projectsArchive?.length === 0 && !loading && (
            <Box sx={styles.style}>
              <NotFound text="No Archive Project Found" />
            </Box>
          )}

          {projectsArchive?.map((item: any) => (
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

export default ArchiveProject;
