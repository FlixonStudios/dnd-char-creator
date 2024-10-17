import React from "react";
import { Col, Row } from "react-bootstrap";

export function DisplaySavingThrow({ character }) {
  let throwModifiers = character["saving-throws"];
  let STR = "str";
  let DEX = "dex";
  let CON = "con";
  let INT = "int";
  let WIS = "wis";
  let CHA = "cha";

  function renderModifiers(statArr) {
    return (
      <>
        {statArr.map((stat) => {
          return (
            <Col md={4} key={stat}>
              <Row md={12}>
                <Col md={8}>
                  <h6 className={"text-white text-center"}>
                    {stat.toUpperCase()}
                  </h6>
                </Col>
                <Col md={3}>
                  <h6 className={"text-white text-center"}>
                    {throwModifiers[stat] > 0
                      ? `+${throwModifiers[stat]}`
                      : throwModifiers[stat]}
                  </h6>
                </Col>
              </Row>
            </Col>
          );
        })}
      </>
    );
  }

  function renderRow(statArr) {
    return <Row>{renderModifiers(statArr)}</Row>;
  }

  return (
    <div>
      {renderRow([STR, DEX, CON])}
      {renderRow([INT, WIS, CHA])}
    </div>
  );
}

export default DisplaySavingThrow;
