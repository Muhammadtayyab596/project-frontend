import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Project from "../pages/dashboard/Project";
import AddProject from "../pages/dashboard/AddProject";
import ArchiveProject from "../pages/dashboard/Archive";
import CompleteProject from "../pages/dashboard/Complete";
import GuestGuard from "./GuestGuard";
import AuthGuard from "./AuthGuard";

const Router: React.FC = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navigate to="/auth/login" replace />,
    },
    {
      path: "/auth",
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },
        {
          path: "signup",
          element: (
            <GuestGuard>
              <Signup />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: "dashboard",
      children: [
        {
          path: "project/all",
          element: (
            <AuthGuard>
              <Project />
            </AuthGuard>
          ),
        },
        {
          path: "project/add",
          element: (
            <AuthGuard>
              <AddProject />
            </AuthGuard>
          ),
        },
        {
          path: "project/archive",
          element: (
            <AuthGuard>
              <ArchiveProject />
            </AuthGuard>
          ),
        },
        {
          path: "project/complete",
          element: (
            <AuthGuard>
              <CompleteProject />
            </AuthGuard>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <AuthGuard>
          <Navigate to="/dashboard/project/all" replace />
        </AuthGuard>
      ),
    },
  ]);

  return routes;
};

export default Router;
