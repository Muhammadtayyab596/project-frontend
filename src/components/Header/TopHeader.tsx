import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import SubmitButton from "../Button/SubmitButton";

type Props = {
  label: string;
  onHandleChange: (value: string) => void;
  handleRedirect: () => void;
};

const TopHeader: React.FC<Props> = ({
  label,
  onHandleChange,
  handleRedirect,
}) => {
  return (
    <div>
      <Grid container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h5">{label}</Typography>
          <Stack spacing={2} direction="row" alignItems="center">
            <TextField
              variant="outlined"
              placeholder="Search Project"
              onChange={(e) => onHandleChange(e.target.value)}
              InputProps={{
                sx: {
                  borderRadius: "10px",
                  padding: "0px",
                  fontSize: 14,
                },
              }}
            />
            <SubmitButton
              label="Add Project"
              type="button"
              sx={{ py: 1, px: 2, borderRadius: "5px", fontSize: "14px" }}
              onClick={handleRedirect}
            />
          </Stack>
        </Box>
      </Grid>
    </div>
  );
};

export default TopHeader;
