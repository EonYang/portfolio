//@ts-nocheck
import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const ProjectsFilter = ({ brand, categories, setSelected, selected }) => {
  return (
    <>
      <Navbar
        className="projects-filter"
        expand="md"
        bg="white"
        sticky="top"
        collapseOnSelect={true}
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
