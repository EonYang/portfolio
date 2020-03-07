import React from 'react';

const ProjectsFilter = ({ categories, setSelected, selected }) => {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="btn-group">
                    <button className="btn navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#myFilter"
                        aria-controls="myFilter" aria-label="My filter toggler">
                        <small><b>{selected}</b> </small>
                    </button>
                    <button className="btn dropdown-toggle d-md-none" type="button" data-toggle="collapse" data-target="#myFilter"
                        aria-controls="myFilter" aria-label="My filter toggler">
                        <span className="caret"></span>
                        <span className="sr-only">Split button!</span>
                    </button>
                </div>
                <div className="collapse navbar-collapse " id="myFilter">
                    <ul className="navbar-nav nav-pills d-block d-md-none">
                        {categories.map((cat, key) => (
                            <li className="nav-item" key={key}>
                                <a href="#" className={`nav-link ${cat === selected ? "active" : ""}`} title={cat} onClick={e => setSelected(e.currentTarget.getAttribute('title'))}
                                    data-toggle="collapse" data-target="#myFilter">
                                    <small className="ml-4">{cat}</small></a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="d-none d-md-block w-100">
                    <div className="row navbar-nav nav-pills">
                        {categories.map((cat, key) => (
                            <div className="nav-item" key={key}>
                                <a href="#" className="nav-link mx-auto" title={cat} onClick={e => setSelected(e.currentTarget.getAttribute('title'))}>
                                    <small>{cat}</small></a>
                            </div>
                        ))}

                    </div>
                </div>
            </nav>
        </>
    )
}

export default ProjectsFilter;