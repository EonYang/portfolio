//@ts-nocheck
import React from "react";
import { Link } from "react-router-dom";

const MyIntroHero = () => {
  return (
    <div className="hero">
      <h1>
        <br />
        <br />
        Hi, I'm Yang,
      </h1>
      <h2>a Software Engineer and UX Engineer.</h2>
      <h2>
        <Link to="/resume">Resume</Link>,{" "}
        <a href="https://github.com/EonYang">Github</a>
      </h2>
    </div>
  );
};

export default MyIntroHero;
