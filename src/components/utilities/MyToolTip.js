import React, { useEffect, useState } from "react";
import { Popover, OverlayTrigger, Image } from "react-bootstrap";
import tooltip_img from "../../img/tooltip.png";
import { getStringData } from "../../lib/GetData";
import { EQUIPMENT, SKILLS } from "../../lib/Api";

export function MyToolTip({
  url = "",
  keyName = "",
  title,
  custom = "",
  dependentData,
  type = "",
  defaultTitle = "Title Loading",
  defaultMain = "Loading...",
  isMock,
}) {
  const [main, setMain] = useState("");

  useEffect(() => {
    if (custom === "" && url !== "") {
      if (type === "skill") {
        renderSkillTooltip();
      } else if (type === "equipment") {
        renderToolTooltip();
      } else {
        getStringData(url, "", isMock)
          .then((res) => {
            if (keyName === "") {
              setMain(res);
            } else {
              setMain(res[keyName]);
            }
          })
          .catch((err) => {
            setMain("Error on getting data");
          });
      }
    } else {
      setMain(custom);
    }
  }, [dependentData]);

  function renderSkillTooltip() {
    let newUrl = "";
    let parsedUrlArr = url.split("/");
    if (parsedUrlArr[parsedUrlArr.length - 2] === "proficiencies") {
      let proficiency = parsedUrlArr[parsedUrlArr.length - 1];
      let skill = proficiency.substring(6, proficiency.length);
      newUrl = `${SKILLS}/${skill}`;
      getStringData(newUrl, "", isMock)
        .then((res) => {
          setMain(res["desc"]);
        })
        .catch((err) => {
          setMain("Error on getting data");
        });
    }
  }
  function renderToolTooltip() {
    let newUrl = "";
    let parsedUrlArr = url.split("/");
    if (parsedUrlArr[parsedUrlArr.length - 2] === "proficiencies") {
      let tool = parsedUrlArr[parsedUrlArr.length - 1];
      newUrl = `${EQUIPMENT}/${tool}`;
      getStringData(newUrl, "", isMock)
        .then((res) => {
          setMain(res["desc"]);
        })
        .catch((err) => {
          setMain("Error on getting data");
        });
    }
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{title}</Popover.Title>
      <Popover.Content>{main}</Popover.Content>
    </Popover>
  );

  const RenderPopup = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      {/*<Button variant="success"></Button>*/}
      <Image
        className={"m-2"}
        src={tooltip_img}
        style={{ height: "20px" }}
        fluid
      ></Image>
    </OverlayTrigger>
  );

  return <RenderPopup />;
}

export default MyToolTip;
