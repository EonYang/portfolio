//@ts-nocheck
import React from "react";
import { Document, Page } from "react-pdf/dist/umd/entry.webpack";
import SWEResume from "data/Resume_Yang_Yang_SWE.pdf";
import UXResume from "data/Yang_Yang_UX-Engineer_Resume.pdf";

const Resume = UXResume;

const MyResume = () => {
  return (
    <>
      <div className="hero text-center">
        <h1>My Resume</h1>
        <h2>
          <a href={Resume} download="Resume_Yang_Yang_SWE">
            Download PDF
          </a>
        </h2>
      </div>
      <div className="embeded-pdf">
        <Document file={Resume} renderMode={"svg"}>
          <Page pageNumber={1} height="1000" />
        </Document>
      </div>
    </>
  );
};

export default MyResume;
