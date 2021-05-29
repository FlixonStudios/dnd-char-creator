import React from 'react';
import {NavLink, Link} from "react-router-dom";
import {Navbar, Container, Nav, NavDropdown, Image, Row} from "react-bootstrap";
import profile_icon from "../../img/profile-icon.png"

export function HomeNav(props) {
    return (
        <Navbar bg="" expand="lg" className={"p-0"}>

                <Navbar.Brand className={"p-0"}>
                    <Link to={"/home"}>
                        <h2 className={"text-white text-decoration-none"}>Dungeons & Dragons</h2>
                    </Link>
                    <h5 className={"text-white"}>5th Edition</h5>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Row>
                        <Image style={{height:"20px"}} src={profile_icon} />
                        <NavDropdown title="" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href={"/"}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Row>
                </Nav>


        </Navbar>
    );
}

export default HomeNav;