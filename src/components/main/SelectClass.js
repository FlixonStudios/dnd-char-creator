import React, {useEffect, useState} from 'react';
import {CLASSES, RACES} from "../../lib/Api";
import InputDropdown from "../../lib/InputDropdown";
import {getListData} from "../../lib/GetData";
import MyToolTip from "../general/MyToolTip";
import {Row} from "react-bootstrap";

export function SelectClass({setClassSelection, classSelection}) {
    const [classList, setClassList] = useState([])
    const [classStatus, setClassStatus] = useState(false)

    useEffect(()=>{
        getListData(CLASSES, 'results').then((res)=>{
                setClassStatus(true)
                setClassList(res)
            }
        ).catch((err)=>{
            console.log(err)
            }
        )
    },[])

    return (
        <>
            <h5 className={"text-white"}>Class</h5>

                <InputDropdown list={classList}
                               title={"Class"}
                               keyName={"name"}
                               status={classStatus}
                               selection={classSelection}
                               setSelection={setClassSelection}/>



        </>

    );
}
export default SelectClass