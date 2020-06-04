//@ts-nocheck
import React, { useState, useRef, useEffect, useCallback } from "react";
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
  const [touchY, setTouchY] = useState(0);
  // useEffect(() => {
  // setScale(bodyTopToScale(document.body.getBoundingClientRect().top));
  // }, [document.body.getBoundingClientRect().top]);

  const scrollHandler = (e: React.WheelEvent<HTMLDivElement>) => {
    setShowHeader(e.deltaY <= 0);
  };
  const touchMoveHandler = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      console.log(e.pageY, touchY, e.pageY - touchY);
      setShowHeader(e.pageY - touchY >= 0);
    },
    [touchY, setShowHeader]
  );
  const touchStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchY(e.pageY);
  };

  useEffect(() => {
    document.body.addEventListener("wheel", scrollHandler);
    document.body.addEventListener("touchmove", touchMoveHandler);
    document.body.addEventListener("touchstart", touchStartHandler);
    return () => {
      document.body.removeEventListener("wheel", scrollHandler);
      document.body.removeEventListener("touchmove", touchMoveHandler);
      document.body.removeEventListener("touchstart", touchStartHandler);
    };
  }, [touchY, touchMoveHandler]);

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
