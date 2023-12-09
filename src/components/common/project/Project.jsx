import React from 'react';
import './project.css'
import { Link } from 'react-router-dom';
const Project = () => {
    return (
        <>
            <section id="project" className='container'>
                <div className='project-header'>
                    <div className='text-header'>
                        <p>โครงการ</p>
                        <h1>Project</h1>
                    </div>
                    <a href="/project" className="btn-project">
                        <i className='bx bx-basketball'></i>
                        โครงการทั้งหมด
                    </a>
                </div>
                <div className='project-section'>
                    <div className='project-card'>
                        <div className='project-img'>
                            <img src="./images/project/project1.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการบริจาคเครื่องมือทางการแพทย์</h3>
                            <p>ด้วยพันธกิจของโรงพยาบาลในด้านการให้บริการด้านสาธารณสุขแก่บุคคลทั่วไป ทำให้ในแต่ละปีโรงพยาบาลจะมีผู้เข้าใช้บริการเป็นจำนวนมาก ทำให้ต้องมีการขยายพื้นที่และมีความต้องการ...</p>
                            <div className='text-sm'>
                                <Link to='/6' className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i className='bx bx-right-arrow-alt'></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <div className='project-img'>
                            <img src="./images/project/project1.jpeg" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการบริจาคก่อสร้างอาคารผู้ป่วย</h3>
                            <p>ทางเราจำเป็นต้องระดมเงินเพื่อก่อสร้างอาคารศูนย์บูรณาการบริการด้านการแพทย์และสาธารณสุข (Extended OPD) เพื่อเพิ่มพื้นที่และขยายขอบเขตการให้บริการผู้ป่วยนอก เชื่อมต่อกับอาคารผู้ป่วยนอกเดิม (อาคาร ภปร) ให้ผู้ป่วยมีโอกาสเข้าถึง...</p>
                            <div className='text-sm'>
                                <Link to='/1' className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i className='bx bx-right-arrow-alt'></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className='project-card'>
                        <div className='project-img'>
                            <img src="./images/project/project2.jpg" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการอนุรักษ์ป่าไม้</h3>
                            <p>โครงการอนุรักษ์ป่าไม้เป็นกิจกรรมหรือแนวทางที่มุ่งเน้นการปกป้อง การรักษา และการบำรุงรักษาความอุดมสมบูรณ์ของป่าไม้ ซึ่งมีวัตถุประสงค์หลักในการรักษาความหลากหลายทางชีวภาพของพื้นที่ป่า ป้องกันการลดลงของพื้นที่ป่า...</p>
                            <div className='text-sm'>
                                <Link to='/11' className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i className='bx bx-right-arrow-alt'></i></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
export default Project 