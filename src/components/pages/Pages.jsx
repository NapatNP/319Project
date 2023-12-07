import React from "react";
import Header from "../common/header/Header";
import Home from "../common/home/Home";
import About from "../common/about/About";
import Highlight from "../common/highlight/Highlight";
import Team from "../common/team/Team";
import Footer from "../common/footer/Footer";
import Contact from "../common/contact/Contact";
/* import { Router } from 'react-router-dom'; */

function Pages() {
    return (
        <>
            <Header />
            <Home />
            <About/>
            <Highlight/>
            <Team/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Pages