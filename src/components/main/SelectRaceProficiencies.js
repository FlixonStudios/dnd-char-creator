import React, {useEffect, useState} from 'react';
import {hasKey} from "../../lib/Func";
import GroupOfSelection from "../../lib/GroupOfSelection";


function SelectRaceProficiencies({raceDetails, raceSelection,profSelection,setProfSelection}) {
    const [startProf, setStartProf] = useState([])
    const [startProfOptions, setStartProfOptions] = useState([])
    const [numOfChoices, setNumOfChoices] = useState(1)

    let startProfKey = 'starting_proficiencies'
    let optionProfKey = 'starting_proficiency_options'

    useEffect(()=>{
        setStartProf([])
        setStartProfOptions([])

        if(hasKey(raceDetails,startProfKey)){
            setStartProf(raceDetails[startProfKey])
        }

        if(hasKey(raceDetails,optionProfKey)){
            if(hasKey(raceDetails[optionProfKey],'from')){
                setNumOfChoices(raceDetails[optionProfKey]['choose'])
                setStartProfOptions(raceDetails[optionProfKey]['from'])
            }
        }
    },[raceSelection, raceDetails])

    function renderStartProfOptions(){
            if(startProf.length > 0 || startProfOptions.length > 0){
                return(
                    <>
                        <GroupOfSelection list={startProfOptions}
                                          tagDisplay={"Race: Proficiencies"}
                                          numOfChoices={numOfChoices}
                                          defaultChoices={startProf}
                                          title={"Please Select Proficiencies for your Race"}
                                          tag={"race"}
                                          setReturn={setProfSelection}/>
                    </>
                )
            }
    }

    return (
        <>
            {
                renderStartProfOptions()
            }
        </>
    );
}

export default SelectRaceProficiencies