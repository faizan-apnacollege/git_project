import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateComponent() {
    const Auth = localStorage.getItem("token");
    const role = localStorage.getItem("role")
    return (role == "admin" && Auth) ? <Outlet /> : <Navigate to="/register" />
}

export default PrivateComponent;