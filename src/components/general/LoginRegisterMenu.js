import React from 'react';
import {Button, Form, FormLabel} from "react-bootstrap";

export function LoginRegisterMenu(props) {
    return (
        <>
            <div className="dropdown-menu">
                <Form className="px-4 py-3">
                    <div className="mb-3">
                        <FormLabel htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</FormLabel>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail1"
                               placeholder="email@example.com"/>
                    </div>
                    <div className="mb-3">
                        <FormLabel htmlFor="exampleDropdownFormPassword1" className="form-label">Password</FormLabel>
                        <input type="password" className="form-control"
                               id="exampleDropdownFormPassword1"
                               placeholder="Password"/>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                                <FormLabel className="form-check-label" htmlFor="dropdownCheck">
                                    Remember me
                                </FormLabel>
                        </div>
                    </div>
                    <Button type="submit" className="btn btn-primary">Sign in</Button>
                </Form>
            </div>
        </>
    );
}

export default LoginRegisterMenu;