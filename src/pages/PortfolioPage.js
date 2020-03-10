import React from 'react';
import ProjectsList from "../components/ProjectsList";

const PortfolioPage = () => {
    return (
        <>
            <div>
                <ProjectsList />
            </div>
            <div style={{height:'1000px'}}></div>
            <div className=" w-100 ">
                <p className="text-center">Hmm, what are you looking for?</p>
            </div>

        </>
    )
}
export default PortfolioPage;
