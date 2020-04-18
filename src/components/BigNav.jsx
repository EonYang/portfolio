import React, { useState, useEffect } from "react";
import { config, animated, to, useTransition } from "react-spring";

const NAV_ITEMS = [
  { id: 0, name: "Portfolio", link: "/" },
  { id: 1, name: "About", link: "/about" },
  { id: 2, name: "Blog", link: "http://yangyang.blog/latest" },
];

const BigNav = ({ right, top, collapse }) => {
  const springConfig = config.gentle;

  const [navBgTiles, setNavBgTiles] = useState([]);
  const navBgTransition = useTransition(navBgTiles, {
    key: (item) => item,
    from: { width: "0vw" },
    enter: { width: "100vw" },
    leave: (item) => async (next) => {
      await next({ delay: item * 40 + 200 });
      next({ width: "0vw" });
    },
    trail: 50,
  });

  const [navItems, setNavItems] = useState([]);
  const navItemsTransition = useTransition(navItems, {
    key: (item) => item.id,
    from: { height: "0vw", y: 100, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ delay: item.id * 100 + 300 });
      next({ height: "20vw", y: 0, opacity: 1 });
    },
    leave: (item) => async (next) => {
      await next({ delay: 300 - item.id * 100 });
      next({ height: "0vw", y: 100, opacity: 0 });
    },
    trail: 50,
  });

  useEffect(() => {
    if (collapse) {
      setNavBgTiles([]);
      setNavItems([]);
    } else {
      setNavBgTiles([...Array(8).keys()]);
      setNavItems(NAV_ITEMS);
    }
  }, [collapse]);

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
            <a href={item.link}>
              <h1>{item.name}</h1>
            </a>
          </animated.div>
        ))}
      </div>
    </>
  );
};
export default BigNav;
