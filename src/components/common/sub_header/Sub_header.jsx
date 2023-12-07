import React, { useEffect } from "react";
import './sub_header.css'

const Sub_Header = () => {
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
            <div>Content</div>
        </header> // ตรวจสอบว่ามีสัญลักษณ์ปิด JSX อยู่ที่นี่หรือไม่
    );
}

export default Sub_Header 