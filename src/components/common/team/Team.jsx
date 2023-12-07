import React from "react";
import './team.css'

const Team = () => {
  return (
    <section id="team" className='container'>
      <div className="text-header text-center">
        <p>ทีมงานของเรา</p>
        <h1>My Teams</h1>
      </div>
      <div className="team-container">
          <div className="card">
            <div className="team-img">
              <img src="./images/team1.jpg" alt="team1"/>
            </div>
            <div className="content">
              <h3>ศุภกิจติ์ แดงชาติ</h3>
              <p>1630704862</p>
            </div>
          </div>
          <div className="card">
            <div className="team-img">
              <img src="./images/team2.jpg" alt="team2"/>
            </div>
            <div className="content">
              <h3>ปฏิญญา จรูญชาติ</h3>
              <p>1630704920</p>
            </div>
          </div>
          <div className="card">
            <div className="team-img">
              <img src="./images/team3.jpg" alt="team3"/>
            </div>
            <div className="content">
              <h3>ณภัทร ปิยะกุลวรศักดิ์</h3>
              <p>1630705364</p>
            </div>
          </div>
          <div className="card">
            <div className="team-img">
              <img src="./images/team4.jpg" alt="team4"/>
            </div>
            <div className="content">
              <h3>ภูวเดช มิตรประชาชน</h3>
              <p>1630705406</p>
            </div>
          </div>
      </div>
    </section>
  );
}
export default Team