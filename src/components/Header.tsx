//@ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BigNav from "./BigNav";
import MenuButton from "./menuButtonSvg";
// import { myp5 } from "../../public/logo";

// interface IHeaderProps {
// }

const Header = () => {
  const [collapse, setCollapse] = useState(true);
  const toggle = () => setCollapse((prev) => !prev);
  const logoRef = useRef(null);
  const [scale, setScale] = useState(1);
  const bodyTopToScale = (bodyTop) => {
    return 1 + (600 + bodyTop) / 100;
  };
  useEffect(() => {
    setScale(bodyTopToScale(document.body.getBoundingClientRect().top));
  }, [document.body.getBoundingClientRect().top]);

  return (
    <>
      <BigNav {...{ collapse, toggle }} />
      <Navbar id="my-navbar">
        <Link to="/" className="navbar-brand my-navbar-brand">
          <div
            id="logoCanvas"
            ref={logoRef}
            style={
              {
                // transform: `scale3d(${scale}, ${scale}, 1)`,
                // filter: `blur(1px)`
              }
            }
          >
            {/* Logo.js will appear here */}
          </div>
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
