import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom';

const ProtectedRoutes = (props) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    // console.log("cur", currentUser);
    const { path } = props
    const location = useLocation()
    // console.log(location.state);

    if (path === "/login" || path === "/signup" || path === "/forget-password" || path === "/reset-password") {
        return currentUser ? <Redirect to={location.state?.from ?? "/"} /> : <Route {...props} />
    }


    return currentUser ? <Route {...props} /> : <Redirect to={{
        pathname: "/login",
        state: { from: path }
    }} />
}

export default ProtectedRoutes
