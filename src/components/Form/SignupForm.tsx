import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import SubmitButton from "../../components/Button/SubmitButton";
import InputField from "../../components/InputField/InputField";

import { register } from "../../services/authServices";

type schemaTypes = {
  name: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  name: yup.string().required("First name is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup.string().required("Password is required"),
});

const SignupForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const methods = useForm<schemaTypes>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { handleSubmit, control, reset } = methods;

  const registerApiCall = async (data: schemaTypes) => {
    setIsLoading(true);
    try {
      const response = await register(data);
      if (response.status === 201) {
        reset();
        navigate("/login");
      }
    } catch (error) {
      console.log(error, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (data: schemaTypes) => {
    registerApiCall(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ my: 0.5 }}>
          <InputField label="Name" name="name" control={control} />
        </Box>
        <Box>
          <InputField label="Email" name="email" control={control} />
        </Box>
        <Box sx={{ my: 0.5 }}>
          <InputField
            label="Password"
            name="password"
            control={control}
            type="password"
          />
        </Box>
        <Box sx={{ mt: 3 }}>
          <SubmitButton
            label="Create Account"
            type="submit"
            loading={isLoading}
          />
        </Box>
      </form>
    </FormProvider>
  );
};

export default SignupForm;
