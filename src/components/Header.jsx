import React, { useState } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BigNav from "./BigNav";
import AnimatedIcon from "react-useanimations";

const Header = () => {
  const [collapse, setCollapse] = useState(true);
  const toggle = () => setCollapse((prev) => !prev);

  return (
    <>
      <BigNav collapse={collapse} />
      <Navbar id="my-navbar">
        <Link
          to="/"
          className="navbar-brand my-navbar-brand"
          style={{ height: "80px" }}
        >
          <div id="logoCanvas">{/* Logo.js will appear here */}</div>
          <h1>Yang's Projects</h1>
        </Link>
        <div id="nav-toggle-btn">
          <Button variant="link" onClick={() => toggle()}>
            <AnimatedIcon
              animationKey="menu4"
              size={56}
              style={{ color: "black" }}
            />
          </Button>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
