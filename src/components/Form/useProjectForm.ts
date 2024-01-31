import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../services/projectServices";
import * as yup from "yup";

type SchemaTypes = {
  name: string;
  description: string;
  image: string;
  techstack: string;
  githubRepoLink: string;
  liveUrl: string;
};

type Props = {
  defaultData?: any;
  setOpenIsEditModal?: any;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  image: yup.string().required("image is required"),
  techstack: yup.string().required("techstack is required"),
  githubRepoLink: yup
    .string()
    .required("Github Repo Link is required")
    .url("Invalid URL format, please enter a valid URL"),
  liveUrl: yup
    .string()
    .required("live Url is required")
    .url("Invalid URL format, please enter a valid URL"),
});

const useProjectForm = (defaultData: any, setOpenIsEditModal: any) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const methods = useForm<SchemaTypes>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: defaultData?.name ?? "",
      description: defaultData?.description ?? "",
      image: defaultData?.image ?? "",
      techstack: defaultData?.techstack ?? "",
      githubRepoLink: defaultData?.githubRepoLink ?? "",
      liveUrl: defaultData?.liveUrl ?? "",
    },
  });

  const { reset } = methods;

  const onSubmit = (data: SchemaTypes) => {
    console.log(data);
    apiCallFUntion(data);
    setOpenIsEditModal(false);
  };

  const apiCallFUntion = async (data: SchemaTypes) => {
    try {
      setLoading(true);
      const response = await createProject(data);
      console.log(response, "create-response");
      reset();
    } catch (er) {
      console.log(er, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleRedirect = () => {
    navigate(-1);
  };
  return {
    methods,
    onSubmit,
    handleRedirect,
    loading,
  };
};

export default useProjectForm;
