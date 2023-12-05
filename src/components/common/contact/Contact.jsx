import React from "react";
import './contact.css'

const Contact = () => {
  const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    overflow: 'hidden',
    width: '50px',
    height: '50px',
    backgroundColor: '#ffA500', // สีส้ม
    padding: '5px',
  };

  const iStyle = {
    fontSize: '30px',
    color: '#ffffff',
  };

  return (
    <section id="contact" className="contact">
      <div className="left-contact">
        <div className="text-header">
          <p>ช่องทางติดต่อ</p>
          <h1>Contact Us</h1>
        </div>
        <p>

          <div className="icon-contact">
            <span style={iconStyle}>
              <i className='bx bx-home' style={iStyle}></i>
            </span>
            <p><span>ที่อยู่ </span> 9/1 หมู่ 5 ถนนพหลโยธิน ต.คลองหนึ่ง อ.คลองหลวง ปทุมธานี 12120</p>
          </div>

          <div className="icon-contact">
            <span style={iconStyle}>
              <i class='bx bx-phone' style={iStyle}></i>
            </span>
            <p><span>โทร </span>02 407 3888 </p>
          </div>

          <div className="icon-contact">
            <span style={iconStyle}>
              <i class='bx bx-printer' style={iStyle}></i>
            </span>
            <p><span>แฟ็กซ์ </span>02 407 3999<br /> </p>
          </div>

          <div className="icon-contact">
            <span style={iconStyle}>
              <i class='bx bx-envelope'  style={iStyle}></i>
            </span>
            <p><span>อีเมล </span>General Enquires: info@bu.ac.th/ Admissions: inter.admission@bu.ac.th<br /> </p>
          </div>

          <div className="icon-contact">
            <span style={iconStyle}>
              <i class='bx bx-pen' style={iStyle}></i>
            </span>
            <p><span>รับสมัครนักศึกษา </span>02 407 3888 กด 1 </p>
          </div>
        </p>
      </div>
      
      <div className="right-contact">
        <div id="map">
          <iframe className="map"
            src="https://maps.google.com/maps?q=%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
}
export default Contact