import React, { Component } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link, LinkProps } from "react-router-dom";
import BigNav from "./BigNav";
const Header = () => (
    <>
        <BigNav top="60px" right="100px" />
        <Navbar expand="md" bg="white">
            <Link to="/" className="navbar-brand">
                <a className="navbar-brand d-flex" style={{ height: '80px' }} href="http://yangyang.blog/portfolio/">
                    <div id="logoCanvas" className="d-inline-flex align-items-center" style={{ width: '80px', height: '80px' }}></div>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.10.2/p5.min.js"></script>
                    <script src="js/logo.js"></script>
                    <div className="d-inline-flex align-items-center" style={{ height: '80px' }}>Yang's Projects</div>
                </a>
            </Link>
        </Navbar>
    </>
)

export default Header;