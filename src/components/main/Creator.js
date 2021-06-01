import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {SelectClass} from "./SelectClass";
import {SelectRace} from "./SelectRace";
import SelectLevel from "./SelectLevel";
import SelectBaseAbility from "./SelectBaseAbility";
import SkillProficiencies from "./SkillProficiencies";
import bg_img from "../../img/dnd-bg.jpg";
import SelectRaceProficiencies from "./SelectRaceProficiencies";
import {getListData} from "../../lib/GetArrayData";
import {CLASSES, RACES} from "../../lib/Api";
import AbilityModifier from "./AbilityModifier";
import LevelProficiency from "./LevelProficiency";
import SelectTraits from "./SelectTraits";
import SelectClassProficiencies from "./SelectClassProficiencies";
import DisplayData from "./DisplayData";

export function Creator({
                            setRaceSelection,raceSelection,
                            setSubRaceSelection,subRaceSelection,
                            setClassSelection,classSelection,
                            setLevelSelection,levelSelection,
                            setBaseAbilitiesSelection, baseAbilitiesSelection,
                            setProfSelection,profSelection,
                            setClassProfSelection, classProfSelection,
                            setModifierValues, modifierValues,
                            setLevelProficiency,levelProficiency,
                            setRaceAbilityBonus,raceAbilityBonus,
                            setTraitSelection,traitSelection,
                            character
                        }) {
    const[raceDetails, setRaceDetails] = useState([])
    const[classDetails, setClassDetails] = useState([])

    useEffect(()=>{
        if(raceSelection){
            getListData(`${RACES}/${raceSelection.toLowerCase()}`,'').then((res)=>{
                setRaceDetails(res)
            }).catch(err=>{console.log(err)})
        }
        setProfSelection(prevState=>({...prevState,...{['race']:false}}))
    },[raceSelection])

    useEffect(()=>{
        if(classSelection){
            getListData(`${CLASSES}/${classSelection.toLowerCase()}`,'').then((res)=>{
                setClassDetails(res)
            }).catch(err=>{console.log(err)})
        }
        setProfSelection(prevState=>({...prevState,...{['race']:false}}))
    },[classSelection])

    return (
        <div style={{
            backgroundImage:`url(${bg_img})`,
            backgroundSize:`cover`,
            backgroundPosition:`center`,
            height: "1440px",
        }}>

            <Container style={{backgroundColor:`rgba(0,0,0,0.7)`}}>
                <Row>
                    <Col lg={8}>
                        <Row>
                            <Col>Name:</Col>
                        </Row>
                        <div name={"key-stats"}>
                            <Row>
                                <SelectRace setRaceSelection={setRaceSelection}
                                            raceSelection={raceSelection}
                                            setSubRaceSelection={setSubRaceSelection}
                                            subRaceSelection={subRaceSelection}
                                />

                                <Col md={3}>
                                    <SelectClass setClassSelection={setClassSelection}
                                                 classSelection={classSelection}
                                    />
                                </Col>
                                <Col md={3}>
                                    <SelectLevel setLevelSelection={setLevelSelection}
                                                 levelSelection={levelSelection}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div name={"portrait"}>
                            <Row className={`d-flex justify-content-center`}>
                                <h1 className={"text-white"}>Portrait</h1>
                            </Row>
                        </div>
                        <div name={"secondary-stats"}>
                            <Row>
                                <Col  className={`d-flex flex-column align-items-center`}>
                                    <h5 className={"text-white"}>Proficiency</h5>
                                    <LevelProficiency levelSelection={levelSelection}
                                                      setLevelProficiency={setLevelProficiency}
                                    />
                                </Col>
                                <Col>
                                    <h5 className={"text-white"}>Initiative</h5>
                                </Col>
                                <Col>
                                    <h5 className={"text-white"}>Armor Class</h5>
                                </Col>
                                <Col>
                                    <h5 className={"text-white"}>Hit Points</h5>
                                </Col>
                            </Row>
                        </div>
                        <div name={"ability-scores"}>
                            <Row >
                                <Col className={`d-flex justify-content-center`} xs={12}>
                                    <h4 className={"text-white"}>Ability Scores</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                                    <h5 className={"text-white"}>Strength</h5>
                                    <AbilityModifier stat={"str"}
                                                     baseAbilitiesSelection={baseAbilitiesSelection}
                                                     setModifierValues={setModifierValues}
                                                     raceAbilityBonus={raceAbilityBonus}
                                                     raceDetails={raceDetails}
                                    />
                                    <SelectBaseAbility stat={"str"}
                                                       setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                                                       baseAbilitiesSelection={baseAbilitiesSelection}
                                    />
                                </Col>
                                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                                    <h5 className={"text-white"}>Dexterity</h5>
                                    <AbilityModifier stat={"dex"}
                                                     baseAbilitiesSelection={baseAbilitiesSelection}
                                                     setModifierValues={setModifierValues}
                                                     raceAbilityBonus={raceAbilityBonus}
                                                     raceDetails={raceDetails}
                                    />
                                    <SelectBaseAbility stat={"dex"}
                                                       setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                                                       baseAbilitiesSelection={baseAbilitiesSelection}
                                    />
                                </Col>
                                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                                    <h5 className={"text-white"}>Constitution</h5>
                                    <AbilityModifier stat={"con"}
                                                     baseAbilitiesSelection={baseAbilitiesSelection}
                                                     setModifierValues={setModifierValues}
                                                     raceAbilityBonus={raceAbilityBonus}
                                                     raceDetails={raceDetails}
                                    />
                                    <SelectBaseAbility stat={"con"}
                                                       setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                                                       baseAbilitiesSelection={baseAbilitiesSelection}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                                    <h5 className={"text-white"}>Intelligence</h5>
                                    <AbilityModifier stat={"int"}
                                                     baseAbilitiesSelection={baseAbilitiesSelection}
                                                     setModifierValues={setModifierValues}
                                                     raceAbilityBonus={raceAbilityBonus}
                                                     raceDetails={raceDetails}
                                    />
                                    <SelectBaseAbility stat={"int"}
                                                       setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                                                       baseAbilitiesSelection={baseAbilitiesSelection}
                                    />
                                </Col>
                                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                                    <h5 className={"text-white"}>Wisdom</h5>
                                    <AbilityModifier stat={"wis"}
                                                     baseAbilitiesSelection={baseAbilitiesSelection}
                                                     setModifierValues={setModifierValues}
                                                     raceAbilityBonus={raceAbilityBonus}
                                                     raceDetails={raceDetails}
                                    />
                                    <SelectBaseAbility stat={"wis"}
                                                       setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                                                       baseAbilitiesSelection={baseAbilitiesSelection}
                                    />
                                </Col>
                                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                                    <h5 className={"text-white"}>Charisma</h5>
                                    <AbilityModifier stat={"cha"}
                                                     baseAbilitiesSelection={baseAbilitiesSelection}
                                                     setModifierValues={setModifierValues}
                                                     raceAbilityBonus={raceAbilityBonus}
                                                     raceDetails={raceDetails}
                                    />
                                    <SelectBaseAbility stat={"cha"}
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
                                {
                                    (raceSelection) ? <SelectRaceProficiencies raceDetails={raceDetails}
                                                                            raceSelection={raceSelection}
                                                                            profSelection={profSelection}
                                                                            setProfSelection={setProfSelection}

                                /> : <></>
                                }
                            </Row>
                            <Row>
                                {
                                    (raceSelection)? <SelectTraits raceDetails={raceDetails}
                                                                    raceSelection={raceSelection}
                                                                    traitSelection = {traitSelection}
                                                                    setTraitSelection = {setTraitSelection}
                                    /> : <></>
                                }
                            </Row>
                            <Row>
                                {
                                    (classSelection)? <SelectClassProficiencies classSelection={classSelection}
                                                                                classDetails={classDetails}
                                                                               profSelection={profSelection}
                                                                               setProfSelection={setProfSelection}


                                    /> : <></>
                                }
                            </Row>
                        </div>

                        <Row>
                            <Col sm={6} className={"text-white"}>
                                <h5>Saving Throws</h5>
                                </Col>
                            <Col sm={6} className={"text-white"}>
                                <h5>Traits</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} className={"text-white"}>
                                <h5>Armor</h5>
                                <DisplayData list={character['armor-proficiencies']} keyName={'index'} />

                            </Col>
                            <Col sm={6} className={"text-white"}>
                                <h5>Weapons</h5>
                                <DisplayData list={character['weapon-proficiencies']} keyName={'index'} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} className={"text-white"}>
                                <h5>Tools</h5>
                                <DisplayData list={character['tool-proficiencies']} keyName={'index'}/>
                            </Col>
                            <Col sm={6} className={"text-white"}>
                                <h5>Languages</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} className={"text-white"}>
                                <h5>Others</h5>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <h5 className={"text-white"}>Skill Proficiencies</h5>
                        <SkillProficiencies
                            setClassProfSelection={setClassProfSelection}
                            classProfSelection={classProfSelection}
                            profSelection={profSelection}
                            setProfSelection={setProfSelection}
                            levelProficiency={levelProficiency}
                            modifierValues={modifierValues}
                        />
                    </Col>
                </Row>

            </Container>
        </div>

    );
}

export default Creator;