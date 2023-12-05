import React, { useEffect } from "react";
import './header.css'
import { Link, useNavigate } from 'react-router-dom';
/* import { Link } from 'react-router-dom' */
/* import { nav } from '../../data/Data' */

const Header = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // ฟังก์ชันที่จะถูกเรียกเมื่อเกิดเหตุการณ์ scroll
        /* const handleScroll = () => {
                   let menuLi = document.querySelectorAll('nav ul li a');
                   let section = document.querySelectorAll('section');
                   let len = section.length;
                   while (--len && window.scrollY + 97 < section[len].offsetTop) { }
                   menuLi.forEach(sec => sec.classList.remove('active'));
                   menuLi[len].classList.add("active");
               }; */
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
        // เพิ่ม event listener สำหรับ scroll event เมื่อ component ถูก render
/*         window.addEventListener('scroll', handleScroll);
 */        handleClick();
        // ฟังก์ชันที่จะถูกเรียกเมื่อ component ถูก unmount เพื่อลบ event listener
        /*      return () => {
                 window.removeEventListener('scroll', handleScroll);
             }; */

    }, [navigate]); // ให้ useEffect รันเพียงครั้งเมื่อ component ถูก render ครั้งแรกเท่านั้น

    const handleSignIn = () => {
        navigate('/signin');
    };

    return <>
        <header>

            <div className="navbar">
                <div className="logo">
                    <h1><a href="/">Res <span>Q</span> connect</a></h1>
                </div>
                <div className="button" >
                    <ul className="nav-links ">
                        <li ><a href="#">หน้าหลัก</a></li>
                        <li><a href="#โครงการ">โครงการ</a></li>
                        <li><a href="#AboutMe">เกี่ยวกับเรา</a></li>
                        <li><a href="#contact">ช่องทางติดต่อ</a></li>
                    </ul>
                    <Link to="/signin" className="btn" onClick={handleSignIn}>
                        <i className='bx bx-log-in-circle'></i><p>Sign In</p>
                    </Link>
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