import React, {useEffect, useState} from 'react';

export function LevelProficiency({levelSelection, setLevelProficiency}) {
    const profTable = [
        [1,2],[2,2],[3,2],[4,2],
        [5,3],[6,3],[7,3],[8,3],
        [9,4],[10,4],[11,4],[12,4],
        [13,5],[14,5],[15,5],[16,5],
        [17,6],[18,6],[19,6],[20,6]
    ]
    const [currentProficiency, setCurrentProficiency] = useState(0)

    useEffect(()=>{
        getLevelProficiency()
    },[levelSelection])

    function getLevelProficiency(){
        if (levelSelection){
            let currentLevel = levelSelection
            if(currentLevel>20) {
                currentLevel = 20
            }
            let findIndex = profTable.findIndex((el)=>{
                return(el[0]===currentLevel)
            })

            let proficiency = profTable[findIndex][1]
            setCurrentProficiency(proficiency)
            setLevelProficiency(proficiency)
        }
    }

    return (
        <>
            <h5 className={"text-white"}>
                {currentProficiency>0?`+${currentProficiency}`: currentProficiency}
            </h5>
        </>
    );
}

export default LevelProficiency;