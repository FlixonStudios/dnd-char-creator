import React from 'react';
import {Link} from "react-router-dom";
import {Col, Row, Button, DropdownButton, Form, FormLabel} from "react-bootstrap";
import { testDatabase } from '../../Database';

export function HomeNav(props) {
    return (
            <Row>
                <Col md={6}>
                    <Link to={"/dnd-char-creator/home"}>
                        <h2 className={"text-white text-decoration-none"}>Dungeons & Dragons</h2>
                    </Link>
                    <h5 className={"text-white"}>5th Edition</h5>
                </Col>
                <Col md={2}></Col>
                <Col md={4} className={"d-flex align-items-center justify-content-end"}>
                    <DropdownButton title={"Login/Register"} variant={"secondary"} as={"button-group"}>
                        <Form className={"m-2"}>
                            <FormLabel>Email Address</FormLabel>
                            <input type={"email"} className={"form-control"} placeholder={"email@example.com"}/>
                            <FormLabel>Password</FormLabel>
                            <input type={"password"} className={"form-control"} placeholder={"Password"}/>
                            <Button variant={"success"} size={"sm"} className={"m-2"}
                            onClick={testDatabase}>
                                Login
                                </Button>
                            <Button variant={"primary"} size={"sm"} className={"m-2"}>Register</Button>
                        </Form>
                    </DropdownButton>
                </Col>
            </Row>
    );
}

export default HomeNav;