import React from "react";
import img from "../../assets/images/hands2.png";

function Vigil() {
  return (
    <div className="serviceCompDivs">
      <div className="planContainer">
        <div className="planInfo vigilInfo">
          <h1>The Vigil</h1>
          <p>
            Rest peacefully in your final days, in the beautiful atmosphere you
            envisioned.
          </p>
          <p>Services I can provide during this time:</p>
          <ul className="vigilList VigilPlanList">
            <li>
              Assistance and guidance given to carry out your wishes throughout
              and following the dying process
            </li>
            <li>Emotional support and guidance provided for loved ones</li>
            <li>Respite care as needed</li>
            <li>Education provided to explain stages of dying</li>
            <li>
              3-6 weeks following your death, I will meet with loved ones for
              reprocessing and early grief support as well as unlimited text,
              phone and email support
            </li>
          </ul>
        </div>
        <div className="vigilImg">
          <img src={img} alt="pictures of 2 hands shaking" />
        </div>
      </div>
    </div>
  );
}

export default Vigil;
