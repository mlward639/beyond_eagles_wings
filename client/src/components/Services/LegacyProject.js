import React from "react";
import img from "../../assets/images/beach.jpg";

function LegacyProject() {
  return (
    <div className="serviceCompDivs legacyContainer">
      <div className="legacyDiv">
        <div className="legacyImgDiv">
          <img src={img} alt="Woman walking on beach" />
        </div>
        <div className="legacyInfoDiv">
          <h1>Legacy Project</h1>
          <p>
            Through exploration of meaning in your life, create the tangible
            gift you wish to leave behind to take root and grow.
          </p>
          <p>
            Provides an opportunity to further explore meaning in life and
            wisdom to leave behind.
          </p>
          <p>Guidance provided in determining and fabricating your project.</p>
          <p>
            Examples include: letters, collection of recipes, life scroll,
            video, and many others limited only by the imagination
          </p>
        </div>
      </div>
      <div className="legacyQuoteDiv">
        <p>
          "The satisfaction from seeing a completed artifact the person knows
          will speak of them and for them in the years to come is tremendously
          gratifying. It is the ripple of their life continuing to shape and
          form the future. It is a gift to those they love."
        </p>
        <p>
          ~Henry Fersko-Weiss "Caring for the Dying The Doula Approach to a
          Meaningful Death"
        </p>
      </div>
    </div>
  );
}

export default LegacyProject;
