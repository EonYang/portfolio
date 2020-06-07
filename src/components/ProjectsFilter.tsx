//@ts-nocheck
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const ProjectsFilter = ({
  scrollTo,
  brand,
  categories,
  setSelected,
  selected,
}) => {
  const onselectHandler = () => {
    document.getElementById(scrollTo).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar
        className="projects-filter"
        expand="md"
        bg="white"
        sticky="top"
        collapseOnSelect={true}
        onSelect={onselectHandler}
      >
        <Navbar.Brand>{brand}</Navbar.Brand>
        <Navbar.Toggle>
          <small>{selected}</small>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <Nav
            className="justify-content-center"
            as="ul"
            onSelect={(eventKey) => setSelected(eventKey)}
          >
            {categories.map((cat, key) => (
              <Nav.Item key={key}>
                <Nav.Link eventKey={cat}>
                  <small className="ml-4">{cat}</small>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default ProjectsFilter;
