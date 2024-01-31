import { FormProvider } from "react-hook-form";
import { Box, Grid } from "@mui/material";
import SubmitButton from "../../components/Button/SubmitButton";
import InputField from "../../components/InputField/InputField";
import useProjectForm from "./useProjectForm";

type PropsTypes = {
  setOpenIsEditModal?: (value: boolean) => void;
  defaultData?: any;
};

const ProjectForm: React.FC<PropsTypes> = ({
  setOpenIsEditModal,
  defaultData,
}): JSX.Element => {
  const { methods, onSubmit, handleRedirect, loading } = useProjectForm(
    defaultData,
    setOpenIsEditModal
  );
  const { handleSubmit, control } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item lg={6}>
            <Box sx={{ p: 1.5 }}>
              <InputField label="Name" name="name" control={control} />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ p: 1.5 }}>
              <InputField
                label="Description"
                name="description"
                control={control}
              />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ p: 1.5 }}>
              <InputField label="Image url" name="image" control={control} />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ p: 1.5 }}>
              <InputField
                label="Teck Stack"
                name="techstack"
                control={control}
              />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ p: 1.5 }}>
              <InputField
                label="Github Repo Link"
                name="githubRepoLink"
                control={control}
              />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box sx={{ p: 1.5 }}>
              <InputField label="live Url" name="liveUrl" control={control} />
            </Box>
          </Grid>
          <Grid item lg={12}>
            <Box
              sx={{
                p: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                mt: 1,
              }}
            >
              <SubmitButton
                label="Cancel"
                type="button"
                sx={{ py: 1, borderRadius: "20px", background: "red" }}
                onClick={handleRedirect}
              />
              <SubmitButton
                label="Create"
                type="submit"
                sx={{ py: 1, borderRadius: "20px" }}
                loading={loading}
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}></Box>
      </form>
    </FormProvider>
  );
};

export default ProjectForm;
