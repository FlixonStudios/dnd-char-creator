import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import MyToolTip from "../components/utilities/MyToolTip";
import { hasKey } from "./Func";

export function SelectionBar({
  numOfChoices,
  choice,
  setChoicesSelected,
  choicesSelected,
  id,
  choiceId,
  setChoiceId,
  isMock,
}) {
  function changeToSelected(e) {
    if (e.target.innerText === "Select") {
      addSelected(e);
      e.target.innerText = "Selected";
      e.target.classList.remove("btn-primary");
      e.target.classList.add("btn-success");
    } else if (e.target.innerText === "Selected") {
      removeSelected(e);
      e.target.innerText = "Select";
      e.target.classList.remove("btn-success");
      e.target.classList.add("btn-primary");
    }
  }

  function addSelected(e) {
    let temp = { ...choice };
    setChoicesSelected((prevState) => [...prevState, temp]);
    setChoiceId((prevState) => [...prevState, id]);
  }

  function removeSelected(e) {
    let filtered = choicesSelected.filter((el) => {
      return el.index !== choice.index;
    });
    let filteredId = choiceId.filter((el) => {
      return el !== id;
    });
    setChoiceId(filteredId);
    setChoicesSelected(filtered);
  }
  function checkChoiceLimit() {
    // Since choice.index is not unique, we generate and pass in our own identifier
    let findIndex = choiceId.findIndex((el) => el === id);

    if (choicesSelected.length >= numOfChoices && findIndex < 0) {
      return (
        <Button variant={"primary"} type={"button"} value={choice} disabled>
          Limit Reached
        </Button>
      );
    } else if (findIndex >= 0) {
      return (
        <Button
          variant={"success"}
          type={"button"}
          value={choice}
          onClick={(e) => changeToSelected(e)}
        >
          Selected
        </Button>
      );
    } else {
      return (
        <Button
          variant={"primary"}
          type={"button"}
          value={choice}
          onClick={(e) => changeToSelected(e)}
        >
          Select
        </Button>
      );
    }
  }
  function renderDefault() {
    return (
      <Button variant={"secondary"} type={"button"} value={choice} disabled>
        Default
      </Button>
    );
  }
  function renderDefaultOrSelection() {
    if (numOfChoices > 0) {
      return checkChoiceLimit();
    } else {
      return renderDefault();
    }
  }
  function renderTooltipController() {
    let parsedUrl = [];

    if (choice["index"].substr(0, 6) === "skill-") {
      return (
        <MyToolTip
          type={"skill"}
          url={choice["url"]}
          title={choice["name"]}
          dependentData={choice}
          isMock={isMock}
        />
      );
    } else if (hasKey(choice, "references")) {
      //logic does not work as choice is not the full object of the proficiency
      parsedUrl = choice["references"][0]["url"].split("/");
      let newObj = choice["references"][0];
      if (parsedUrl[parsedUrl.length - 2] === "equipment") {
        return (
          <MyToolTip
            url={newObj["url"]}
            keyName={"desc"}
            title={newObj["name"]}
            dependentData={choice}
            isMock={isMock}
          />
        );
      } else {
        return <></>;
      }
    } else {
      return <></>;
    }
  }

  return (
    <Row>
      <Col md={8}>
        <Row>
          <Col md={6}>
            <p className={`text-white`}>{choice.name}</p>
          </Col>
          <Col md={2}>{renderTooltipController()}</Col>
        </Row>
      </Col>
      <Col md={4}>{renderDefaultOrSelection()}</Col>
    </Row>
  );
}

export default SelectionBar;
