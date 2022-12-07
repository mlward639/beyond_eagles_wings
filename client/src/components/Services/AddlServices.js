import React from "react";
import img from "../../assets/images/hands.jpg";

function AddlServices() {
  return (
    <div className="serviceCompDivs">
      <div className="addlServicesDiv">
        <div className="addlImg">
          <img src={img} />
        </div>
        <div className="addlInfoDiv">
          <h1>Additional Services</h1>
          <ul>
            <li>Respite care</li>
            <li>Advanced directive planning</li>
            <li>Funeral planning</li>
            <li>
              Continued work on life review, vigil planning, legacy project
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddlServices;
