//@ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import BigNav from "./BigNav";
import MenuButton from "./menuButtonSvg";

const Header = () => {
  const [collapse, setCollapse] = useState(true);
  const toggle = () => setCollapse((prev) => !prev);
  const logoRef = useRef(null);
  // const [scale, setScale] = useState(1);
  // const bodyTopToScale = (bodyTop) => {
  //   return 1 + (600 + bodyTop) / 100;
  // };
  const [showHeader, setShowHeader] = useState(true);
  // useEffect(() => {
  // setScale(bodyTopToScale(document.body.getBoundingClientRect().top));
  // }, [document.body.getBoundingClientRect().top]);

  const scrollHandler = (e: React.WheelEvent<HTMLDivElement>) => {
    setShowHeader(e.deltaY <= 0);
  };

  useEffect(() => {
    document.body.addEventListener("wheel", scrollHandler);
    return () => {
      document.body.removeEventListener("wheel", scrollHandler);
    };
  }, []);

  return (
    <>
      <BigNav {...{ collapse, toggle }} />
      <Navbar id="my-navbar" style={{ top: showHeader ? 0 : -120 }}>
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
