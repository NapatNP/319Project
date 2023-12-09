import React, { useState } from 'react';
import './pay.css'
import { useParams, useNavigate } from 'react-router-dom';

const Pay = () => {
    const { money } = useParams(); // รับค่า money จาก URL parameter
    const amount = parseInt(money);
    const navigate = useNavigate();


    // ตรวจสอบการแสดงค่าใน console.log เพื่อตรวจสอบว่ารับค่า money มาได้ถูกต้องหรือไม่
    console.log('Money:', money);
    console.log('Amount:', amount);


    const [selectedButton, setSelectedButton] = useState({
        creditCard: false,
        qrCode: false,
        promptPay: false,
        paypal: false,
    });
    const handleButtonClick = (button) => {
        setSelectedButton({ ...selectedButton, [button]: !selectedButton[button] });
    };

    const handlePayment = () => {
        const paymentSuccess = true;

        if (paymentSuccess) {
            alert("ชำระเงินเรียบร้อยแล้ว!");
            navigate("/");
        } else {
            console.log("การชำระเงินไม่สำเร็จ");
        }
    };

    const Icircle = {
        fontSize: '10px',
    };
    const Isize = {
        fontSize: '30px',
    };
    const Icollect = {
        color: 'rgb(43, 231, 18)',
    };

    return (
        <section id="pay" className="container">
            <div className="paying">
                <div className="pay-card" style={{ maxWidth: '1000px' }}>
                    <div className="p-left">
                        <div>
                            <h2>การชำระเงิน</h2>
                            <h1>
                                <strong>ช่องทางการชำระเงิน</strong>
                            </h1>
                            <div className="pay-btn">
                                <button
                                    className={`btn ${selectedButton.creditCard ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('creditCard')}
                                >
                                    <i class='bx bx-credit-card' style={Isize}></i>
                                    บัตรเคดิต/เดบิต
                                    {selectedButton.creditCard && (
                                        <i class='bx bxs-check-circle' style={Icollect}></i>
                                    )}
                                </button>
                                <button
                                    className={`btn ${selectedButton.qrCode ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('qrCode')}
                                >
                                    <i className='bx bx-qr' style={Isize}></i>
                                    Qrcode
                                    {selectedButton.qrCode && (
                                        <i class='bx bxs-check-circle' style={Icollect}></i>
                                    )}
                                </button>
                                <button
                                    className={`btn ${selectedButton.promptPay ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('promptPay')}
                                >
                                    <i className='bx bxl-product-hunt' style={Isize}></i>
                                    PromptPay
                                    {selectedButton.promptPay && (
                                        <i class='bx bxs-check-circle' style={Icollect}></i>
                                    )}
                                </button>
                                <button
                                    className={`btn ${selectedButton.paypal ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick('paypal')}
                                >
                                    <i class='bx bxl-paypal' style={Isize}></i>
                                    Paypal
                                    {selectedButton.paypal && (
                                        <i class='bx bxs-check-circle' style={Icollect}></i>
                                    )}
                                </button>
                            </div>
                        </div>
                        <p></p>
                    </div>
                    <div className='p-right'>
                        <div className='text-header'>
                            <h3>รายการบริจาค</h3>
                            <h4>สรุปรายการ</h4>
                            <div className='type-project'>
                                <h4><i class='bx bxs-circle' style={Icircle}></i> ยอดบริจาค </h4>
                                <h5>1500</h5>
                                <h5>บาท</h5>
                            </div>
                        </div>
                        <button className='btn' onClick={handlePayment}>
                            ชำระเงิน
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pay;