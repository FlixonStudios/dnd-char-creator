import React, {useEffect, useState} from 'react';
import InputDropdown from "../../lib/InputDropdown";

export function SelectLevel({setLevelSelection, levelSelection}) {
    const [levelList, setLevelList] = useState([])
    const [levelStatus, setLevelStatus] = useState(false)

    let arr = []
    for (let i = 1; i<=20;i++){
        arr.push({"name":i})
    }

    useEffect(()=>{
        setLevelList(arr)
        setLevelStatus(true)

    },[])

    return (
        <>
            <h5 className={"text-white"}>Level</h5>
            <InputDropdown list={levelList}
                           title={"Level"}
                           keyName={"name"}
                           status={levelStatus}
                           selection={levelSelection}
                           setSelection={setLevelSelection}/>
        </>

    );
}
export default SelectLevel