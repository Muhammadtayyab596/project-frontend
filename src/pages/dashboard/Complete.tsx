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
  const [projectsComplete, setProjectsComplete] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<any>();
  const [isSuccess, setIsuccess] = useState<boolean>(false);

  const fetchProjects = async () => {
    try {
      const obj: any = {
        searchValue: searchValue ?? "",
      };
      setLoading(true);
      const response = await getAllCompleteProjects(obj);
      // @ts-ignore
      if (response?.data?.statusCode === 200) {
        // @ts-ignore
        setProjectsComplete(response?.data?.data?.projects);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRedirect = () => {
    navigate("/add-project");
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

          {projectsComplete?.length === 0 && (
            <Box sx={styles.style}>
              <NotFound text="No Complete Project Found" />
            </Box>
          )}

          {projectsComplete?.map((item: any) => (
            <Grid lg={4} key={item._id}>
              <Box sx={{ mt: 4 }}>
                <ProjectCard projectsDeatils={item} setIsuccess={setIsuccess} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CompleteProject;
