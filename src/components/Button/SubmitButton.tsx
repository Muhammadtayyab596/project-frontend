import React from "react";
import Button from "@mui/material/Button";
import Loader from "../Loader";

type SubmitButtonProps = {
  label: string;
  type: "submit" | "reset" | "button";
  disabled?: boolean;
  loading?: boolean;
  sx?: any;
  onClick?: () => void;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  type,
  disabled,
  loading,
  sx,
  onClick,
}) => {
  return (
    <Button
      sx={sx}
      variant="contained"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? <Loader color="#fff" width="20px" height="20px" /> : label}
    </Button>
  );
};

export default SubmitButton;
