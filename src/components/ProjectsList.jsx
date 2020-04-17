import React, { useState, useEffect } from 'react';
import ProjectCard from "./ProjectCard";
import ProjectsFilter from "./ProjectsFilter";
import { useMedia } from "../utils/CustomHooks";

import Tools from "../utils/Tools";
import { config, animated, useTransition, to } from "react-spring";

const ProjectsList = ({ projects }) => {

    const { columns, windowWidth } = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [4, 3, 2], 1)
    const categories = ['All'].concat(Tools.extractCategories(projects).map(item => item.category));
    const isMobile = Tools.testIfMobile();
    let videoObserver = Tools.createIntersectionObserver(isMobile);
    const [selected, setSelected] = useState('All');
    const [filteredProjects, setProjects] = useState(projects);

    let heights = new Array(columns).fill(0);
    const cardWidth = windowWidth / columns;
    console.log("card width: ", cardWidth);
    const cardHeight = cardWidth * 0.7;

    let gridItems = filteredProjects.map((project, i) => {
        const col = i % columns;
        const xy = [cardWidth * col, (heights[col] += cardHeight) - cardHeight];
        return { ...project, xy, width: cardWidth, height: cardHeight };
    })
    console.log(gridItems);
    useEffect(() => {
        console.log(selected)
        if (selected === "All") setProjects(projects);
        else setProjects(projects.filter(project => project.category.includes(selected)))
        console.log(filteredProjects)
    }, [selected])

    // useEffect(() => {
    //     if (isMobile) {
    //         $(".coverContainer").each((index, element) => {
    //             videoObserver.observe(element);
    //         })
    //     }
    // }, [videoObserver, isMobile])

    const filterProps = { projects, categories, selected, setSelected };

    const springConfig = { mass: 1, tension: 200, friction: 20 };

    const transition = useTransition(gridItems, {
        key: project => project.id,
        from: ({ xy, width, height }) => ({ opacity: 0, life: 1, width, height, xy }),
        enter: ({ xy, width, height }) => async (next, stop) => {
            await next({ opacity: 1, life: 1, width, height, xy, config: springConfig });
        },
        update: ({ xy, width, height }) => ({ width, height, xy }),
        leave: project => async next => {
            await next({ opacity: 0, life: 0, config: springConfig })
        },
        trail: 15,
    })

    return (
        <>
            < ProjectsFilter {...filterProps} />
            <div className="position-relative " style={{ left: "15px", width: windowWidth, height: Math.max(...heights) }}>
                {transition(({ life, xy, ...style }, item, index) => {
                    console.log(life.get())
                    return life.get() <= 0.1 ? null : (
                        <animated.div className="coverContainer" style={{ ...style, transform: to(xy, (x, y) => `translate(${x}px, ${y}px)`) }}>
                            <ProjectCard key={index} project={item} width={cardWidth} height={cardHeight} isMobile={isMobile} />
                        </animated.div>
                    )
                })}
            </div>
        </>
    )
}

export default ProjectsList;