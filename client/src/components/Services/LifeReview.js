import React from "react";
import img from "../../assets/images/mountains2.jpg";

function LifeReview() {
  return (
    <div className="reviewContainer serviceCompDivs">
      <div className="reviewDiv">
        <h1>Life Review</h1>
        <p>As you review your life, I will support and guide you as you:</p>
        <ul>
          <li>Explore its meaning</li>
          <li>Recognize wisdom gained that you wish to pass along</li>
          <li>
            Address unresolved issues, as able, to bring a greater sense of
            peace
          </li>
          <li>Discover your legacy project</li>
          <li>Participate in guided imagery and meditation</li>
        </ul>
      </div>
      <div className="reviewImgDiv">
        <img src={img} alt="picture of hiker sitting on mountain at sunset" />
      </div>
    </div>
  );
}

export default LifeReview;
