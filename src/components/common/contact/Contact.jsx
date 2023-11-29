import React from "react";
import './contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="left-contact">
        <div className="text-header">
          <p>ช่องทางติดต่อ</p>
          <h1>Contact Us</h1>
        </div>
        <p> <span>ที่อยู่ </span> 9/1 หมู่ 5 ถนนพหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง ปทุมธานี 12120<br />
          <span>โทร </span>02 407 3888 <br />
          <span>แฟ็กซ์ </span>02 407 3999<br />
          <span>อีเมล </span>General Enquires: info@bu.ac.th/ Admissions: inter.admission@bu.ac.th<br />
          <span>รับสมัครนักศึกษา </span>02 407 3888 กด 1</p>
      </div>
      <div className="right-contact">
        <div id="map">
          <iframe className="map"
            src="https://maps.google.com/maps?q=%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
             frameborder="0"  allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
}
export default Contact