import { Navigate } from "react-router-dom";

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  if (!localStorage.getItem("ACCESS_TOKEN")) {
    return <Navigate to="/auth/login" />;
  }

  return <> {children} </>;
}
