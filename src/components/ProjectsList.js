import React, { useState,useEffect } from 'react';
import ProjectCard from "./ProjectCard";
import ProjectsFilter from "./ProjectsFilter";
import { projects } from "../data/content.json";
import Tools from "../tools/Tools";
import $ from "jquery"

const ProjectsList = () => {
    const categories = ['All'].concat(Tools.extractCategories(projects));
    const isMobile = Tools.testIfMobile();

    let videoObserver = Tools.createIntersectionObserver(isMobile);
    
    const [selected, setSelected] = useState('All');

    useEffect(()=>{
        if (isMobile) {
            $(".coverContainer").each((index, element) => {
                videoObserver.observe(element);
            })
        }
    },[videoObserver, isMobile])

    return (
        <div className="container-fluid">
            {console.log(selected)}
            <ProjectsFilter projects={projects} categories={categories} selected={selected}
                setSelected={setSelected} />
            <div className="row">
                {projects.map((project, key) => {
                    if (selected === "All" || project.category.includes(selected)) {
                            return (<ProjectCard project={project} key={key} isMobile={isMobile} />)
                    }
                })}
            </div>
        </div>
    )
}

export default ProjectsList;