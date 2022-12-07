import React from "react";
import img from "../../assets/images/bed2.jpg";

function VigilPlanning() {
  return (
    <div className="serviceCompDivs">
      <div className="planContainer">
        <div className="planInfo">
          <h1>Vigil Planning</h1>
          <p>
            Create the environment and atmosphere in which you wish to spend
            your final days.
          </p>
          <p>Vigil Plans can include:</p>
          <ul className="VigilPlanList">
            <li>How to address all senses</li>

            <li>Interactions with those around you</li>

            <li>Symptom management</li>

            <li>
              Meaningful rituals you may envision before or following death
            </li>
          </ul>
        </div>
        <div className="planImg">
          <img src={img} alt="serene picture of candles, bed" />
        </div>
      </div>
    </div>
  );
}

export default VigilPlanning;
