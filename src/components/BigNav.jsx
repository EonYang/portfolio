import React, { useState, useEffect } from "react";
import { config, animated, to, useTransition } from "react-spring";
import { Link } from "react-router-dom";
import { useCallback } from "react";

const NAV_ITEMS = [
  { id: 0, name: "Portfolio", link: "/" },
  { id: 1, name: "About", link: "/about" },
  { id: 2, name: "Blog", link: "http://yangyang.blog/articles" },
];

const BigNav = ({ toggle, collapse }) => {
  const springConfig = config.gentle;

  const myToggle = useCallback(() => {
    setNavBgTiles([]);
    setNavItems([]);
    toggle();
  }, [toggle]);

  const [navBgTiles, setNavBgTiles] = useState([]);
  const navBgTransition = useTransition(navBgTiles, {
    key: (item) => item,
    from: { width: "0vw" },
    enter: { width: "100vw" },
    leave: (item) => async (next) => {
      await next({ delay: item * 40 + 100 });
      next({ width: "0vw" });
    },
    trail: 50,
    config: springConfig,
  });

  const [navItems, setNavItems] = useState([]);
  const navItemsTransition = useTransition(navItems, {
    key: (item) => item.id,
    from: { height: "0vw", y: 100, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ delay: item.id * 100 + 200 });
      next({ height: "20vw", y: 0, opacity: 1 });
    },
    leave: (item) => async (next) => {
      next({ height: "0vw", y: 100, opacity: 0, delay: 200 - item.id * 100 });
    },
    trail: 50,
    config: springConfig,
  });

  useEffect(() => {
    if (collapse) {
      setNavBgTiles([]);
      setNavItems([]);
    } else {
      setNavBgTiles([...Array(8).keys()]);
      setNavItems(NAV_ITEMS);
    }
  }, [collapse, toggle]);

  return (
    <>
      <div
        className="position-fixed overflow-hidden nav-container"
        style={{
          pointerEvents: collapse ? "none" : "auto",
        }}
      >
        {navBgTransition((style, item) => (
          <animated.div
            key={item}
            className="position-absolute nav-bg-tile"
            style={{
              ...style,
              top: `${item * 12.5}vh`,
            }}
          ></animated.div>
        ))}
        {navItemsTransition(({ y, ...style }, item) => (
          <animated.div
            key={item.name}
            className="position-absolute my-nav-item"
            style={{
              ...style,
              top: `${item.id * 20 + 20}vh`,
              transform: to(y, (y) => `translate3d(0,${y}px,0)`),
            }}
          >
            {item.name === "Blog" ? (
              <a href={item.link}>
                <h1 onClick={myToggle}>{item.name}</h1>
              </a>
            ) : (
              <Link to={item.link}>
                <h1 onClick={myToggle}>{item.name}</h1>
              </Link>
            )}
          </animated.div>
        ))}
      </div>
    </>
  );
};
export default BigNav;
