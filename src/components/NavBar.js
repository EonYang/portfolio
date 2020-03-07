import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    render() {
        return (
            <>
                {/* <nav>
                    <ul>
                        <li>
                            <Link to="/">Projects</Link>
                            <Link to="/about">About</Link>
                            <Link to="/articles">Articles</Link>
                        </li>
                    </ul>
                </nav> */}

                <nav className="navbar bg-none navbar-dark navbar-expand-sm" id="header">
                    <div className="container-fluid">
                        <a className="navbar-brand d-flex" style={{ height: '80px' }} href="http://yangyang.blog/portfolio/">
                            <div id="logoCanvas" className="d-inline-flex align-items-center" style={{ width: '80px', height: '80px' }}></div>
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.min.js"></script>
    <script src="js/logo.js"></script>
                            <div className="d-inline-flex align-items-center" style={{ height: '80px' }}>Yang's Projects</div>
                        </a>
                        <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#myToggleNav"
                            aria-controls="myToggleNav" aria-label="Navigation Toggler">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="myToggleNav">
                            <div className="navbar-nav ml-auto  ">
                                <a className="nav-item nav-link ml-auto active" href="http://yangyang.blog/portfolio/">Projects</a>
                                <a className="nav-item nav-link ml-auto" href="http://yangyang.blog/latest">Latest</a>
                                <a className="nav-item nav-link ml-auto" href="http://yangyang.blog/about/">About</a>
                                <a className="nav-item nav-link ml-auto" href="http://yangyang.blog/contact/">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavBar;
