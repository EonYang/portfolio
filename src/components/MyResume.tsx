//@ts-nocheck
import React, { useState, useCallback } from "react";
import { Document, Page } from "react-pdf/dist/umd/entry.webpack";
import SWEResume from "data/Yang_Yang_SWE_Resume.pdf";
import UXEResume from "data/Yang_Yang_Resume_UX-Engineer.pdf";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { useTransition, animated as a } from "react-spring";
// const Resume = UXResume;

const Resume = ({ resume, style }) => (
  <a.div style={{ ...style }} className="simple-trans-main">
    <div className="embeded-pdf">
      <Document file={resume} renderMode={"svg"}>
        <Page pageNumber={1} height={1000} />
      </Document>
    </div>
  </a.div>
);

const pages = [
  ({ style }) => <Resume resume={SWEResume} style={style} />,
  ({ style }) => <Resume resume={UXEResume} style={style} />,
];

const MyResume = () => {
  const [index, set] = useState(0);
  const selectSWE = useCallback(() => set(0), []);
  const selectUXE = useCallback(() => set(1), []);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0, transform: " rotate3d(0, 1, 0, -90deg)" },
    enter: { opacity: 1, transform: " rotate3d(0, 1, 0, 0deg)" },
    leave: { opacity: 0, transform: " rotate3d(0, 1, 0, 90deg)" },
  });

  return (
    <>
      <div className="resume-nav text-center">
        <h1>My Resume</h1>
        <Navbar bg="white" expand="sm">
          <Nav className="mx-auto">
            <Nav.Link href="#Software Engineer" onClick={selectSWE}>
              Software Engineer
            </Nav.Link>
            <Nav.Link href="#UX Engineer" onClick={selectUXE}>
              UX Engineer
            </Nav.Link>
            <NavDropdown title="Download PDF" id="basic-nav-dropdown">
              <NavDropdown.Item
                href={SWEResume}
                download="Yang_Yang_SWE_Resume"
              >
                Software Engineer PDF
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href={UXEResume}
                download="Yang_Yang_UXEngineer_Resume"
              >
                UX Engineer PDF
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>

      {transitions((style, index) => {
        const Page = pages[index];
        return <Page key={index} style={style} />;
      })}
    </>
  );
};

export default MyResume;
