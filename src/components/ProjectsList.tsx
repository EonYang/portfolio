import React, { useState, useEffect, FC } from "react";
import ProjectCard from "./ProjectCard";
import ProjectsFilter from "./ProjectsFilter";
import { useMedia } from "../utils/CustomHooks";
import Tools from "../utils/Tools";
import { animated, useTransition } from "react-spring";
import { IProject } from "../types";

interface IProjectsListProps {
  projects: IProject[];
  isMobile: boolean;
  filterOn: boolean;
}

const ProjectsList: FC<IProjectsListProps> = React.memo(
  ({ projects, isMobile, filterOn }) => {
    const { columns, windowWidth } = useMedia(
      ["(min-width: 1900px)", "(min-width: 1000px)", "(min-width: 600px)"],
      [3, 2, 1],
      1
    );

    let gap = 0.02;

    // console.log(columns, windowWidth);
    const categories = ["All"].concat(
      Tools.extractCategories(projects).map((item) => item.category)
    );

    // let videoObserver = Tools.createIntersectionObserver(isMobile);
    const [selected, setSelected] = useState("All");
    const [filteredProjects, setProjects] = useState(projects);

    let heights = new Array(columns).fill(0);
    const cardWidth =
      (windowWidth - windowWidth * gap * (columns + 1)) / columns;
    const cardHeight = cardWidth * 0.9;

    const gridItems = filteredProjects.map((project, i) => {
      const col = i % columns;
      const xy = [
        cardWidth * col + col * gap * windowWidth,
        (heights[col] += cardHeight) - cardHeight,
      ];
      return { ...project, xy, width: cardWidth, height: cardHeight };
    });

    useEffect(() => {
      if (selected === "All") setProjects(projects);
      else
        setProjects(
          projects.filter((project) => project.category.includes(selected))
        );
    }, [selected, projects]);

    const filterProps = { projects, categories, selected, setSelected };

    const springConfig = { mass: 1, tension: 200, friction: 20 };

    const transition = useTransition(gridItems, {
      key: (project) => project.priority,
      from: ({ xy, width, height }) => ({
        opacity: 0,
        life: 1,
        width,
        height,
        xy,
      }),
      enter: ({ xy, width, height }) => async (next, stop) => {
        await next({
          opacity: 1,
          life: 1,
          width,
          height,
          xy,
          config: springConfig,
        });
      },
      update: ({ xy, width, height }) => ({ width, height, xy }),
      leave: (project) => async (next) => {
        await next({ opacity: 0, life: 0, config: springConfig });
      },
      trail: 15,
    });

    return (
      <div className="projects-cards">
        {filterOn && <ProjectsFilter {...filterProps} />}
        <div
          className="position-relative "
          style={{
            left: "15px",
            width: windowWidth,
            height: Math.max(...heights),
          }}
        >
          {transition(({ life, xy, ...style }, item) => {
            //@ts-ignore
            return 0.1 > life!.get() ? null : (
              <animated.div
                className="coverContainer"
                style={{
                  ...style,
                  //@ts-ignore
                  transform: xy.to((x, y) => `translate(${x}px, ${y}px)`),
                }}
              >
                <ProjectCard
                  key={item.priority}
                  project={item}
                  width={cardWidth}
                  height={cardHeight}
                  isMobile={isMobile}
                />
              </animated.div>
            );
          })}
        </div>
      </div>
    );
  }
);

export default ProjectsList;
