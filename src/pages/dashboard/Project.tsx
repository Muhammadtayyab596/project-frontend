import { Box, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomBreadcrumbs from "../../components/Breadcrumbs";
import ProjectCard from "../../components/Cards/ProjectCard";
import TopHeader from "../../components/Header/TopHeader";
import CustomAppBar from "../../components/Header/index";
import Loader from "../../components/Loader";
import { getAllprojects } from "../../services/projectServices";
import { debounce } from "../../utils/debounce";
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

const Project = () => {
  const navigate = useNavigate();
  const [projectsDeatils, setProjectsDeatils] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<any>();

  const fetchProjects = async () => {
    const obj: any = {
      searchValue: searchValue ? searchValue : "",
    };
    try {
      setLoading(true);
      const response = await getAllprojects(obj);
      // @ts-ignore
      if (response?.data?.statusCode === 200) {
        // @ts-ignore
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
  }, [searchValue]);

  const handleSearchChange = debounce((e) => {
    setSearchValue(e);
  }, 2000);

  const handleRedirect = () => {
    navigate("/add-project");
  };

  return (
    <Box>
      <CustomAppBar />
      <Container sx={{ mt: 5 }}>
        <CustomBreadcrumbs />
        <TopHeader
          label="All projects"
          onHandleChange={handleSearchChange}
          handleRedirect={handleRedirect}
        />

        <Grid container sx={{ pb: 5, mt: 4 }}>
          {loading && (
            <Box sx={styles.style}>
              <Loader color="blue" width="50px" height="50px" />
            </Box>
          )}

          {projectsDeatils?.leneght === 0 && (
            <Box sx={styles.style}>
              <NotFound text="No Project Found" />
            </Box>
          )}

          {projectsDeatils?.map((item: any) => (
            <Grid lg={4} key={item._id}>
              <Box sx={{ mt: 4 }}>
                <ProjectCard projectsDeatils={item} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Project;
