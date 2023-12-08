import React from 'react';
import './sub_project.css';

const Project = () => {
    return (
        <>
            <section id="sub_project" className='container'>
                <div className='project-sub-header'>
                    <div className='text-header'>
                        <p>โครงการ</p>
                        <h1>Project</h1>
                    </div>
                    <div className="">
                        <p><a href="/">all</a> | <a href="/">โครงการที่ 1</a> | <a href="#project">โครงการที่ 2</a> | <a href="#about">โครงการที่ 3</a></p>
                    </div>
                </div>
                <div className='sub-project-section'>
                    {/* Start Project 1*/}
                    <div className='project-card' id='project1_1'>
                        <div className='project-img'>
                            <img src="./images/project/project1.jpeg" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการบริจาคก่อสร้างอาคารผู้ป่วย</h3>
                            <p>ทางเราจำเป็นต้องระดมเงินเพื่อก่อสร้างอาคารศูนย์บูรณาการบริการด้านการแพทย์และสาธารณสุข (Extended OPD) เพื่อเพิ่มพื้นที่และขยายขอบเขตการให้บริการผู้ป่วยนอก เชื่อมต่อกับอาคารผู้ป่วยนอกเดิม (อาคาร ภปร) ...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card' id='project1_1'>
                        <div className='project-img'>
                            <img src="./images/project/project1.2.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการบริจาคอวัยวะมนุษย์</h3>
                            <p>บริจาคอวัยวะ คือ การบริจาคอวัยวะที่ยังมีสภาพสมบูรณ์เพื่อใช้ในการปลูกถ่ายอวัยวะให้แก่ผู้ป่วยที่ไม่สามารถรักษาให้หายได้ด้วยวิธีอื่น หรือเป็นผู้ป่วยระยะสุดท้าย อาจได้จากอวัยวะของผู้มีจิตศรัทธาซึ่งได้แสดงเจตนารมณ์ในการบริจาค ...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card' id='project1_1'>
                        <div className='project-img'>
                            <img src="./images/project/project1.3.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการบริจาคค่ารักษาพยาบาลผู้ป่วย</h3>
                            <p>โครงการนี้ เกิดจากความมุ่งมั่นตั้งใจที่จะช่วยเหลือผู้ป่วยโรงพยาบาลรามาธิบดีที่ไม่สามารถรับภาระค่าใช้จ่ายในการรักษาพยาบาลได้ ให้ได้รับโอกาสเข้าถึงการรักษาพยาบาลที่ดีและมีประสิทธิภาพ ซึ่งครอบคลุมผู้ป่วย ...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card' id='project1_1'>
                        <div className='project-img'>
                            <img src="./images/project/project1.4.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการบริจาคในการวิจัยทางการแพทย์</h3>
                            <p>ร่วมบริจาคเงิน เพื่อสมทบทุน โครงการขอรับเงินบริจาคเพื่อการวิจัยทางด้านโครงการการพัฒนาต้นแบบการศึกษาร่วมกันระหว่างสหสาขาวิชาชีพทางการแพทย์ เพื่อเสริมสร้างความปลอดภัยในผู้ป่วยฉุกเฉินด้วยการเรียนรู้ ...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card' id='project1_1'>
                        <div className='project-img'>
                            <img src="./images/project/project1.5.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการบริจาคช่วยผู้ประสบภัยน้ำท่วม</h3>
                            <p>สถานการณ์น้ำท่วมหนักรุนแรงจากมรสุม ในประเทศ ส่งผลให้ประชาชน ได้รับผลกระทบอย่างหนัก ในหลายๆพื้นที่ได้รับความเสียหาย มีทั้งผู้เสียชีวิตและผู้บาดเจ็บ รวมไปถึงต้องทำการอพยพอีกหลายหลังคาเรือน ...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    {/* End Project 1*/}   
                    {/* Start Project 2*/}
                    <div className='project-card' id='project2_1'>
                        <div className='project-img'>
                            <img src="./images/project/project1.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการบริจาคเครื่องมือทางการแพทย์</h3>
                            <p>ด้วยพันธกิจของโรงพยาบาลในด้านการให้บริการด้านสาธารณสุขแก่บุคคลทั่วไป ทำให้ในแต่ละปีโรงพยาบาลจะมีผู้เข้าใช้บริการเป็นจำนวนมาก ทำให้ต้องมีการขยายพื้นที่และมีความต้องการอุปกรณ์ทางการแพทย์...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card' id='project2_1'>
                        <div className='project-img'>
                            <img src="./images/project/project2.2.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการบริจาคเครื่องมือดับเพลิงและอุปกรณ์ป้องกัน</h3>
                            <p>ได้เล็งเห็นความสำคัญของการร่วมป้องกันสาธารณภัย และการป้องกันเหตุร้ายไม่คาดฝันที่เกิดขึ้นได้ทุกเมื่อ ซึ่งสำนักป้องกันและบรรเทาสาธารณภัยมีบทบาทสำคัญอย่างยิ่งในการป้องกันเหตุ ระงับเหตุ และฟื้นฟู-สงเคราะห์...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card' id='project2_1'>
                        <div className='project-img'>
                            <img src="./images/project/project2.3.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการบริจาคทรัพยากรอาหารและน้ำสะอาด</h3>
                            <p>ด้วยปัจจุบันมีหลากหลายปัญหาที่ส่งผลกระทบกับประชาชนชาวไทยจำนวนมาก ไม่ว่าจะเป็นอุทกภัยขึ้น หลายพื้นที่ในประเทศไทย โรคไวรัสโควิด – 19 ชุมชนคนไร้บ้าน แรงงานตกค้าง รึปัญหาเศรษฐกิจ...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card' id='project2_1'>
                        <div className='project-img'>
                            <img src="./images/project/project2.4.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการบริจาคเครื่องอุปโภค-บริโภคสำหรับอัคคีภัย</h3>
                            <p>ทางเราประสานงานกับหน่วยงานในท้องที่ที่เกิดอัคคีภัย  เพื่อดำเนินการลงทะเบียนจำนวนผู้ประสบภัย โดยมูลนิธิฯจะจ่ายเงินสงเคราะห์ตามข้อเท็จจริงแก่ผู้ประสบอัคคีภัย รายละ  3,000.-บาท พร้อมสงเคราะห์เครื่องอุปโภ...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card' id='project2_1'>
                        <div className='project-img'>
                            <img src="./images/project/project2.5.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการบริจาคช่วยหมาและแมว</h3>
                            <p>ขอความเมตตาให้น้องหมาที่ป้าเกดดูแลอยู่นะคะ มีทั้งน้องหมาแก่ น้องหมาพิการ ท่านใดอยากร่วมบุญมากหรือน้อย ทางเราต้องการอาหารเม็ดสุนัขอาหารเม็ดแมว อาหารกระป๋องสุนัขและแมว อาหารกระป๋องสำหรับสุนัขป่วย...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    {/* End Project 2*/}
                    {/* Start Project 3*/}
                    <div className='project-card' id='project3_1'>
                        <div className='project-img'>
                            <img src="./images/project/project2.jpg" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการอนุรักษ์ป่าไม้</h3>
                            <p>โครงการอนุรักษ์ป่าไม้เป็นกิจกรรมหรือแนวทางที่มุ่งเน้นการปกป้อง การรักษา และการบำรุงรักษาความอุดมสมบูรณ์ของป่าไม้ ซึ่งมีวัตถุประสงค์หลักในการรักษาความหลากหลายทางชีวภาพของพื้นที่ป่า ป้องกันการลดลงของพื้นที่ป่า...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card' id='project3_1'>
                        <div className='project-img'>
                            <img src="./images/project/project3.2.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการบริจาคเลือด</h3>
                            <p>โครงการบริจาคเลือดเป็นกิจกรรมทางสังคมที่เน้นไปที่การให้เลือดจากบุคคลทั่วไป เพื่อให้เลือดนี้นำไปใช้ในการรักษาผู้ป่วยหรือในกรณีฉุกเฉินทางการแพทย์ เป้าหมายหลักของโครงการนี้คือเพิ่มปริมาณเลือดที่มีอยู่ในสภาพฉุกเฉิน...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card' id='project3_1'>
                        <div className='project-img'>
                            <img src="./images/project/project3.3.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการอนุรักษ์สัตว์น้ำ</h3>
                            <p>กิจกรรมที่มุ่งเน้นการปกป้องและรักษาสิ่งแวดล้อมทางน้ำ, ลดปัญหาที่ส่งผลกระทบต่อสัตว์น้ำและชุมชน รวมถึงการส่งเสริมการอนุรักษ์สิ่งมีชีวิตในทางน้ำทั้งในทะเล, แม่น้ำ, และบ่อเลี้ยงน้ำ. โครงการนี้มีเป้าหมายในการรักษาควา...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card' id='project3_1'>
                        <div className='project-img'>
                            <img src="./images/project/project3.4.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการจิตอาสาเก็บขยะ</h3>
                            <p>จากปัญหาสิ่งแวดล้อมชายฝั่งทะเลในปัจจุบัน ได้เกิดปัญหาขยะซึ่งเป็นมลพิษทางทะเลส่งผลกระทบต่อความสมดุลทางธรรมชาติ ซึ่งหลายฝ่ายทั่วโลกเริ่มตระหนักถึงปัญหาและผลกระทบที่จะตามมาในอนาคต ซึ่งบริษัทฯ ได้ตระหนักถึงปัญหา ...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className='project-card' id='project3_1'>
                        <div className='project-img'>
                            <img src="./images/project/project3.5.png" alt="" />
                        </div>
                        <div className='project-content'>
                            <h3>โครงการจิตอาสาพัฒนาศูนย์เด็ก</h3>
                            <p>พัฒนาศูนย์เด็กเป็นกิจกรรมที่มุ่งเน้นการสนับสนุนและพัฒนาเด็กที่อยู่ในชุมชน โดยมีจิตอาสาเป็นผู้ร่วมมือกับองค์กรหรือหน่วยงานที่เกี่ยวข้อง กิจกรรมทางจิตอาสานี้มีวัตถุประสงค์ในการส่งเสริมการเรียนรู้และพัฒนาทักษะ ...</p>
                            <div className='text-sm'>
                                <a href="/" className='text-sm project-link'><p>ดูรายละเอียดโครงการ</p> <i class='bx bx-right-arrow-alt'></i></a>
                            </div>
                        </div>
                    </div>
                    {/* End Project 3*/}
                </div>
            </section>
        </>
    );
};

export default Project;
