import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log('auth', auth)
  return (
    auth.roles.find(role => {
      return role?.includes(allowedRoles.find((allowedRole) => allowedRole))
    })
      ? <Outlet />
      : auth?.user
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;