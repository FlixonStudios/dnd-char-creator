import React, {useEffect, useState} from 'react';
import {Button, Row, Container} from "react-bootstrap";
import SelectionBar from "./SelectionBar";
import { v4 as uuidv4 } from 'uuid';

export function GroupOfSelection({list, numOfChoices, defaultChoices, selection,
                                     tagDisplay="" , title="" ,tag="",setReturn}) {
    const [choicesSelected, setChoicesSelected] = useState([])
    const [confirmed, setConfirmed] = useState(false)
    const [choiceId, setChoiceId] = useState([])

    useEffect(()=>{
        setChoicesSelected([])
        setReturn(prevState=>({...prevState,...{[tag]:[]}}))
    },[list,setReturn,tag])

    function lockDetails(){
        let temp = [...defaultChoices, ...choicesSelected]
        setReturn(prevState=>({...prevState,...{[tag]:temp}}))
        setConfirmed(true)
    }
    function reset(){
        setChoicesSelected([])
    }

    function renderChoices(){
        if(!confirmed){
            return(
                <>
                    { (title !=="") ? <h5 className={"text-white"}>{title}</h5> : <></>}
                    {defaultChoices.length > 0 ?
                        defaultChoices.map((choice, index)=>(
                            <>
                                <SelectionBar numOfChoices={0}
                                              key={uuidv4()}
                                              id={`${choice.index}-${index}-${numOfChoices}`}
                                              choice={choice}
                                              setChoicesSelected={setChoicesSelected}
                                              choicesSelected={choicesSelected}
                                              choiceId={choiceId}
                                              setChoiceId={setChoiceId}
                                />
                            </>
                        )) : <></>
                    }
                    {list.length > 0 ?
                        list.map((choice, index) => (
                                <>
                                    <SelectionBar numOfChoices={numOfChoices}
                                                  key={`${uuidv4()}-1`}
                                                  id={`${choice.index}-${index}-${numOfChoices}`}
                                                  choice={choice}
                                                  setChoicesSelected={setChoicesSelected}
                                                  choicesSelected={choicesSelected}
                                                  choiceId={choiceId}
                                                  setChoiceId={setChoiceId}
                                    />

                                </>
                            )
                        ) : <></>
                    }
                    <Row className={"d-flex justify-content-end"}>
                        <Button variant={"success"} className={"m-1"} type={"submit"}
                                onClick={lockDetails}>
                            Confirm
                        </Button>
                        <Button variant={"danger"} className={"m-1"} type={"submit"}
                                onClick={reset}>
                            Reset
                        </Button>
                    </Row>
                </>
            )
        }else{
            return(
                <>
                    <Button variant={"success"} onClick={()=>setConfirmed(false)}>
                        {tagDisplay.toUpperCase()}
                    </Button>
                </>
            )
        }
    }

    return (
        <Container>
            {
                renderChoices()
            }
        </Container>
    );
}


export default GroupOfSelection;