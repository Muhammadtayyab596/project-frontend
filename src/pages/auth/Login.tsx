import { Link } from "react-router-dom";
import { Box, Typography, Card } from "@mui/material";
import LoginForm from "../../components/Form/LoginForm";

const Login = () => {
  return (
    <Box sx={styles.container}>
      <Card sx={styles.card}>
        <Box sx={styles.box}>
          <Typography component="h1" variant="h4" sx={{ mb: 1 }}>
            Login
          </Typography>

          <Typography variant="body1">Login account to continue</Typography>
        </Box>

        <Box sx={{ my: 3 }}>
          <LoginForm />
        </Box>

        <Box component="form" sx={{ mt: 2.5 }}>
          <Box sx={{ textAlign: "center", mt: 1 }}>
            <Link to="/auth/signup" style={{ color: "#2065D1", fontSize: 15 }}>
              Already have an account? Login
            </Link>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  card: {
    py: 6,
    px: 8,
    boxShadow: "0px 12px 24px #919EAB1F",
    borderRadius: "20px",
    width: "400px",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
};
