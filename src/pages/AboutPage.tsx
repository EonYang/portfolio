//@ts-nocheck
import React, { useRef, useState, useEffect } from "react";
import MySocialMedias from "../components/MySocialMedias";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import svgPathInterpolators from "../components/svgMorph";
// import { animated, useSpring, config } from "react-spring";
import ParaGraph from "components/Paragraph.tsx";
import data from "data/content";
const VIDEO_FRAMERATE = 30;
const VIDEO_LENGTH = 20;

const Page1 = () => (
  <ParallaxLayer offset={0.1} speed={0.7}>
    <div className="hero">
      <h1>
        About
        <br />
        Yang
      </h1>
    </div>
    <ParaGraph text={data.about[0]} />
  </ParallaxLayer>
);

const Page2BG = () => (
  <ParallaxLayer
    offset={0.7}
    factor={0.7}
    speed={1.1}
    style={{
      backgroundColor: "#805E73",
      opacity: 0.1,
    }}
  />
);

const ThesisVideo = React.forwardRef(({ videoTop }, ref) => {
  const currentTime = Math.min(
    VIDEO_LENGTH,
    Math.max(0, (600 - videoTop) / VIDEO_FRAMERATE)
  );
  useEffect(() => {
    ref.current.currentTime = currentTime;
  });
  return (
    <ParallaxLayer offset={1} speed={1}>
      <video
        ref={ref}
        muted
        width="30%"
        src={require(`../data/images/videos/about-my-thesis.mp4`)}
        type="video/mp4"
        playsInline={true}
      />
    </ParallaxLayer>
  );
});

const Page4 = () => (
  <ParallaxLayer offset={3} speed={1}>
    <h3>Created by</h3>
    <MySocialMedias />
  </ParallaxLayer>
);

const rgbToHex = (r, g, b) => {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
const interpolateColors = (color1, color2, t) => {
  return rgbToHex(...color1.map((c, i) => Math.floor(c + (color2[i] - c) * t)));
};
const [nodeColor, reactColor] = [
  [83, 158, 67],
  [97, 218, 251],
];
const Page5SvgMorph = React.forwardRef(({ svgMorphTop }, ref) => {
  const [t, set] = useState(0);
  useEffect(() => {
    set(
      Math.sin(Math.min(Math.PI / 2, Math.max(0, (400 - svgMorphTop) / 200)))
    );
  }, [set, svgMorphTop]);

  return (
    <>
      <ParallaxLayer
        offset={2.3}
        factor={0.7}
        speed={1.1}
        style={{
          backgroundColor: "#805E73",
          opacity: 0.1,
        }}
      />
      <ParallaxLayer offset={2.4} speed={0.2}>
        <div
          ref={ref}
          style={{
            width: "100%",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg width="180" viewBox={`${t * -5} -2 40 40`}>
            <g fill={interpolateColors(nodeColor, reactColor, t)}>
              {svgPathInterpolators.map((item, i) => (
                <path key={i} d={item[Math.floor(t) % 2](t % 1)} />
              ))}
            </g>
          </svg>
        </div>
      </ParallaxLayer>
    </>
  );
});

const AboutPage = () => {
  const videoRef = useRef(null);
  const [videoTop, setVideoTop] = useState(600);

  const svgRef = useRef(null);
  const [svgMorphTop, setSvgMorphTop] = useState(600);

  const onWheel = () => {
    if (videoRef.current)
      setVideoTop(videoRef.current.getBoundingClientRect().top);
    if (svgRef.current)
      setSvgMorphTop(svgRef.current.getBoundingClientRect().top);
  };

  return (
    <>
      <div className="about" onWheel={onWheel}>
        <Parallax pages={4}>
          <Page1 />

          <Page2BG />
          <ThesisVideo ref={videoRef} {...{ videoTop }} />

          <Page4 />
          <Page5SvgMorph ref={svgRef} {...{ svgMorphTop }} />
        </Parallax>
      </div>
    </>
  );
};

export default AboutPage;
