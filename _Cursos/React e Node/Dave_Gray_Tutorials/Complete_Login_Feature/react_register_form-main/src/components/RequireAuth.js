import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();


  return (
    auth.roles.find(role => {
      console.log('allowedRoles', allowedRoles)
      console.log('role', role)
      console.log('allowedRoles?.includes(role)', allowedRoles?.includes(role))
      return allowedRoles?.includes(role)
    })
      ? <Outlet />
      : auth?.user
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;