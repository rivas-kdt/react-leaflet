import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/Auth";

export function RequireAuth({ children }) {
  let { user } = useAuth();
  let location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
