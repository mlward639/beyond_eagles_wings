import React from "react";

function InitialConsult() {
  return (
    <div className="consultDiv serviceCompDivs">
      <div className="consultWordsDiv">
        <h1 className="consultTitle">Initial Consultation</h1>
        <p className="consultDesc">
          We will meet to discuss your needs, wishes, and concerns to determine
          how I can best serve you and your loved ones during your end of life
          journey.
        </p>
        <p className="consultListTitle">Topics of discussion may include:</p>
        <ul className="consultList">
          <li>Life Review</li>
          <li>Legacy Project</li>
          <li>Vigil Planning</li>
          <li>Any other ways I can serve you</li>
        </ul>
        {/* <p className="consultDesc">No Charge-approx 1 hour</p> */}
      </div>
      <div className="consultPicDiv">
        <img
          src="https://static.wixstatic.com/media/3d72f5_815fff3c12784f16893885c93384751d~mv2.jpg/v1/crop/x_0,y_0,w_3022,h_3179/fill/w_492,h_518,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Canva%20-%20Green%20Leafed%20Plant%20Near%20Coffee%20F.jpg"
          alt="picture of coffee cup and plant on table"
        />
      </div>
    </div>
  );
}

export default InitialConsult;
