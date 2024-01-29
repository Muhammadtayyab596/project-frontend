import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import { Box } from "@mui/material";

import SubmitButton from "../../components/Button/SubmitButton";
import InputField from "../../components/InputField/InputField";
import { loginUser } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

type schemaTypes = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is invalid"),
  password: yup.string().required("Password is required"),
});

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: any) => state.user);

  console.log(loading, error, "loading, error");

  const methods = useForm<schemaTypes>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, control, reset } = methods;

  const loginAPiCall = async (data: schemaTypes) => {
    // @ts-ignore
    const respons = await dispatch(loginUser(data));

    // @ts-ignore
    if (respons?.payload?.data?.token) {
      reset();
      navigate("/");
    }
  };

  const onSubmit = (data: schemaTypes) => {
    loginAPiCall(data);
  };
  return (
    <FormProvider {...methods}>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ my: 0.5 }}>
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
            // loading={loading}
          />
        </Box>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
