import React from "react";
import './team.css'

const Team = () => {
  return (
    <section className="team--section">
      <div className="team--container">
        <p className="team--title">ทีมงานของเรา</p>
        <h2 className="team--section--heading">My Teams</h2>
      </div>

      <div className="team--section--container">
          <div className="team--section--card">
            <div className="team--section--img">
              <img src="./images/image1.png" alt="team1"/>
            </div>
            <div className="team--section--card--content">
              <h3 className="team--section--title">ศุภกิจติ์ แดงชาติ</h3>
              <p className="team--section--description">1630704862</p>
            </div>
          </div>

          <div className="team--section--card">
            <div className="team--section--img">
              <img src="./images/image1.png" alt="team2"/>
            </div>
            <div className="team--section--card--content">
              <h3 className="team--section--title">ปฏิญญา จรูญชาต</h3>
              <p className="team--section--description">1630704920</p>
            </div>
          </div>

          <div className="team--section--card">
            <div className="team--section--img">
              <img src="./images/np.jpg" alt="team3"/>
            </div>
            <div className="team--section--card--content">
              <h3 className="team--section--title">ณภัทร ปิยะกุลวรศักดิ์</h3>
              <p className="team--section--description">1630705364</p>
            </div>
          </div>

          <div className="team--section--card">
            <div className="team--section--img">
              <img src="./images/phuwadet.png" alt="team4"/>
            </div>
            <div className="team--section--card--content">
              <h3 className="team--section--title">ภูวเดช มิตรประชาชน</h3>
              <p className="team--section--description">1630705406</p>
            </div>
          </div>

      </div>
    </section>
  );
}
export default Team