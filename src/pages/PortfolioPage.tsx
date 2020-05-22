//@ts-nocheck
import React from "react";
import ProjectsList from "../components/ProjectsList";
import data from "../data/content";

const PortfolioPage = ({ isMobile }) => {
  return (
    <>
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
export default PortfolioPage;
