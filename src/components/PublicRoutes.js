import { Navigate, Outlet } from "react-router-dom";
import React from 'react'

export const PublicRoutes = () => {
    if(!localStorage.getItem("Role") && !localStorage.getItem("Token")) {
        return (
            <Outlet />
        )
    } else {
        if(localStorage.getItem("Role") == "admin") {
            return <Navigate to="/" replace />
        } else if (localStorage.getItem("Role") == "reviewer") {
            return <Navigate to="/reviewer" replace />
        } else if (localStorage.getItem("Role") == "guest") {
            return <Navigate to="/guest" replace />
        } else {
            return <Navigate to="*" replace />
        }
    }
}

export default PublicRoutes