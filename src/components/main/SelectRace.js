import React, {useEffect, useState} from 'react';
import {RACES} from "../../lib/Api";
import InputDropdown from "../../lib/InputDropdown";
import {setListData, getListData} from "../../lib/GetArrayData";
import {SelectSubRace} from "./SelectSubRace";
import {Col} from "react-bootstrap";

export function SelectRace({setRaceSelection, raceSelection,
                               setSubRaceSelection, subRaceSelection}) {
    const [raceList, setRaceList] = useState([])
    const [raceStatus, setRaceStatus] = useState(false)
    const [raceSelected, setRaceSelected] = useState(false)
    //const [subRaceList, setSubRaceList] = useState([])

    useEffect(()=>{
        setListData(RACES,setRaceList,setRaceStatus)

    },[])

    return (
        <>
            <Col md={3}>
                <h5 className={"text-white"}>Race</h5>
                <InputDropdown list={raceList}
                               title={"Race"}
                               keyName={"name"}
                               status={raceStatus}
                               selection={raceSelection}
                               setSelection={setRaceSelection}/>
            </Col>

            {
                <Col md={4}>
                    <RenderSubRace setSubRaceSelection={setSubRaceSelection}
                                   subRaceSelection={subRaceSelection}
                                   raceSelection={raceSelection}/>
                </Col>

            }
        </>

    );
}
function RenderSubRace({raceSelection, setSubRaceSelection, subRaceSelection}){
    const [subRaceList, setSubRaceList] = useState({})
    const [subRaceListStatus, setSubRaceListStatus] = useState(false)

    useEffect(()=>{
        async function getSubRace(race){
            console.log(`pulling subraces of ${race}`)
            try{
                let url = `${RACES}/${race.toLowerCase()}`
                let data = await getListData(url,'subraces')
                setSubRaceList(prevState => ({...prevState, ...{[race]:data}}))
                setSubRaceListStatus(true)
                return {[race]: data}
            }catch (err){
                console.log(err)
            }
        }
        if (raceSelection){
            setSubRaceSelection(false)
            getSubRace(raceSelection)
        }
        return (
            setSubRaceListStatus(false)
        )

    },[raceSelection])
    function renderSubRaceIfNotEmpty(){
        if(subRaceList[raceSelection]){
            if(subRaceList[raceSelection].length >0 ){
                return (
                    <SelectSubRace setSubRaceSelection={setSubRaceSelection}
                                   subRaceSelection={subRaceSelection}
                                   subRaceList={subRaceList[raceSelection]}
                    />)
            }else{
                return (
                    <>
                        <h5>Subrace</h5>
                        <p>No Subrace</p>
                    </>
                    )
            }

        }
    }
    return (
        <>
            {
                (subRaceListStatus && renderSubRaceIfNotEmpty())
            }
        </>
    )
}
