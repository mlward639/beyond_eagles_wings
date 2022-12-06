import React from "react";
import FolderChecklist from "../assets/FolderChecklist.pdf";

function Resources() {
  return (
    <div className="resourcesContainer">
      <div className="resourcesDiv">
        <h1>Resources</h1>
        <ul>
          <li>Georgia Advance Directive for Health Care</li>
          <li>
            5 Wishes Booklet, available from their
            <a href="https://www.fivewishes.org/" target="_blank">
              website
            </a>
            .
          </li>
          <li>
            Easy to use checklist to create your own "When I Die" folder. Source
            for checklist is "A Beginner’s Guide To The End: Practical Advice
            For Living Life and Facing Death" by BJ Miller, MD and Shoshana
            Berger. Click
            <a href={FolderChecklist} target="_blank">
              here
            </a>
            to open in another tab.
          </li>
          <li>Books:</li>
          <ul>
            <li>
              A Beginner’s Guide To The End: Practical Advice For Living Life
              and Facing Death by BJ Miller, MD and Shoshana Berger
            </li>
            <li>The Art of Dying Well by Katy Butler</li>
            <li>Caring for the Dying by Henry Fersko-Weiss</li>
            <li>Gone From My Site - The Dying Experience by Barbara Karnes</li>
          </ul>
        </ul>
      </div>
      <div className="pwrptDiv">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vQEkIjKzsS9CJHyOZdq5tadKs580VcCFzHBhXqeNA2_yQmkG08lPbfwJHw8U_g1OK0S86fJF4ZMiJhO/embed?start=false&loop=false"
          frameborder="0"
          width="960"
          height="569"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          className="pwrpt"
        ></iframe>
        add in video once get audio
      </div>
    </div>
  );
}

export default Resources;
