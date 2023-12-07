import React, { useEffect } from "react";
import React, { useEffect } from "react";
import './header.css'

const Header = () => {
    const navigate = useNavigate();
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
                    <h1><a href="/">Res <span>Q</span> connect</a></h1>
                    <h1><a href="/">Res <span>Q</span> connect</a></h1>
                </div>
                <div className="button" >
                    <ul className="nav-links ">
                        <li ><a href="#home">หน้าหลัก</a></li>
                        <li><a href="/project">โครงการ</a></li>
                        <li><a href="#about">เกี่ยวกับเรา</a></li>
                        <li><a href="#contact">ช่องทางติดต่อ</a></li>
                    </ul>
                    <button className="btn">
                        <i className='bx bx-log-in-circle'></i>
                        <a href="/login">
                            <p>Sign in</p>
                        </a>
                    </button>
                    <div id="menu-icon" className="bx bx-menu"></div>
                </div>

            </div>
        </header>
    </>
}

export default Header 