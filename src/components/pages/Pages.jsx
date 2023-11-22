import React from "react";
import Header from "../common/header/Header";
import Home from "../common/home/Home";
import About from "../common/about/About";
import Login from "../common/signin/SignIn";
/* import { Router } from 'react-router-dom'; */

const Pages = () => {
    return (
        <>
            <Header />
            <Home />
            <About/>
            <Login/>
        </>
    )
}

export default Pages