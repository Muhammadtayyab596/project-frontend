import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface LoadierProps {
  color?: string;
  width?: string;
  height?: string;
}

const Loadier: React.FC<LoadierProps> = ({ color, width, height }) => {
  return (
    <CircularProgress style={{ color: color, width: width, height: height }} />
  );
};

export default Loadier;
