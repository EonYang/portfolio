import React from "react";
import ProjectsList from "../components/ProjectsList";
import data from "../data/content";
import MyIntro from "components/MyIntro";
import MySocialMedias from "../components/MySocialMedias";
// import { Parallax, ParallaxLayer } from "react-spring/addons";

const PortfolioPage = ({ isMobile }) => {
  return (
    <>
      <MyIntro />
      <h1 style={{ marginLeft: "4vw" }}>
        🌈 Featured
        <br />
        <br />
      </h1>
      <ProjectsList
        projects={data.projects
          .filter((a) => a.featured === true)
          .sort((a, b) => b.priority - a.priority)}
        isMobile={isMobile}
        filterOn={false}
      />
      <h1 style={{ marginLeft: "4vw" }}>
        ✨ Projects
        <br />
        <br />
      </h1>
      <ProjectsList
        projects={data.projects
          .filter((a) => a.featured === false)
          .sort((a, b) => b.priority - a.priority)}
        isMobile={isMobile}
        filterOn={true}
      />
      <div style={{ height: "200px" }}></div>
      <MySocialMedias />
    </>
  );
};

// const Para = ({ isMobile }) => {
//   return (
//     <>
//       <div className="">
//         <Parallax pages={5}>
//           <ParallaxLayer offset={0} speed={0.2}></ParallaxLayer>
//           <ParallaxLayer offset={0.7} speed={1}>
//             <PortfolioPage {...{ isMobile }} />
//           </ParallaxLayer>

//           <ParallaxLayer offset={3} speed={1}></ParallaxLayer>
//         </Parallax>
//       </div>
//     </>
//   );
// };

export default React.memo(PortfolioPage);
