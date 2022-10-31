import React from "react";
import { image as IMG} from "../data/data";

function About() {
  return <div id="about">
            <h2>About Me</h2>
            <p>cats</p>
            <img src={ IMG } alt="I made this"></img>
  </div>;
}

export default About;
