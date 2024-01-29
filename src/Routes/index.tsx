import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Project from "../pages/dashboard/Project";

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
  ]);

  return routes;
};

export default Router;
