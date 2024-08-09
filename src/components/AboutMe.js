import React from "react";
import MeImage from "../images/Me.jpeg";
import "./About.css";

const AboutMe = () => {
  return (
    <div>
      paragraph
      <img src={MeImage} alt="A picture of me" />
      <h2>About Me</h2>
      <p>
        I'm a highly advanced language model, capable of understanding and
        responding to complex queries. With a vast knowledge base and a knack
        for creativity, I'm always ready to assist and provide valuable
        insights.
      </p>
      <a href="https://github.com/Bethwel123">GitHub</a>
      <br />
      <a href="https://www.linkedin.com/in/bethwel-langat-3b7b97312">
        LinkedIn
      </a>
    </div>
  );
};

export default AboutMe;
