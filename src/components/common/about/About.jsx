import React from "react";
import './about.css'

const About = () => {
    return <>
        <section id="about" className="container">
            <div className="about-img text-center">
                <img src="./images/about.png" alt="About Me" />
            </div>
            <div className="about-text">
                <div className="text-header">
                    <p className="section--title">เกี่ยวกับเรา</p>
                    <h1 className="skills-section--heading">Res Q Connect</h1>
                </div>
                <p className="hero--section-description">
                    เราเป็นตัวแทนที่มีความมุ่งมั้นและตั้งใจให้ความช่วยเหลือกับผู้ที่ประสบภัยและต้องการความช่วยเหลือ โดยเราได้เปิดรับบริจาคเพื่อสนับสนุนกิจกรรม
                    จิตอาสาต่างๆและเรายินดีต้อนรับทุกท่านที่ต้องการร่วมเป็นส่วนหนึ่งในการสนับสนุนพวกเรา Res Q Connect ในการกระทำดีๆ เพื่อช่วยเหลือสังคมในช่วงเวลาที่ทุกคนต้องการความช่วยเหลือ <br /><br />
                    นอกจากนี้ เรายังเปิดโอกาสให้คนที่มีใจรักการช่วยเหลือมีโอกาสร่วมมือกับทีมของเราในกิจกรรมต่างๆ เพื่อสร้างความเข้มแข็งในการตอบสนองต่อสถานการณ์ฉุกเฉินและพร้อมที่จะให้ความช่วยเหลือที่เป็นประโยชน์ที่สุดให้กับผู้ที่ต้องการ <br /><br />
                    ทีมของเรามุ่งเน้นในการให้ข้อมูลและแนวทางที่เป็นประโยชน์ทั้งในช่วงภัยพิบัติและหลังภัยพิบัติ เพื่อให้ทุกท่านสามารถตัดสินใจและรับมือกับสถานการณ์ได้อย่างถูกต้องและปลอดภัย พวกเรายินดีให้คำปรึกษาและสนับสนุนทุกท่านที่ต้องการความช่วยเหลือในทุกปัจจุบันของชีวิตที่ท้าทาย หวังว่าทุกคนจะร่วมมือกันสร้างสังคมที่แข็งแกร่งและเข้มแข็งขึ้นไปพร้อมๆ กัน
                </p>
            </div>
        </section>
    </>
};
export default About