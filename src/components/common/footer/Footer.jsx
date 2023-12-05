import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src="./favicon.ico" alt="About Me" />
        </div>
        <div className="footer-right">
          <p>&copy; Res Q Connect | <a href="#">หน้าหลัก</a> | <a href="#">โครงการ</a>| <a href="#">เกี่ยวกับเรา</a>| <a href="#">ช่องทางติดต่อ</a></p>
        </div>
      </div>
    </section>
  );
}
export default Footer;
