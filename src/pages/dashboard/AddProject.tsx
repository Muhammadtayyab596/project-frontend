import { Box, Container } from "@mui/material";
import CustomBreadcrumbs from "../../components/Breadcrumbs";
import ButtonAppBar from "../../components/Header/index";
import ProjectForm from "../../components/Form/ProjectForm";

const AddProject = () => {
  return (
    <Box>
      <ButtonAppBar />
      <Container sx={{ mt: 5 }}>
        <CustomBreadcrumbs />

        <Box sx={styles.form}>
          <ProjectForm />
        </Box>
      </Container>
    </Box>
  );
};

export default AddProject;

const styles = {
  form: {
    py: 6,
    px: 8,
    boxShadow: "0px 12px 24px #919EAB1F",
    borderRadius: "20px",
    background: "#fff",
  },
};
