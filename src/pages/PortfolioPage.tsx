import React from "react";
import ProjectsList from "../components/ProjectsList";
import data from "../data/content";
import MyIntro from "components/MyIntro";
import MySocialMedias from "../components/MySocialMedias";
// import { Parallax, ParallaxLayer } from "react-spring/addons";
import { WiStars } from "react-icons/wi";
const PortfolioPage = ({ isMobile }) => {
  return (
    <>
      <MyIntro />
      <ProjectsList
        id="featured-list"
        title={
          <h1>
            {"Featured"}
            <WiStars />
          </h1>
        }
        projects={data.projects
          .filter((a) => a.featured === true)
          .sort((a, b) => b.priority - a.priority)}
        isMobile={isMobile}
        filterOn={false}
      />
      <ProjectsList
        id="main-project-list"
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

export default React.memo(PortfolioPage);
