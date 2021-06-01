import React, {useEffect, useState} from 'react';
import GroupOfSelection from "../../lib/GroupOfSelection";
import {hasKey} from "../../lib/Func";

function SelectClassProficiencies({classDetails,classSelection, profSelection, setProfSelection}) {
    const [skillProf, setSkillProf] = useState([])
    const [numOfChoices, setNumOfChoices] = useState(1)
    const [prof, setProf] = useState([])
    const [savingThrow, setSavingThrow] = useState([])
    const [spells, setSpells] = useState([])
    const [hitDice, setHitDice] = useState(0)

    let profKey = 'proficiencies'
    let skillProfKey = 'proficiency_choices'
    let optionFromKey = 'from'
    let optionChooseKey = 'choose'

    useEffect(()=>{
        getClassSkillProficiencies()
    },[classSelection, classDetails])

    function getClassSkillProficiencies(){
        if(hasKey(classDetails,profKey)){
            setProf(classDetails[profKey])
        }

        if(hasKey(classDetails,skillProfKey)){

            if(hasKey(classDetails[skillProfKey][0],optionFromKey)){
                setNumOfChoices(classDetails[skillProfKey][0][optionChooseKey])
                setSkillProf(classDetails[skillProfKey][0][optionFromKey])

            }
        }
    }

    return (
        <>
            <GroupOfSelection list={skillProf}
                              tagDisplay={"Class: Proficiencies"}
                              numOfChoices={numOfChoices}
                              defaultChoices={prof}
                              title={"Please Select Proficiencies for your Class"}
                              tag={"class"}
                              setReturn={setProfSelection}
                              />
        </>
    );
}

export default SelectClassProficiencies;