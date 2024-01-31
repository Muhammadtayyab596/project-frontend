import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Project from "../pages/dashboard/Project";
import AddProject from "../pages/dashboard/AddProject";
import ArchiveProject from "../pages/dashboard/Archive";
import CompleteProject from "../pages/dashboard/Complete";

const Router: React.FC = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Project />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "Signup",
      element: <Signup />,
    },
    {
      path: "add-project",
      element: <AddProject />,
    },
    {
      path: "/archive",
      element: <ArchiveProject />,
    },
    {
      path: "/complete",
      element: <CompleteProject />,
    },
  ]);

  return routes;
};

export default Router;
