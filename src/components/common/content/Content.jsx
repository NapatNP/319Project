import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './content.css'
import data from "../../data/project.json";
import { useParams } from 'react-router-dom';

const Content = () => {
    const navigate = useNavigate(); 
    const { projectId } = useParams();
    const itemId = parseInt(projectId, 10);
    const item = data.projects.find(item => item.id === itemId);
    const [donationAmount, setDonationAmount] = useState("");
    const myImage = item.src;

    if (!item) {
        return <div>ไม่พบข้อมูลโครงการ</div>;
    }

    const projectImageStyle = {
        width: 'auto', // Set the desired width
        height: '388px', // Maintain aspect ratio
        maxwith: '388px',
        borderRadius: '15px', // Set the border radius to make it rounded
        border: '2px solid gray',
    };
    const iStyle = {
        fontSize: '35px',
        color: 'orange',
    };
    const handleDonation = (amount) => {
        // กำหนดค่าจำนวนเงินที่ต้องการบริจาค
        setDonationAmount(amount);
    };

    const handleDonateSubmit = () => {
        if (donationAmount === "") {
            alert("กรุณาระบุจำนวนเงินก่อน");
        } else {
            // ส่งค่าเงินที่ใส่ไปยังหน้า Pay
            navigate(`/paytation?amount=${donationAmount}`);
        }
    };

    return (
        <>
            <section id="mini-project" className='container'>
                <div className="left">
                    <div className='mini-sub-header'>
                        <h1>{item.title}</h1>
                        <div className='date'>
                            <i className='bx bxs-calendar' style={iStyle}></i>
                            <p>18/02/2022 - 06/12/2023</p>
                        </div>
                    </div>
                    <div >
                        <img src={myImage} alt="" style={projectImageStyle} />
                    </div>
                    <div className='type-project'>
                        <h3>ประเภทโครงการ:</h3>
                        <p>{item.type}</p>
                    </div>
                    <div className="mini-sub-card">
                        <h2>รายละเอียดโครงการ</h2>
                        <p> {item.description}</p>
                    </div>
                </div>
                <div className="right">
                    <div className="mini-sub-card" id='project_1' style={{ display: item.type === 'project_1' ? 'block' : 'none' }}>
                        <h2 className='text-center'>ร่วมบริจาคให้กับโครงการ</h2>
                        <div className=''>
                            <div className='btnn'>
                                <button className='button-price' onClick={() => handleDonation(500)}>
                                    500
                                </button>
                                <button className='button-price' onClick={() => handleDonation(1000)}>
                                    1000
                                </button>
                                <button className='button-price' onClick={() => handleDonation(1500)}>
                                    1500
                                </button>
                                <button className='button-price' onClick={() => handleDonation(2000)}>
                                    2000
                                </button>
                                <button className='button-price' onClick={() => handleDonation(2500)}>
                                    2500
                                </button>
                                <button className='button-price' onClick={() => handleDonation(3000)}>
                                    3000
                                </button>
                            </div>
                            <div>
                                <input
                                    type='number'
                                    className='sum-money'
                                    placeholder='ระบุจำนวนเงิน'
                                    value={donationAmount}
                                    onChange={(e) => setDonationAmount(e.target.value)}
                                />
                                <h1>**ยอดบริจาคขั้นต่ำเพื่อออกใบเสร็จ 100 บาท**</h1>
                                <button type='submit' className='button-sumbit' onClick={handleDonateSubmit}>
                                    บริจาคเลย
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mini-sub-card" id='project_2' style={{ display: item.type === 'project_2' ? 'block' : 'none' }}>
                        <h2 className='text-center'>ร่วมบริจาคสิ่งของให้กับโครงการ</h2>
                        <div className='button-mini-sub'>
                            <p>ระบุสิ่งของที่ต้องการบริจาค :</p>
                            <input type='text' className='text-box-sub' placeholder='ระบุสิ่งของ'></input>
                            <label for="ประเภทสินค้า">ประเภทสินค้า:</label>
                            <select class="select-wrapper" name="prefix">
                                <option selected="" value="Default">(กรุณาเลือก)</option>
                                <option value="นาย">อาหารแห้ง</option>
                                <option value="นาง">ยารักษาโรค</option>
                                <option value="นางสาว">เสื้อผ้า</option>
                                <option value="อื่นๆ">อื่นๆ</option>
                            </select>
                            <p>ระบุจำนวนสิ่งของที่ต้องการบริจาค :</p>
                            <input type='text' className='text-box-sub' placeholder='ระบุจำนวนชิ้น'></input>
                            <button type='submit' className='button-sumbit' >
                                บริจาคเลย
                            </button>
                        </div>
                    </div>
                    <div className="mini-sub-card" id='project_3' style={{ display: item.type === 'project_3' ? 'block' : 'none' }}>
                        {item.type === 'project_3' && (
                            <>
                                <h2 className='text-center'>เข้าร่วมจิตอาสากับเรา</h2>
                                {/* Volunteer registration for project_3 */}
                                <div className='button-mini-sub'>
                                    <p>รายละเอียดวันทำจิตอาสา :</p>
                                    <div className="text" >
                                        <p> - สถานที่ทำจิดอาสา :</p>
                                        <p>{item.location}</p>
                                    </div>
                                    <div className="text" >
                                        <p> - สิ่งที่ต้องเตรียม :</p>
                                        <p>{item.prepare}</p>
                                    </div>
                                    <div className="text" >
                                        <p> - สิ่งที่ต้องทำ :</p>
                                        <p>{item.do}</p>
                                    </div>
                                    <p>เลือกช่วงเวลาที่ต้องการสมัครจิตอาสา :</p>
                                    {item.date.map((date, index) => (
                                        <div key={index} className="radio">
                                            <input
                                                type="radio"
                                                id={`date_${index}`}
                                                name="fav_language"
                                                value={date}
                                            />
                                            <label htmlFor={`date_${index}`}>{date}</label><br />
                                        </div>
                                    ))}
                                </div>
                                <button type='submit' className='button-sumbit' >
                                    สมัครเลย
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Content;