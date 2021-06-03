import React from 'react';

import {NavLink} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

export function Navigation(props) {
    return (
        <Navbar bg="" expand="md" className={"p-0"}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex align-items-center">
                        <NavLink className={"text-white mr-4"} to={"/creator"}>Character Creator</NavLink>
                        <NavLink className={"text-white"} to={"/characters"}>Your Characters
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>

        </Navbar>
    );
}

export default Navigation;