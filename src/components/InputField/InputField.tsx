import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

type InputFieldProps = {
  name: string;
  label: string;
  type?: string;
  control: any;
  defaultValue?: string;
  error?: boolean;
  helperText?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  control,
  error,
  helperText,
  type,
  ...other
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          error={!!error}
          type={type ?? "text"}
          value={field.value || ""}
          helperText={error ? error?.message : helperText}
          InputProps={{
            sx: {
              borderRadius: "50px",
            },
          }}
          sx={{
            width: "100%",
            mt: 2,
          }}
          {...other}
        />
      )}
    />
  );
};

export default InputField;
