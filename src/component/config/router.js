import react from "react";
import {
    BrowserRouter, Routes, Route, Navigate,
    Outlet
} from "react-router-dom";
import Signup from "../../views/signup";
import Login from "../../views/login";
import Homee from '../../homee'
import Seead from "../../views/seeAd/seeAd";
import Sell from "../../views/sell/sell";
import Profile from "../../views/profile/profile";
import React from 'react'
import { useSelector } from "react-redux";

export default function Navigation() {
    const user = useSelector(state => state.user)
    return (
        <BrowserRouter>


            <Routes>

                <Route element={<AuthRoutes user={user} />}>
                    <Route path="/home" element={<Homee />} />
                    <Route path="/sell" element={<Sell />} />
                    <Route path="/postdetail" element={<Seead />} />
                    <Route path="/seeAd/:adId" element={<Seead />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Login />} />
            </Routes>









        </BrowserRouter>
    )
}

const AuthRoutes = ({ user }) => {
    if (!user) {
        return <Navigate to="/" />
    }

    return <Outlet />
}
