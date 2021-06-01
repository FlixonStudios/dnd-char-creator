import React, {useEffect, useState} from 'react';
import GroupOfSelection from "../../lib/GroupOfSelection";
import {hasKey} from "../../lib/Func";

function SelectTraits({raceDetails, raceSelection,traitSelection, setTraitSelection}) {
    const [startTraits, setStartTraits] = useState([])
    const [startTraitsOptions, setStartTraitsOptions] = useState([])
    const [numOfChoices, setNumOfChoices] = useState(1)

    let startTraitKey = 'traits'
    let optionTraitKey = 'trait_options'
    let optionFromKey = 'from'
    let optionChooseKey = 'choose'

    useEffect(()=>{

        setStartTraits([])
        setStartTraitsOptions([])

        if(hasKey(raceDetails,startTraitKey)){
            setStartTraits(raceDetails[startTraitKey])
        }

        if(hasKey(raceDetails,optionTraitKey)){

            if(hasKey(raceDetails[optionTraitKey],optionFromKey)){
                setNumOfChoices(raceDetails[optionTraitKey][optionChooseKey])

                setStartTraitsOptions(raceDetails[optionTraitKey][optionFromKey])
            }
        }
    },[raceDetails, raceSelection])

    function renderStartTraitOptions(){
        if(startTraits.length > 0 || startTraitsOptions.length>0)
        {
            return (
                <>
                    <GroupOfSelection list={startTraitsOptions}
                                      tagDisplay={"Race: Traits"}
                                      numOfChoices={numOfChoices}
                                      defaultChoices={startTraits}
                                      title={"Please Select Traits"}
                                      tag={"race"}
                                      setReturn={setTraitSelection}
                    />
                </>
            )
        }
    }

    return (
        <div>
            {
                renderStartTraitOptions()
            }
        </div>
    );
}

export default SelectTraits;