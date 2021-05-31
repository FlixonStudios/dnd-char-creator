import React, {useEffect, useState} from 'react';
import {Button, Row} from "react-bootstrap";
import Dice from "../../lib/Dice";

export function SelectBaseAbility({stat, setBaseAbilitiesSelection,baseAbilitiesSelection}) {
    const [base, setBase] = useState(0)
    const [roll, setRoll] = useState(false)
    const [active, setActive] = useState(true)

    useEffect(()=>{
        setBaseAbilitiesSelection(prevState=>({...prevState,...{[stat]:base}}))
    },[base])

    function triggerRoll(e){
        if (active){
            setRoll(!roll)
            e.target.classList.add("disabled")
            setActive(false)
        }

    }

    return (
        <>
            <h6 className={"text-white"}>{base}</h6>
            <Row>
                <Dice setBase={setBase} roll={roll} setRoll={setRoll}/>
                <Dice setBase={setBase} roll={roll} setRoll={setRoll}/>
                <Dice setBase={setBase} roll={roll} setRoll={setRoll}/>
            </Row>
            <Row>
                <Button type={"button"} className={"btn btn-dark btn-sm m-1"}
                        onClick={(e)=>triggerRoll(e)}
                >
                    Roll
                </Button>
            </Row>
        </>
    );
}

export default SelectBaseAbility;