import React from "react";
import ProjectsList from "../components/ProjectsList";
import data from "../data/content";

const PortfolioPage = ({ isMobile }) => {
  return (
    <>
      <div className="hero">
        <h1>
          Yang's
          <br />
          Projects
        </h1>
      </div>
      <ProjectsList
        projects={data.projects.sort((a, b) => b.priority - a.priority)}
        isMobile={isMobile}
      />
      <div style={{ height: "1000px" }}></div>
      <div className=" w-100 ">
        <p className="text-center">Hmm, what are you looking for?</p>
      </div>
    </>
  );
};
export default React.memo(PortfolioPage);
