import React, {useEffect, useState} from 'react';
import {hasKey} from "../../lib/Func";
import GroupOfSelection from "../../lib/GroupOfSelection";


function SelectRaceProficiencies({raceDetails, raceSelection,raceProfSelection,setRaceProfSelection}) {
    const [startProf, setStartProf] = useState([])
    const [startProfOptions, setStartProfOptions] = useState([])
    const [numOfChoices, setNumOfChoices] = useState(1)

    let race = raceSelection?.toLowerCase()

    useEffect(()=>{
        setStartProf([])
        setStartProfOptions([])

        if(hasKey(raceDetails,'starting_proficiencies')){
            setStartProf(raceDetails['starting_proficiencies'])
        }

        if(hasKey(raceDetails,'starting_proficiency_options')){
            if(raceDetails['starting_proficiency_options'],'from'){
                setNumOfChoices(raceDetails['starting_proficiency_options']['choose'])
                setStartProfOptions(raceDetails['starting_proficiency_options']['from'])
            }
        }
    },[raceDetails, setStartProf, setStartProfOptions])

    function renderStartProfOptions(){
        if (startProfOptions.length>0){
            return(
                <>

                    <GroupOfSelection list={startProfOptions}
                                      numOfChoices={numOfChoices}
                                      title={"Please Select Proficiencies for your Race"}
                                      tag={"race"}
                                      setReturn={setRaceProfSelection}/>
                </>
            )
        }


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