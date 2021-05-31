import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";

export function SkillProficiencies({profSelection, levelProficiency=0, modifierValues}) {
    const skills = [
        ["acrobatics", false,'wis',0,"Acrobatics"],
        ["animal-handling", false,'cha',0,"Animal Handling"],
        ["arcana", false,'int',0,"Arcana"],
        ["athletics", false,'str',0,"Athletics"],
        ["deception",false,'cha',0,"Deception"],
        ["history",false,'int',0,"History"],
        ["insight",false,'wis',0,"Insight"],
        ["intimidation",false,'cha',0,"Intimidation"],
        ["investigation",false,'int',0,"Investigation"],
        ["medicine",false,'wis',0,"Medicine"],
        ["nature",false,'int',0,"Nature"],
        ["perception",false,'wis',0,"Perception"],
        ["performance",false,'cha',0,"Performance"],
        ["persuasion",false,'cha',0,"Persuasion"],
        ["religion",false,'int',0,"Religion"],
        ["sleight-of-hand",false,'dex',0,"Sleight of Hand"],
        ["stealth",false,'dex',0,"Stealth"],
        ["survival",false,'wis',0,"Survival"],
    ]
    const [skillProf, setSkillProf] = useState(skills)
    const [modifiers, setModifiers] = useState(modifierValues)
    const [newProf, setNewProf] = useState([])
    useEffect(()=>{
        //setSkillProf(skills)
        lookForSkillProf()
    },[profSelection])

    useEffect(()=>{
        updateSkillProf()
    },[newProf, levelProficiency,modifierValues])

    function lookForSkillProf(){
        let newSkillProf = []

        if(profSelection){
            for(let detail in profSelection){
                let skillProfs = profSelection[detail].filter((el)=>{
                    return(el.index.substr(0,6) === "skill-")
                })
                newSkillProf = [...newSkillProf,...skillProfs]
            }
            setNewProf(newSkillProf)
        }
    }

    function updateSkillProf(){
        let temp = [...skills]
        temp = updateSelectedSkillProf(temp)
        temp = updateAbilityModifierValue(temp)
        setSkillProf(temp)
    }

    function updateSelectedSkillProf(temp){
        if(newProf){
            let addedSkillProfArr = temp
            for (let i = 0;i < newProf.length; i++){
                let findIndex = skillProf.findIndex((el)=>{
                    let skillIndex = newProf[i].index.substring(6,newProf[i].index.length)
                    return(skillIndex===el[0])
                })
                if (findIndex >= 0){
                    addedSkillProfArr[findIndex][1] = true
                    addedSkillProfArr[findIndex][3] += levelProficiency
                }
            }
            return addedSkillProfArr
        }
    }

    function updateAbilityModifierValue(temp){
        let addedAbilityModifierProfArr = temp
        addedAbilityModifierProfArr.forEach((el)=>{
            if(modifierValues[el[2]]){
                el[3] += modifierValues[el[2]]
            }
        })
        return addedAbilityModifierProfArr
    }

    function renderProfIcon(isProficient){
        if(isProficient){
            return(
                <Button variant={"success"} size={"sm"}>Proficient</Button>
            )
        }else{
            return(<Button variant={"secondary"} size={"sm"}>Normal</Button>)
        }
    }

    return (
        <div>
            {
                skillProf.map((skill,index)=>(
                    <Row>
                        <Col xs={3} >{
                                renderProfIcon(skill[1])
                        }</Col>
                        <Col xs={2} className={"text-white text-center"}>{skill[2].toUpperCase()}</Col>
                        <Col xs={5} className={"text-white"}>{skill[4]}</Col>
                        <Col xs={2} className={"text-white text-center"}>{skill[3]>0?`+${skill[3]}`:skill[3]}</Col>
                    </Row>
                ))
            }

        </div>
    );
}

export default SkillProficiencies;