//@ts-nocheck
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Resume from "data/Resume_Yang_Yang_SWE.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `http://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
console.log(pdfjs.GlobalWorkerOptions.workerSrc);

const MyResume = () => {
  return (
    <div>
      <h1>
        <br />
        <br />
        My Resume
      </h1>
      <button>Download</button>
      <Document file={Resume}></Document>
    </div>
  );
};

export default MyResume;
