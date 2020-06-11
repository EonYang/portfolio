//@ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button } from "react-bootstrap";
import { useTrail, animated } from "react-spring";

const MyIntroHero = () => {
  return (
    <Jumbotron className="hero">
      <h1>Hi, I'm Yang</h1>
      <p>
        a software engineer who has experience as a Product and UX Designer.
        While studying at NYU, I discovered my interest in programming and
        started to combine it with design and decided to pursue a professional
        career in full-stack software engineering.
      </p>
      <p>
        <Link to="/resume">
          <Button variant="light">Resume</Button>
        </Link>
        <span></span>
        <a href="https://github.com/EonYang">
          <Button variant="light">Github</Button>
        </a>
      </p>
      {/* <Goo /> */}
    </Jumbotron>
  );
};

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

export function Goo() {
  const [trail, set] = useTrail(3, () => ({
    xy: [0, 0],
    config: (i) => (i === 0 ? fast : slow),
  }));
  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
          />
        </filter>
      </svg>
      <div
        className="hooks-main"
        onMouseMove={(e) => set({ xy: [e.clientX, e.clientY] })}
      >
        {trail.map((props, index) => (
          <animated.div
            key={index}
            style={{ transform: props.xy.interpolate(trans) }}
          />
        ))}
      </div>
    </>
  );
}

// <div className="hero">
//   <h1>
//     <br />
//     <br />
//
//       </h1>
//   <h2>a software engineer who has experience as a Product and UX Designer.

// While studying at NYU, I discovered my interest in programming and started to combine it with design and decided to pursue a professional career in full-stack software engineering..</h2>
//   <h2>
//     <Link to="/resume">Resume</Link>,{" "}
//
//   </h2>
// </div>

export default MyIntroHero;
