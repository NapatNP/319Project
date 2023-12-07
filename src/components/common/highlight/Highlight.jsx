import React from "react";
import './highlight.css'

const Highlight = () => {
    const iStyle = {
        fontSize: '40px',
        color: 'orange',
    };
    return <>
        <section className="container" id="highlight">
            <div className="text-header">
                <p >ความเชี่ยวชาญ</p>
                <h1 >Expertise</h1>
                <h2>โครงการของ "Res Q Connect" เป็นพื้นที่ที่ทุกคนที่ให้ความสนใจและมีใจรักในการช่วยเหลือสามารถมีส่วนร่วมได้ตามต้องการและใช้ทักษะของตนเองให้เป็นประโยชน์ต่อส่วนร่วม</h2>
            </div>
            <div className="Expertise">
                <div className="ex-card">
                    <div className="ex-img">
                        <i class='bx bxs-group' style={iStyle}></i>
                    </div>
                    <div className="ex-content">
                        <h3>การสร้างชุมชนร่วม</h3>
                        <p>เว็บไซต์ Res Q Connect เป็นศูนย์รวมโครงการที่ผู้มีความสนใจในการช่วยเหลือสามารถพบกันและแบ่งปันความคิดเห็น ประสบการณ์ และความรู้ในการช่วยเหลือผู้ประสบภัยได้</p>
                    </div>
                </div>
                <div className="ex-card">
                    <div className="ex-img">
                        <i class='bx bxl-deezer' style={iStyle}></i>
                    </div>
                    <div className="ex-content">
                        <h3>พื้นที่เสนอโครงการ</h3>
                        <p>สามารถมอบโอกาสให้กับคนที่ต้องการมีส่วนร่วมและมีแนวคิดโครงการในการช่วยเหลือ โดยการเสนอแนวคิดโครงการที่ต้องการรับความช่วยเหลือ หรือความต้องการบริจาค ข้อมูลที่ชัดเจนและเป็นประโยชน์ </p>
                    </div>
                </div>
                <div className="ex-card">
                    <div className="ex-img">
                        <i class='bx bxs-donate-heart' style={iStyle}></i>
                    </div>
                    <div className="ex-content">
                        <h3>เน้นความสำคัญของบริจาค</h3>
                        <p>การเน้นและส่งเสริมให้คนทั่วไปเข้าใจถึงความสำคัญของการให้บริจาคทรัพยากรต่างๆ เช่น เงิน สิ่งของ หรือความร่วมมือในโครงการต่างๆ ช่วยเหลือผู้ที่ต้องการ ไม่ว่าจะเป็นการบริจาคเงินสดหรือสิ่งของ</p>
                    </div>
                </div>
                <div className="ex-card">
                    <div className="ex-img">
                        <i class='bx bx-support' style={iStyle}></i>
                    </div>
                    <div className="ex-content">
                        <h3>การให้คำปรึกษาและการสนับสนุน</h3>
                        <p>การให้บริการคำปรึกษาและสนับสนุนต่อความต้องการของผู้คนที่ต้องการความช่วยเหลือ ไม่ว่าจะเป็นข้อมูลทางการแพทย์ สิทธิทางกฎหมาย หรือคำปรึกษาทางจิตใจและสุขภาพจิต</p>
                    </div>
                </div>
                <div className="ex-card">
                    <div className="ex-img">
                        <i class='bx bxs-hand' style={iStyle}></i>
                    </div>
                    <div className="ex-content">
                        <h3>ส่งเสริมการเข้าร่วมในการจิตอาสา</h3>
                        <p>เว็บไซต์สามารถเป็นช่องทางในการเผยแพร่โอกาสในการเข้าร่วมกับกิจกรรมจิตอาสา การส่งเสริมให้คนเข้าร่วมกิจกรรมจิตอาสาเป็นส่วนสำคัญของโครงการที่มุ่งหวังที่จะช่วยเหลือผู้ประสบภัยและสภาพฉุกเฉินได้ดียิ่งขึ้น</p>
                    </div>
                </div>
                <div className="ex-card">
                    <div className="ex-img">
                        <i class='bx bxs-shield-plus' style={iStyle}></i>
                    </div>
                    <div className="ex-content">
                        <h3>ความปลอดภัยของข้อมูล</h3>
                        <p>เราให้ความสำคัญกับความปลอดภัยของข้อมูลทุกประการ ด้วยการใช้เทคโนโลยีและมาตรการที่เหมาะสม เพื่อปกป้องข้อมูลส่วนบุคคลและการทำธุรกรรมออนไลน์อย่างมีความปลอดภัย</p>
                    </div>
                </div>
            </div>
        </section>
    </>
};
export default Highlight