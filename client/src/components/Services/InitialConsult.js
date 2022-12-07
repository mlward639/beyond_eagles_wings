import React from "react";
import img from "../../assets/images/coffee2.jpg";

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
        <img src={img} alt="picture of coffee cup and plant on table" />
      </div>
    </div>
  );
}

export default InitialConsult;
