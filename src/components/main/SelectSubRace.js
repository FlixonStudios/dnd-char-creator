import React, {useEffect, useState} from 'react';
import InputDropdown from "../../lib/InputDropdown";
import {setListData} from "../../lib/GetArrayData";
import {Col, Row} from "react-bootstrap";

export function SelectSubRace({setSubRaceSelection, subRaceSelection, subRaceList}) {

    const [subRaceStatus, setSubRaceStatus] = useState(false)

    useEffect(()=>{
        setSubRaceStatus(true)

    },[])

    return (
        <Col>
            <h5 className={"text-white"}>Subrace</h5>
            <InputDropdown list={subRaceList}
                           title={"SubRace"}
                           keyName={"name"}
                           status={subRaceStatus}
                           selection={subRaceSelection}
                           setSelection={setSubRaceSelection}/>
        </Col>

    );
}
export default SelectSubRace