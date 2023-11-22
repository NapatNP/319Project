import React, { useEffect} from "react";
import './header.css'
/* import { Link } from 'react-router-dom' */
/* import { nav } from '../../data/Data' */

const Header = () => {
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
    return <>
        <header>

            <div className="navbar">
                <div className="logo">
                    <h1><a href="index.html">Res <span>Q</span> connect</a></h1>
                </div>
                <div className="button" >
                    <ul className="nav-links ">
                        <li ><a href="/">หน้าหลัก</a></li>
                        <li><a href="/โครงการ">โครงการ</a></li>
                        <li><a href="/เกี่ยวกับเรา">เกี่ยวกับเรา</a></li>
                        <li><a href="/ช่องทางติดต่อ">ช่องทางติดต่อ</a></li>
                    </ul>
                    <button className="btn">
                        <i class='bx bx-log-in-circle'></i><p>Sign In</p>
                    </button>
                    <button className="btn">
                        <i class='bx bx-log-in'></i><p>Log In</p>
                    </button>
                    <div id="menu-icon" class="bx bx-menu"></div>
                </div>

            </div>
        </header>
    </>
}

export default Header 