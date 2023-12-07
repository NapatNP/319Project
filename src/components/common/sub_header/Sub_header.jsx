import React, { useEffect } from "react";
import './sub_header.css'

const SubHeader = () => {
    useEffect(() => {
        const handleClick = () => {
            let menuIcon = document.querySelector("#menu-icon");
            let navlist = document.querySelector('.nav-links');
            menuIcon.onclick = () => {
                menuIcon.classList.toggle('bx-x');
                navlist.classList.toggle("open");
            };
            window.onscroll = () => {
                menuIcon.classList.remove('bx-x');
                navlist.classList.remove("open");
            };
        };
        handleClick();
    }, []);
    return (
        <header>

        <div className="navbar">
            <div className="logo">
                <h1><a href="/">Res <span>Q</span> connect</a></h1>
            </div>
            <div className="button" >
                <ul className="nav-links ">
                    <li ><a href="#home">หน้าหลัก</a></li>
                    <li><a href="/project">โครงการ</a></li>
                </ul>
                <div id="menu-icon" class="bx bx-menu"></div>
            </div>

        </div>
    </header>
    );
}

export default SubHeader 