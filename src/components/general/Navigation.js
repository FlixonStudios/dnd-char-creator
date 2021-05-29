import React from 'react';

import {NavLink, Link} from "react-router-dom";
import {Navbar, Container, Nav, NavDropdown, Image, Row} from "react-bootstrap";

export function Navigation(props) {
    return (
        <Navbar bg="" expand="md" className={"p-0"}>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        <NavLink className={"text-white"} to={"/creator"}>Character Creator</NavLink>
                        <NavDropdown style={{color:`white`}} title="Your Characters" id="basic-nav-dropdown">
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

        </Navbar>
    );
}

export default Navigation;