//@ts-nocheck
import React from "react";
import ProjectsList from "../components/ProjectsList";
import data from "../data/content";
import Header from "../components/Header";

const PortfolioPage = ({ isMobile }) => {
  return (
    <>
      <Header />

      <ProjectsList projects={data.projects} isMobile={isMobile} />
      <div style={{ height: "1000px" }}></div>
      <div className=" w-100 ">
        <p className="text-center">Hmm, what are you looking for?</p>
      </div>
    </>
  );
};
export default PortfolioPage;
