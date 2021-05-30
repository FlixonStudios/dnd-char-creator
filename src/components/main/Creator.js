import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Dropdown, DropdownButton, Image} from "react-bootstrap";
import InputDropdown from "../../lib/InputDropdown";
import {SelectClass} from "./SelectClass";
import {SelectRace} from "./SelectRace";
import SelectLevel from "./SelectLevel";
import SelectBaseAbility from "./SelectBaseAbility";
import SkillProficiencies from "./SkillProficiencies";
import bg_img from "../../img/dnd-bg.jpg"
import SelectClassProficiencies from "./SelectClassProficiencies";
import SelectRaceProficiencies from "./SelectRaceProficiencies";
import {getListData} from "../../lib/GetArrayData";
import {RACES} from "../../lib/Api";

export function Creator({
                            setRaceSelection,raceSelection,
                            setSubRaceSelection,subRaceSelection,
                            setClassSelection,classSelection,
                            setLevelSelection,levelSelection,
                            setBaseAbilitiesSelection, baseAbilitiesSelection,
                            setRaceProfSelection,raceProfSelection,
                            setClassProfSelection, classProfSelection
                        }) {
    const[level, setLevel] = useState(1)
    const[charClass, setCharClass] = useState('')
    const[raceDetails, setRaceDetails] = useState([])

    useEffect(()=>{

        if(raceSelection){
            getListData(`${RACES}/${raceSelection.toLowerCase()}`,'').then((res)=>{
                setRaceDetails(res)
            }).catch(err=>{
                console.log(err)
            })
        }
    },[raceSelection])

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
                        <Row className={`d-flex justify-content-center`}>
                            <h1 className={"text-white"}>Portrait</h1>
                        </Row>
                        <Row>
                            <Col>
                                <h5 className={"text-white"}>Proficiency</h5>
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
                        <div>
                            <Row >
                                <Col className={`d-flex justify-content-center`} xs={12}>
                                    <h4 className={"text-white"}>Ability Scores</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                                    <h5 className={"text-white"}>Strength</h5>
                                    <SelectBaseAbility stat={"str"}
                                                       setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                                                       baseAbilitiesSelection={baseAbilitiesSelection}
                                    />
                                </Col>
                                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                                    <h5 className={"text-white"}>Dexterity</h5>
                                    <SelectBaseAbility stat={"dex"}
                                                       setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                                                       baseAbilitiesSelection={baseAbilitiesSelection}
                                    />
                                </Col>
                                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                                    <h5 className={"text-white"}>Constitution</h5>
                                    <SelectBaseAbility stat={"con"}
                                                       setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                                                       baseAbilitiesSelection={baseAbilitiesSelection}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                                    <h5 className={"text-white"}>Intelligence</h5>
                                    <SelectBaseAbility stat={"int"}
                                                       setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                                                       baseAbilitiesSelection={baseAbilitiesSelection}
                                    />
                                </Col>
                                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                                    <h5 className={"text-white"}>Wisdom</h5>
                                    <SelectBaseAbility stat={"wis"}
                                                       setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                                                       baseAbilitiesSelection={baseAbilitiesSelection}
                                    />
                                </Col>
                                <Col sm={4} className={`d-flex flex-column align-items-center`}>
                                    <h5 className={"text-white"}>Charisma</h5>
                                    <SelectBaseAbility stat={"cha"}
                                                       setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                                                       baseAbilitiesSelection={baseAbilitiesSelection}
                                    />
                                </Col>
                            </Row>
                        </div>

                        <Row className={`d-flex justify-content-center`}>
                            <h5 className={"text-white"}>Selected Proficiencies</h5>
                        </Row>
                        <Row>
                            {raceSelection && <SelectRaceProficiencies raceDetails={raceDetails}
                                                                       raceSelection={raceSelection}
                                                                       raceProfSelection={raceProfSelection}
                                                                       setRaceProfSelection={setRaceProfSelection}

                            />}

                        </Row>
                        <Row>
                            <Col sm={6} className={"text-white"}>
                                <h5>Saving Throws</h5>
                                </Col>
                            <Col sm={6} className={"text-white"}>
                                <h5>Senses</h5>
                                </Col>
                        </Row>
                        <Row>
                            <Col sm={6} className={"text-white"}>
                                <h5>Armor</h5>
                                </Col>
                            <Col sm={6} className={"text-white"}>
                                <h5>Weapons</h5>
                                </Col>
                        </Row>
                        <Row>
                            <Col sm={6} className={"text-white"}>
                                <h5>Tools</h5>
                                </Col>
                            <Col sm={6} className={"text-white"}>
                                <h5>Languages</h5>
                                </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <h5 className={"text-white"}>Skill Proficiencies</h5>
                        <SkillProficiencies
                            setClassProfSelection={setClassProfSelection}
                            classProfSelection={classProfSelection}
                        />
                    </Col>
                </Row>

            </Container>
        </div>

    );
}

export default Creator;