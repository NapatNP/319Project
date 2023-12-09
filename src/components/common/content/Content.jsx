import React from "react";
import './content.css'

const Content = () => {
    const projectImageStyle = {
        width: 'auto', // Set the desired width
        height: '335px', // Maintain aspect ratio
        borderRadius: '15px', // Set the border radius to make it rounded
        border: '2px solid gray',
    };
    const iStyle = {
        fontSize: '35px',
        color: 'orange',
    };
    return (
        <>
            <section id="mini-project" className='container'>
                <div className="left">
                    <div className='mini-sub-header'>
                        <h1>โครงการบริจาคก่อสร้างอาคารผู้ป่วย</h1>
                        <div className='date'>
                            <i className='bx bxs-calendar' style={iStyle}></i>
                            <p>18/02/2022 - 06/12/2023</p>
                        </div>
                    </div>
                    <div >
                        <img src="./images/project/project1.png" alt="" style={projectImageStyle} />
                    </div>
                    <div className='type-project'>
                        <h3>ประเภทโครงการ:</h3>

                    </div>
                    <div className="mini-sub-card">
                        <h2>รายละเอียดโครงการ</h2>
                        <p> ทางเราจำเป็นต้องระดมเงินเพื่อก่อสร้างอาคารศูนย์บูรณาการบริการด้านการแพทย์และสาธารณสุข
                            (Extended OPD) เพื่อเพิ่มพื้นที่และขยายขอบเขตการให้บริการผู้ป่วยนอก เชื่อมต่อกับอาคารผู้ป่วยนอกเดิม (อาคาร ภปร) ให้ผู้ป่วยมีโอกาสเข้าถึง
                            บริการทางการแพทย์ที่ครบวงจรและทันสมัย และเป็นสถานที่ผลิตบุคลากรผู้เชี่ยวชาญด้านการดูแลรักษาผู้ป่วยนอกโรคยากและซับซ้อน ที่มีศักยภาพสูงสามารถ
                            กระจายไปสู่สถานพยาบาลในระดับต่างๆ และสามารถให้บริการผู้ป่วยที่อยู่ในแต่ละพื้นที่เพิ่มขึ้น </p>
                    </div>
                </div>
                <div className="right">
                    <div className="mini-sub-card">
                        <h2 className='text-center'>รายละเอียดโครงการ</h2>
                        <div className='button-mini-sub'>

                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Content 