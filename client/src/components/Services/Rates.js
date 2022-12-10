import React from "react";

function Rates() {
  return (
    <div className="serviceCompDivs ratesContainer">
      <h1>Rates</h1>
      <div className="ratesDiv">
        <div className="ratesLeft">
          <div>
            <h2>Initial Consultation</h2>
            <p>Lasts up to 1 hour</p>
            <p>No charge </p>
          </div>
          <div>
            <h2>Life review, Vigil Planning and Legacy Project</h2>
            <p>Sessions last 1-2 hours each</p>
            <p>$75 per session</p>
          </div>
          <div>
            <h2>Additional Services</h2>
            <p>$60 per hour</p>
          </div>
        </div>
        <div className="ratesRight">
          <div>
            <h2>The Vigil</h2>
            <p>I offer multiple options to meet your individual needs.</p>
            <ul className="levels">
              <li>Level A</li>
              <p>Sessions last 2 hours each and lasts for up to 5 days</p>
              <p>$600 total</p>
              <li>Level B</li>
              <p>Sessions last 4 hours each and lasts for up to 5 days</p>
              <p>$1200 total</p>
              <li>Level C</li>
              <p>Sessions last 8 hours each and lasts for up to 5 days</p>
              <p>$2400 total</p>
            </ul>
          </div>
        </div>
      </div>{" "}
      <div>
        <h2 className="feeScale">
          Sliding fee scale and scholarships are available based on need and
          availability
        </h2>
      </div>
    </div>
  );
}

export default Rates;
