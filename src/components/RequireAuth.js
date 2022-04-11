import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        allowedRoles?.includes(localStorage.getItem("Role"))
            ? <Outlet />
            : localStorage.getItem("Role")
                ? <Navigate to="/unauthorized" replace />
                : <Navigate to="/login" replace />
    );
}

export default RequireAuth;