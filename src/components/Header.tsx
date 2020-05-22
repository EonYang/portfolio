//@ts-nocheck
import React, { useState, useRef } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BigNav from "./BigNav";
import AnimatedIcon from "react-useanimations";
import MenuButton from "./menuButtonSvg";
// import { myp5 } from "../../public/logo";

const Header = () => {
  const [collapse, setCollapse] = useState(true);
  const toggle = () => setCollapse((prev) => !prev);
  const logoRef = useRef(null);

  // useEffect(() => {
  //   if (myp5.canvas !== undefined) logoRef.current.append(myp5.canvas);
  // }, [collapse]);

  return (
    <>
      <BigNav {...{ collapse, toggle }} />
      <Navbar id="my-navbar">
        <Link
          to="/"
          className="navbar-brand my-navbar-brand"
          style={{ height: "80px" }}
        >
          <div id="logoCanvas" ref={logoRef}>
            {/* Logo.js will appear here */}
          </div>
          <h1>Yang's Projects</h1>
        </Link>
        <div id="nav-toggle-btn">
          <Button variant="link" onClick={() => toggle()}>
            <MenuButton burger={collapse} />
          </Button>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
