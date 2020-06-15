//@ts-nocheck
import React from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const MySocialMedias = () => (
  <div className="about">
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
          <FaLinkedinIn size={32} color="black" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.instagram.com/yang_2473/">
          <FaInstagram size={32} color="black" />
        </a>
      </li>
    </ul>
  </div>
);

export default MySocialMedias;
