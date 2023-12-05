import React from "react";
import './about.css'

const About = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./favicon.ico" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">เกี่ยวกับเรา</p>

          <h1 className="skills-section--heading">Res Q Connect</h1>

          <p className="hero--section-description">
            เราเป็นตัวแทนที่มีความมุ่งมั้นและตั้งใจให้ความช่วยเหลือกับผู้ที่ประสบภัยและต้องการความช่วยเหลือ โดยเราได้เปิดรับบริจาคเพื่อสนับสนุนกิจกรรม
            จิตอาสาต่างๆและเรายินดีต้อนรับทุกท่านที่ต้องการร่วมเป็นส่วนหนึ่งในการสนับสนุนพวกเรา Res Q Connect ในการกระทำดีๆ เพื่อช่วยเหลือสังคมในช่วงเวลาที่ทุกคนต้องการความช่วยเหลือ
          </p>
          <p className="hero--section-description">
            นอกจากนี้ เรายังเปิดโอกาสให้คนที่มีใจรักการช่วยเหลือมีโอกาสร่วมมือกับทีมของเราในกิจกรรมต่างๆ เพื่อสร้างความเข้มแข็งในการตอบสนองต่อสถานการณ์ฉุกเฉินและพร้อมที่จะให้ความช่วยเหลือที่เป็นประโยชน์ที่สุดให้กับผู้ที่ต้องการ
          </p>
          <p className="hero--section-description">
            ทีมของเรามุ่งเน้นในการให้ข้อมูลและแนวทางที่เป็นประโยชน์ทั้งในช่วงภัยพิบัติและหลังภัยพิบัติ เพื่อให้ทุกท่านสามารถตัดสินใจและรับมือกับสถานการณ์ได้อย่างถูกต้องและปลอดภัย พวกเรายินดีให้คำปรึกษาและสนับสนุนทุกท่านที่ต้องการความช่วยเหลือในทุกปัจจุบันของชีวิตที่ท้าทาย หวังว่าทุกคนจะร่วมมือกันสร้างสังคมที่แข็งแกร่งและเข้มแข็งขึ้นไปพร้อมๆ กัน
          </p>

        </div>
      </div>
    </section>

  );
};
export default About