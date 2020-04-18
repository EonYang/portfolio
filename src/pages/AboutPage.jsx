import React from "react";
import Header from "../components/Header";
import { FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";

const AboutPage = () => (
  <>
    <Header />
    <div id="about">
      <h1> About Me </h1>
      <h3>Created by</h3>
      <h1>Yang Yang</h1>
      <ul className="nav navbar-dark justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/EonYang">
            <FaGithub size={32} color="black" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/yang-yang-992a9a61/"
          >
            <FaLinkedin size={32} color="black" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://yangyang.blog/">
            <FaBriefcase size={32} color="black" />
          </a>
        </li>
      </ul>
      <br />
      <br />
    </div>
  </>
);

export default AboutPage;
