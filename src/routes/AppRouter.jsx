import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ForgetPasswordPage from '../pages/ForgetPasswordPage'
import ResetPassword from "../pages/ResetPassword"
import NotFoundPage from "../pages/NotFoundPage"
import ProtectedRoutes from './ProtectedRoutes'
import Contact from '../pages/Contact'
import ViewProducts from '../pages/ViewProducts'
import AddProducts from '../pages/AddProducts'
import Cart from '../pages/Cart'
// import { useLocation } from 'react-router'

const AppRouter = () => {

    // const location = useLocation();

    // console.log({ location });

    return (
        <Router>
            <Switch >
                <Route exact path="/" component={HomePage}></Route>
                <ProtectedRoutes exact path="/contact" component={Contact}></ProtectedRoutes>
                <ProtectedRoutes exact path="/cart" component={Cart}></ProtectedRoutes>
                <ProtectedRoutes exact path="/enroll-now" component={AddProducts}></ProtectedRoutes>
                <ProtectedRoutes exact path="/our-players" component={ViewProducts}></ProtectedRoutes>
                <ProtectedRoutes exact path="/login" component={LoginPage}></ProtectedRoutes>
                <ProtectedRoutes exact path="/signup" component={RegisterPage}></ProtectedRoutes>
                <ProtectedRoutes exact path="/forget-password" component={ForgetPasswordPage}></ProtectedRoutes>
                <ProtectedRoutes exact path="/reset-password" component={ResetPassword}></ProtectedRoutes>
                <Route exact path='*' component={NotFoundPage} />

            </Switch>
        </Router>
    )
}

export default AppRouter
