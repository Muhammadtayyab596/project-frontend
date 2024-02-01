import { Navigate } from "react-router-dom";

type GuestGuardProps = {
  children: React.ReactNode;
};

export default function GuestGuard({ children }: Readonly<GuestGuardProps>) {
  if (localStorage.getItem("ACCESS_TOKEN")) {
    return <Navigate to="/dashboard/project/all" />;
  }

  return <> {children} </>;
}
