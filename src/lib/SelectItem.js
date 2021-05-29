import React, {useEffect, useState} from 'react';
import InputDropdown from "../../lib/InputDropdown";
import {setListData} from "../../lib/GetArrayData";

export function SelectRace({setItemSelection, ItemList, keyName}) {
    const [raceList, setItemList] = useState([])
    const [raceStatus, setItemStatus] = useState(false)

    useEffect(()=>{
        setListData(RACES,setItemList,setItemStatus)

    },[])

    function checkForSubrace(){
        if(raceStatus){

        }
    }

    return (
        <InputDropdown list={raceList}
                       title={"Item"}
                       keyName={keyName}
                       status={raceStatus}
                       setSelection={setItemSelection}/>
    );
}
export default SelectItem