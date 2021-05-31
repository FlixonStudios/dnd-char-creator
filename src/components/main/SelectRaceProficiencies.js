import React, {useEffect, useState} from 'react';
import {hasKey} from "../../lib/Func";
import GroupOfSelection from "../../lib/GroupOfSelection";


function SelectRaceProficiencies({raceDetails, raceSelection,profSelection,setProfSelection}) {
    const [startProf, setStartProf] = useState([])
    const [startProfOptions, setStartProfOptions] = useState([])
    const [numOfChoices, setNumOfChoices] = useState(1)

    useEffect(()=>{
        console.log(profSelection)
        setStartProf([])
        setStartProfOptions([])

        if(hasKey(raceDetails,'starting_proficiencies')){
            setStartProf(raceDetails['starting_proficiencies'])
        }

        if(hasKey(raceDetails,'starting_proficiency_options')){
            if(hasKey(raceDetails['starting_proficiency_options'],'from')){
                setNumOfChoices(raceDetails['starting_proficiency_options']['choose'])
                setStartProfOptions(raceDetails['starting_proficiency_options']['from'])
            }
        }
    },[raceSelection, raceDetails])

    function renderStartProfOptions(){

            return(
                <>

                    <GroupOfSelection list={startProfOptions}
                                      numOfChoices={numOfChoices}
                                      defaultChoices={startProf}
                                      title={"Please Select Proficiencies for your Race"}
                                      tag={"race"}
                                      setReturn={setProfSelection}/>
                </>
            )



    }

    return (
        <div>

            {
                renderStartProfOptions()
            }
        </div>
    );
}

export default SelectRaceProficiencies