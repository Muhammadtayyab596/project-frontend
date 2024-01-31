import React from "react";
import { Stack } from "@mui/material";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

type TextProps = {
  text: string;
};

const NotFound: React.FC<TextProps> = ({ text }) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <ReportGmailerrorredIcon sx={{ fontSize: "30px" }} />
      <h2>{text}</h2>
    </Stack>
  );
};

export default NotFound;
