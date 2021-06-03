import React, {useEffect, useState} from 'react';

export function AbilityModifier({stat, setModifierValues, abilityScore
                                }) {
    const [modifier, setModifier] = useState(0)

    const scoreTable = [
        [1,1,-5],
        [2,3,-4],
        [4,5,-3],
        [6,7,-2],
        [8,9,-1],
        [10,11,0],
        [12,13,1],
        [14,15,2],
        [16,17,3],
        [18,19,4],
        [20,21,5],
        [22,23,6],
        [24,25,7],
        [26,27,8],
        [28,29,9],
        [30,99,10]
    ]

    useEffect(()=>{
        if (stat!==''){
            calculateModifier()
        }
    },[abilityScore])


    function calculateModifier(){
        if(abilityScore){

            let findIndex = scoreTable.findIndex((el)=>{
                return(abilityScore >= el[0] && abilityScore <= el[1])
            })
            setModifier(scoreTable[findIndex][2])
            setModifierValues(prevState=>({...prevState, ...{[stat]:scoreTable[findIndex][2]}}))
        }else{

        }
    }

    return (
        <>
            <h4 className={"text-white"}>{modifier>0? `+${modifier}` : modifier}</h4>
        </>
    );
}

export default AbilityModifier;