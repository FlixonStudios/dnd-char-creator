import React from 'react';
import {Col, Row} from "react-bootstrap";

export function DisplaySavingThrow({character}) {

    let throwModifiers = character['saving-throws']
    let STR = 'str';let DEX = 'dex';let CON = 'con';let INT = 'int';let WIS = 'wis';let CHA = 'cha'
    return (
        <div>
            <Row>
                <Col md={3}>
                    <h6 className={"text-white text-center"}>STR</h6>
                </Col>
                <Col md={1}>
                    <h6 className={"text-white text-center"}>
                        {throwModifiers[STR]>0?`+${throwModifiers[STR]}`:throwModifiers[STR]}
                    </h6>
                </Col>
                <Col md={3}>
                    <h6 className={"text-white text-center"}>DEX</h6>
                </Col>
                <Col md={1}>
                    <h6 className={"text-white text-center"}>
                        {throwModifiers[DEX]>0?`+${throwModifiers[DEX]}`:throwModifiers[DEX]}
                    </h6>
                </Col>
                <Col md={3}>
                    <h6 className={"text-white text-center"}>CON</h6>
                </Col>
                <Col md={1}>
                    <h6 className={"text-white text-center"}>
                        {throwModifiers[CON]>0?`+${throwModifiers[CON]}`:throwModifiers[CON]}
                    </h6>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <h6 className={"text-white text-center"}>INT</h6>
                </Col>
                <Col md={1}>
                    <h6 className={"text-white text-center"}>
                        {throwModifiers[INT]>0?`+${throwModifiers[INT]}`:throwModifiers[INT]}
                    </h6>
                </Col>
                <Col md={3}>
                    <h6 className={"text-white text-center"}>WIS</h6>
                </Col>
                <Col md={1}>
                    <h6 className={"text-white text-center"}>
                        {throwModifiers[WIS]>0?`+${throwModifiers[WIS]}`:throwModifiers[WIS]}
                    </h6>
                </Col>
                <Col md={3}>
                    <h6 className={"text-white text-center"}>CHA</h6>
                </Col>
                <Col md={1}>
                    <h6 className={"text-white text-center"}>
                        {throwModifiers[CHA]>0?`+${throwModifiers[CHA]}`:throwModifiers[CHA]}
                    </h6>
                </Col>
            </Row>
        </div>
    );
}

export default DisplaySavingThrow;