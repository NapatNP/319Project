import React from "react";
import './about.css'

const About = () => {
    return (
/*         <div className="card">
            <img src="./favicon.ico" alt="Your Name" className="profile-image" />
            <h1>About Me</h1>

            <div className="card-section">
                <h2>Introduction</h2>
                <p>เป็นเว็บที่มุ่งมั่นที่จะให้ความช่วยเหลือและสนับสนุนผู้ที่ได้รับผลกระทบจากภัยพิบัติและภัยธรรมชาติ เป็นเว็บที่มุ่งมั่นที่จะให้ความช่วยเหลือและสนับสนุนผู้ที่ได้รับผลกระทบจากภัยพิบัติและภัยธรรมชาติเชื่อในพลังของชุมชนและการร่วมมือกันเพื่อสร้างชีวิตที่สดใสและมีความหวังมากขึ้น</p>
            </div>

            <div className="card-section">
                <h2>Experience</h2>
                <p>เรามีส่วนร่วมในกิจกรรมช่วยเหลือภัยพิบัติมาเป็นเวลา xx ปี รวมถึงการทำงานกับองค์กร xxxxxxx และการมีส่วนร่วมในโครงการต่างๆ ที่มุ่งเน้นให้การช่วยเหลือทันทีและการฟื้นฟูระยะยาว</p>
            </div>

            <div className="card-section">
                <h2>Skill</h2>
                <ul>
                    <li>การตอบสนองฉุกเฉิน</li>
                    <li>การสื่อสารกับชุมชน</li>
                    <li>การประสานงานด้านโลจิสติกส์</li>
                </ul>
            </div>

            <div className="card-section">
                <h2>Contact</h2>
                <p>Email: abc@bumail.net</p>
                <p>โทร: 012-345-6789</p>
            </div>

            <footer>
                <p>ขอบคุณที่สนับเว็บไซต์ของเรา</p>
                <p>Thank you for visiting our site</p>
            </footer>
        </div> */

        <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./favicon.ico" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">เกี่ยวกับเรา</p>
          
            <h1 className="skills-section--heading">Res Q Connect</h1>

            <p className="hero--section-description">
              เราเป็นทีมผู้ที่มีประสบการณ์และความมุ่งมั่นในการให้บริการช่วยเหลือที่ทันสมัยและเหมาะสมสำหรับผู้ที่ต้องการความช่วยเหลือในสถานการณ์ฉุกเฉิน ทางเราได้นำเสนอแหล่งข้อมูลที่สมบูรณ์แบบเกี่ยวกับการเตรียมตัวและการรับมือกับสถานการณ์ฉุกเฉินต่าง ๆ ซึ่งสามารถให้ข้อมูลและแนวทางที่เป็นประโยชน์ทั้งในระหว่างภัยพิบัติและหลังภัยพิบัติ เพื่อให้ผู้ใช้สามารถตัดสินใจและรับมือกับสถานการณ์ได้อย่างมั่นใจ
            </p>
            <p className="hero--section-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              officiis sit debitis omnis harum sed veniam quasi dicta accusamus
              recusandae?
            </p>
          </div>
        </div>
      </section>

    );
};    
export default About