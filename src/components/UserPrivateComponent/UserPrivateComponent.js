import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function UserPrivateComponent() {
    const Auth = localStorage.getItem("token");
    const role = localStorage.getItem("role")
    return (role == "user" && Auth) ? <Outlet /> : <Navigate to="/login" />
}

export default UserPrivateComponent;