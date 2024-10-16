import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { SelectClass } from "../sub/SelectClass";
import { SelectRace } from "../sub/SelectRace";
import SelectLevel from "../sub/SelectLevel";
import SelectBaseAbility from "../sub/SelectBaseAbility";
import SkillProficiencies from "./SkillProficiencies";
import bg_img from "../../img/dnd-bg.jpg";
import SelectRaceProficiencies from "../sub/SelectRaceProficiencies";
import { getListData } from "../../lib/GetData";
import { CLASSES, RACES, RULES } from "../../lib/Api";
import AbilityModifier from "./AbilityModifier";
import LevelProficiency from "./LevelProficiency";
import SelectTraits from "../sub/SelectTraits";
import SelectClassProficiencies from "../sub/SelectClassProficiencies";
import DisplayData from "../utilities/DisplayData";
import { hasKey } from "../../lib/Func";
import DisplaySavingThrow from "../utilities/DisplaySavingThrow";
import SelectLanguages from "../sub/SelectLanguages";
import MyToolTip from "../utilities/MyToolTip";

export function Creator({
  setRaceSelection,
  raceSelection,
  setSubRaceSelection,
  subRaceSelection,
  setClassSelection,
  classSelection,
  setLevelSelection,
  levelSelection,
  setBaseAbilitiesSelection,
  baseAbilitiesSelection,
  setProfSelection,
  profSelection,
  setClassProfSelection,
  classProfSelection,
  setModifierValues,
  modifierValues,
  setLevelProficiency,
  levelProficiency,
  setRaceAbilityBonus,
  raceAbilityBonus,
  setTraitSelection,
  traitSelection,
  setSavingThrows,
  savingThrows,
  setLanguages,
  languages,
  setHitDie,
  hitDie,
  setCharImg,
  charImg,
  setCharName,
  character,
  setCharacterList,
  diceRoll,
  setDiceRoll,
  isMock,
}) {
  const abilityKey = "ability-scores";

  const [raceDetails, setRaceDetails] = useState([]);
  const [classDetails, setClassDetails] = useState([]);
  const [abilityOverallTips, setAbilityOverallTips] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [saveActive, setSaveActive] = useState(true);

  useEffect(() => {
    getListData(`${RULES}/using-ability-scores`, "", isMock)
      .then((res) => {
        parseAbilityData(res["desc"]);
      })
      .catch((err) => console.log("Error"));
  }, []);

  useEffect(() => {
    if (raceSelection) {
      getListData(`${RACES}/${raceSelection.toLowerCase()}`, "", isMock)
        .then((res) => {
          setRaceDetails(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //setProfSelection(prevState=>({...prevState,...{['race']:false}}))
  }, [raceSelection]);

  useEffect(() => {
    if (classSelection) {
      getListData(`${CLASSES}/${classSelection.toLowerCase()}`, "", isMock)
        .then((res) => {
          setClassDetails(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //setProfSelection(prevState=>({...prevState,...{['class']:false}}))
  }, [classSelection]);

  useEffect(() => {
    if (getRacialAbilityBonus().length > 0) {
      setRaceAbilityBonus(getRacialAbilityBonus());
    }
  }, [raceDetails]);
  useEffect(() => {
    if (getSavingThrows().length > 0) {
      setSavingThrows(getSavingThrows());
    }
    setHitDie(getHitDie());
  }, [classDetails]);

  function parseAbilityData(str) {
    let temp = str.split("\n\n");
    temp[0] = temp[0].substring(2, temp[0].length);
    setAbilityOverallTips(temp);
  }

  function getRacialAbilityBonus() {
    if (hasKey(raceDetails, "ability_bonuses")) {
      return raceDetails["ability_bonuses"];
    } else {
      return [];
    }
  }
  function getSavingThrows() {
    if (hasKey(classDetails, "saving_throws")) {
      return classDetails["saving_throws"];
    } else {
      return [];
    }
  }
  function getHitDie() {
    if (hasKey(classDetails, "hit_die")) {
      return classDetails["hit_die"];
    } else {
      return 0;
    }
  }
  function saveCurrentCharacter(e) {
    if (saveActive) {
      let temp = { ...character };
      e.target.classList.remove("btn-primary");
      e.target.classList.add("btn-success");
      e.target.innerText = "Changes Saved";
      setSaveActive(false);
      setTimeout(() => {
        e.target.classList.remove("btn-success");
        e.target.classList.add("btn-primary");
        e.target.innerText = "Save Character";
        setSaveActive(true);
      }, 2000);

      setCharacterList((prevState) => [...prevState, temp]);
      setRaceSelection(false);
      setClassSelection(false);
      setLevelSelection(false);
      setProfSelection(false);
      setBaseAbilitiesSelection({
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
      });
    }
  }
  function change(callback, e) {
    //console.log(e.target.value)
    callback((prevState) => e.target.value);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bg_img})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        height: "100%",
      }}
    >
      <Container
        style={{ backgroundColor: `rgba(0,0,0,0.7)`, paddingBottom: "96px" }}
      >
        <Row>
          <Col lg={8}>
            <div name={"key-stats"}>
              <Row className={"mt-2 mb-2"}>
                <Col md={2}>
                  <h4 className={"text-white"}>Name:</h4>
                </Col>
                <Col md={10}>
                  <input
                    type="text"
                    className={"form-control"}
                    placeholder={"Type your character's name here..."}
                    name={"name"}
                    onChange={(e) => change(setCharName, e)}
                  />
                </Col>
              </Row>
              <Row>
                <SelectRace
                  setRaceSelection={setRaceSelection}
                  raceSelection={raceSelection}
                  setSubRaceSelection={setSubRaceSelection}
                  subRaceSelection={subRaceSelection}
                  isMock={isMock}
                />

                <Col md={3}>
                  <SelectClass
                    setClassSelection={setClassSelection}
                    classSelection={classSelection}
                    isMock={isMock}
                  />
                </Col>
                <Col md={3}>
                  <SelectLevel
                    setLevelSelection={setLevelSelection}
                    levelSelection={levelSelection}
                  />
                </Col>
              </Row>
            </div>
            <div name={"Portrait"} className={"mt-2 mb-4"}>
              <Row className={`d-flex justify-content-center`}>
                <Col md={12} className={"d-flex justify-content-center"}>
                  <h4 className={"text-white"}>Portrait</h4>
                </Col>
                <Col md={12}>
                  <div
                    className={
                      "d-flex justify-content-center align-items-center m-3"
                    }
                  >
                    <Image
                      src={charImg}
                      style={{
                        height: "360px",
                        width: "240px",
                        objectFit: "cover",
                      }}
                      fluid
                    />
                  </div>
                </Col>
                <Col md={10}>
                  <input
                    type="text"
                    className={"form-control ml-4 mr-4"}
                    placeholder={"Input your own image url here..."}
                    name={"url"}
                    onChange={(e) => change(setImgUrl, e)}
                  />
                </Col>
                <Col md={2}>
                  <Button
                    variant={"primary"}
                    onClick={() => setCharImg(imgUrl)}
                  >
                    Confirm
                  </Button>
                </Col>
              </Row>
            </div>
            <div name={"Secondary-stats"}>
              <Row>
                <Col className={`d-flex flex-column align-items-center`}>
                  <h5 className={"text-white"}>Proficiency</h5>
                  <LevelProficiency
                    levelSelection={levelSelection}
                    setLevelProficiency={setLevelProficiency}
                  />
                </Col>
                <Col className={`d-flex flex-column align-items-center`}>
                  <h5 className={"text-white"}>Initiative</h5>
                  <h5 className={"text-white"}>
                    {character["initiative"] > 0
                      ? `+${character["initiative"]}`
                      : character["initiative"]}
                  </h5>
                </Col>
                <Col className={`d-flex flex-column align-items-center`}>
                  <h5 className={"text-white"}>Armor Class</h5>
                  <h5 className={"text-white"}>
                    {character["armor-class"] > 0
                      ? `+${character["armor-class"]}`
                      : character["armor-class"]}
                  </h5>
                </Col>
                <Col className={`d-flex flex-column align-items-center`}>
                  <h5 className={"text-white"}>Hit Points</h5>
                  <h5 className={"text-white"}>{character["hit-points"]}</h5>
                </Col>
              </Row>
            </div>
            <div name={"Ability Scores"}>
              <Row>
                <Col className={`d-flex justify-content-center`} xs={12}>
                  <h4 className={"text-white"}>Ability Scores</h4>
                  <MyToolTip
                    title={abilityOverallTips[0]}
                    custom={abilityOverallTips[2]}
                    dependentData={abilityOverallTips}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                  <h5 className={"text-white"}>Strength</h5>
                  <AbilityModifier
                    stat={"str"}
                    setModifierValues={setModifierValues}
                    abilityScore={character[abilityKey]["str"]}
                  />
                  <SelectBaseAbility
                    stat={"str"}
                    setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                    baseAbilitiesSelection={baseAbilitiesSelection}
                  />
                </Col>
                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                  <h5 className={"text-white"}>Dexterity</h5>
                  <AbilityModifier
                    stat={"dex"}
                    setModifierValues={setModifierValues}
                    abilityScore={character[abilityKey]["dex"]}
                  />
                  <SelectBaseAbility
                    stat={"dex"}
                    setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                    baseAbilitiesSelection={baseAbilitiesSelection}
                  />
                </Col>
                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                  <h5 className={"text-white"}>Constitution</h5>
                  <AbilityModifier
                    stat={"con"}
                    setModifierValues={setModifierValues}
                    abilityScore={character[abilityKey]["con"]}
                  />
                  <SelectBaseAbility
                    stat={"con"}
                    setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                    baseAbilitiesSelection={baseAbilitiesSelection}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                  <h5 className={"text-white"}>Intelligence</h5>
                  <AbilityModifier
                    stat={"int"}
                    setModifierValues={setModifierValues}
                    abilityScore={character[abilityKey]["int"]}
                  />
                  <SelectBaseAbility
                    stat={"int"}
                    setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                    baseAbilitiesSelection={baseAbilitiesSelection}
                  />
                </Col>
                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                  <h5 className={"text-white"}>Wisdom</h5>
                  <AbilityModifier
                    stat={"wis"}
                    setModifierValues={setModifierValues}
                    abilityScore={character[abilityKey]["wis"]}
                  />
                  <SelectBaseAbility
                    stat={"wis"}
                    setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                    baseAbilitiesSelection={baseAbilitiesSelection}
                  />
                </Col>
                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                  <h5 className={"text-white"}>Charisma</h5>
                  <AbilityModifier
                    stat={"cha"}
                    setModifierValues={setModifierValues}
                    abilityScore={character[abilityKey]["cha"]}
                  />
                  <SelectBaseAbility
                    stat={"cha"}
                    setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                    baseAbilitiesSelection={baseAbilitiesSelection}
                  />
                </Col>
              </Row>
            </div>
            <div name={"Selections"}>
              <Row className={`d-flex justify-content-center`}>
                <h5 className={"text-white"}>Selected Proficiencies</h5>
              </Row>
              <Row>
                {raceSelection ? (
                  <SelectRaceProficiencies
                    raceDetails={raceDetails}
                    raceSelection={raceSelection}
                    profSelection={profSelection}
                    setProfSelection={setProfSelection}
                  />
                ) : (
                  <></>
                )}
              </Row>
              <Row>
                {raceSelection ? (
                  <SelectTraits
                    raceDetails={raceDetails}
                    raceSelection={raceSelection}
                    traitSelection={traitSelection}
                    setTraitSelection={setTraitSelection}
                  />
                ) : (
                  <></>
                )}
              </Row>
              <Row>
                {classSelection ? (
                  <SelectClassProficiencies
                    classSelection={classSelection}
                    classDetails={classDetails}
                    profSelection={profSelection}
                    setProfSelection={setProfSelection}
                  />
                ) : (
                  <></>
                )}
              </Row>
              <Row>
                {raceSelection ? (
                  <SelectLanguages
                    setLanguages={setLanguages}
                    raceDetails={raceDetails}
                    raceSelection={raceSelection}
                  />
                ) : (
                  <></>
                )}
              </Row>
            </div>
            <div name={"Summary"}>
              <Row>
                <Col sm={6} className={"text-white"}>
                  <h5>Saving Throws</h5>
                  <DisplaySavingThrow character={character} />
                </Col>
                <Col sm={6} className={"text-white"}>
                  <h5>Traits</h5>
                  <DisplayData list={character["traits"]} keyName={"name"} />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className={"text-white"}>
                  <h5>Armor</h5>
                  <DisplayData
                    list={character["armor-proficiencies"]}
                    keyName={"name"}
                  />
                </Col>
                <Col sm={6} className={"text-white"}>
                  <h5>Weapons</h5>
                  <DisplayData
                    list={character["weapon-proficiencies"]}
                    keyName={"name"}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className={"text-white"}>
                  <h5>Tools</h5>
                  <DisplayData
                    list={character["tool-proficiencies"]}
                    keyName={"name"}
                  />
                </Col>
                <Col sm={6} className={"text-white"}>
                  <h5>Languages</h5>
                  <DisplayData list={character["languages"]} keyName={"name"} />
                </Col>
              </Row>
              <Row>
                <Col sm={12} className={"text-white"}>
                  <h5>Others</h5>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={4}>
            <div name={"Skill Summary"}>
              <h5 className={"text-white"}>Skill Proficiencies</h5>
              <SkillProficiencies
                setClassProfSelection={setClassProfSelection}
                classProfSelection={classProfSelection}
                profSelection={profSelection}
                setProfSelection={setProfSelection}
                levelProficiency={levelProficiency}
                modifierValues={modifierValues}
              />
            </div>
          </Col>
        </Row>
        <Row className={"justify-content-end"}>
          <Button
            variant={"primary"}
            className={"mb-3 mr-3"}
            onClick={(e) => saveCurrentCharacter(e)}
          >
            Save Character
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Creator;
