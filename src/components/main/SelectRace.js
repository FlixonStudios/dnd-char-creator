import React, {useEffect, useState} from 'react';
import {RACES} from "../../lib/Api";
import InputDropdown from "../../lib/InputDropdown";
import {getListData} from "../../lib/GetData";
import {SelectSubRace} from "./SelectSubRace";
import {Col, Row} from "react-bootstrap";
import MyToolTip from "../general/MyToolTip";

export function SelectRace({setRaceSelection, raceSelection,
                               setSubRaceSelection, subRaceSelection}) {
    const [raceList, setRaceList] = useState([])
    const [raceStatus, setRaceStatus] = useState(false)

    useEffect(()=>{
        //setListData(RACES,setRaceList,setRaceStatus)
        getListData(RACES,'results').then((res)=>{
            setRaceStatus(true)
            setRaceList(res)
        }).catch(err=>{
            console.log(err)
        })

    },[])

    return (
        <>
            <Col md={3}>
                <h5 className={"text-white"}>Race

                </h5>
                <Row className={"d-flex justify-content-center align-items-center"}>
                    <InputDropdown list={raceList}
                                   title={"Race"}
                                   keyName={"name"}
                                   status={raceStatus}
                                   selection={raceSelection}
                                   setSelection={setRaceSelection}/>
                    {raceSelection && <MyToolTip url={`${RACES}/${raceSelection.toLowerCase()}`} keyName={"alignment"} title={raceSelection}/>}
                </Row>

            </Col>

            {
                <Col md={3}>
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
                        <h5 className={"text-white"}>Subrace</h5>
                        <p className={"text-white"}>No Subrace</p>
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
