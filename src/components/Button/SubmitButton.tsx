import React from "react";
import Button from "@mui/material/Button";
import Loader from "../Loader";

type SubmitButtonProps = {
  label: string;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
  loading?: boolean;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  type,
  disabled,
  loading,
}) => {
  return (
    <Button
      sx={{ width: "100%", py: 1.5, borderRadius: "20px" }}
      variant="contained"
      type={type}
      disabled={disabled}
    >
      {loading ? <Loader color="#fff" width="20px" height="20px" /> : label}
    </Button>
  );
};

export default SubmitButton;
