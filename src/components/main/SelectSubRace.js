import React, {useEffect, useState} from 'react';
import InputDropdown from "../../lib/InputDropdown";
import {Row} from "react-bootstrap";

export function SelectSubRace({setSubRaceSelection, subRaceSelection, subRaceList}) {

    const [subRaceStatus, setSubRaceStatus] = useState(false)

    useEffect(()=>{
        setSubRaceStatus(true)

    },[])

    return (
        <>
            <h5 className={"text-white"}>Subrace</h5>

            <InputDropdown list={subRaceList}
                           title={"SubRace"}
                           keyName={"name"}
                           status={subRaceStatus}
                           selection={subRaceSelection}
                           setSelection={setSubRaceSelection}/>


        </>

    );
}
export default SelectSubRace