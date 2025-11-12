import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
const ProtectedRoutes = () => {
  
    // const isLoggedin = useAuth()  // Not using this now, but rather later
    const user = null

  return  user ? <Outlet/> : <Navigate to="/login"/>
  
}

export default ProtectedRoutes