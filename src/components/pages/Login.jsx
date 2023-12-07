import React from "react";
import Logins from "../common/signin/SignIn";
import SubHeader from "../common/sub_header/Sub_header";
import Footer from "../common/footer/Footer";
/* import { Router } from 'react-router-dom'; */

const SignIn = () => {
    return (
        <>
            <SubHeader />
            <Logins />
            <Footer/>
        </>
    )
}

export default SignIn