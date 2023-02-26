import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function ProtectedRoute() {
    
    const state = useSelector(state => state)

    return state.user.isLoggedIn ? <Outlet /> : <Navigate to="/login" />; 
}

export default ProtectedRoute