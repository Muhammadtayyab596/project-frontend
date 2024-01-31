import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CustomBreadcrumbs = () => {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Link color="text.primary" to="/" style={styles.style}>
          All
        </Link>
        <Link to="/complete" color="text.primary" style={styles.style}>
          Complete
        </Link>

        <Link to="/archive" color="text.primary" style={styles.style}>
          Archive
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default CustomBreadcrumbs;

const styles = {
  style: {
    color: "#2065D1",
    textDecoration: "none",
  },
};
