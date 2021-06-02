import React from 'react';
import {Col, Row} from "react-bootstrap";

export function DisplaySavingThrow({classDetails}) {



    return (
        <div>
            <Row>
                <Col md={4}>STR</Col>
                <Col md={4}>DEX</Col>
                <Col md={4}>CON</Col>
            </Row>
            <Row>
                <Col md={4}>INT</Col>
                <Col md={4}>WIS</Col>
                <Col md={4}>CHA</Col>
            </Row>
        </div>
    );
}

export default DisplaySavingThrow;