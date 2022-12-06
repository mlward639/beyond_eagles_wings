import React from "react";

function Info() {
  return (
    <div className="row infoDiv">
      <div className="compInfo col-7 col">
        <h1 className="compInfoTitle">Transforming The End of Life Journey</h1>
        <p className="compInfoContent">
          As an end of life doula, I am honored to assist individuals in
          creating the path they envision for their end of life experience. As
          you review your life, I can guide you in exploring its meaning,
          creating a legacy project to leave behind, and planning the vigil you
          envision for your final days. Your sense of peace will be enhanced
          knowing that I am able to be present during the vigil and will offer
          support and guidance to your loved ones throughout this time and
          during the weeks following.
        </p>
        <p className="compInfoContent">
          Our society has altered what was once a natural process into a medical
          one of painful procedures, loud monitoring devices and sterile
          hospital rooms devoid of personal surroundings. As your end of life
          doula, I will return the control of your final journey back to you and
          your loved ones to make it the beautiful, memorable transition it was
          meant to be.
        </p>
        <div className="goalDiv">
          <div className="missionDiv">
            <h3>My Mission</h3>
            <p>
              Support and guide the individual and their loved ones during the
              end of life process to transform their experience into one of deep
              meaning and peaceful transition. To provide assistance in
              reprocessing and early grief support for loved ones.
            </p>
          </div>
          <div className="visionDiv">
            <h3>My Vision</h3>
            <p>
              Transform the natural process of dying for all individuals into a
              celebration of life and a gift of legacy to take root and grow in
              those left behind.
            </p>
          </div>
        </div>
      </div>
      <div className="compInfoQuoteDiv  col-3 col">
        <p className="compInfoQuote">
          "Return control of your final journey back to you and your loved ones
          to make it the beautiful, memorable transition it was meant to be."
        </p>
      </div>
    </div>
  );
}

export default Info;
