import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";

export function SkillProficiencies(props) {
    const skills = [
        ["acrobatics", false,'wis',0],
        ["animal-handling", false,'cha',0],
        ["arcana", false,'int',0],
        ["athletics", false,'str',0],
        ["deception",false,'cha',0],
        ["history",false,'int',0],
        ["insight",false,'wis',0],
        ["intimidation",false,'cha',0],
        ["investigation",false,'int',0],
        ["medicine",false,'wis',0],
        ["nature",false,'int',0],
        ["perception",false,'wis',0],
        ["performance",false,'cha',0],
        ["persuasion",false,'cha',0],
        ["religion",false,'int',0],
        ["sleight-of-hand",false,'dex',0],
        ["stealth",false,'dex',0],
        ["survival",false,'wis',0],
    ]
    const [skillProf, setSkillProf] = useState(skills)

    return (
        <div>
            {
                skillProf.map((skill,index)=>(
                    <Row>
                        <Col xs={2} className={"text-white"}>{skill[1]}</Col>
                        <Col xs={2} className={"text-white"}>{skill[2].toUpperCase()}</Col>
                        <Col xs={6} className={"text-white"}>{skill[0]}</Col>
                        <Col xs={2} className={"text-white"}>{skill[3]}</Col>
                    </Row>
                ))
            }

        </div>
    );
}

export default SkillProficiencies;