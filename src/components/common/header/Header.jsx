import React from "react";
import './header.css'
/* import { Link } from 'react-router-dom' */
/* import { nav } from '../../data/Data' */

const Header = () => {
    return <>
        <header>
            <div className="container flex">
                <div className="logo">
                    <h1>Res <span>Q</span> connect</h1>
                </div>
                <div className="nav">
                    <ul className="flex">
                        <li><a href="/">หน้าหลัก</a></li>
                        <li><a href="/โครงการ">โครงการ</a></li>
                        <li><a href="/เกี่ยวกับเรา">เกี่ยวกับเรา</a></li>
                        <li><a href="/ช่องทางติดต่อ">ช่องทางติดต่อ</a></li>
                    </ul>
                </div>
                <div className="button flex">
                    <button className="btn1">
                        <i class='bx bx-log-in-circle'></i><p>Sign In</p> 
                    </button>
                </div>
                {/* <div className="toggle">
                    <button>
                        <i class='bx bx-menu'></i>
                    </button>
                </div> */}
            </div>
        </header>
    </>
}

export default Header 