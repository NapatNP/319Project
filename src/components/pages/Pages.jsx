import React from "react";
import Header from "../common/header/Header";
import Home from "../common/home/Home";
import About from "../common/about/About";
import Login from "../common/signin/SignIn";
import Team from "../common/team/Team";
import Contact from "../common/contact/Contact";
import Footer from "../common/footer/Footer";

/* import { Router } from 'react-router-dom'; */

function Pages() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Login />
            <Team />
            <Contact />
            <Footer/>
        </>
    );
}

export default Pages