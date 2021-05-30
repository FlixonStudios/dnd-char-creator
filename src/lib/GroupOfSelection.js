import React, {useEffect, useState} from 'react';
import {Button, Row, Container} from "react-bootstrap";
import SelectionBar from "./SelectionBar";

export function GroupOfSelection({list, numOfChoices,title ,tag="",setReturn}) {
    const [choicesSelected, setChoicesSelected] = useState([])
    const [confirmed, setConfirmed] = useState(false)

    useEffect(()=>{
        console.log(choicesSelected)
        //console.log(list)
    },[choicesSelected, confirmed])

    function lockDetails(){
        setReturn(prevState=>({...prevState,...{[tag]:choicesSelected}}))
        setConfirmed(true)
    }
    function reset(){
        setChoicesSelected([])
    }
    function renderChoices(){
        console.log(confirmed)
        if(!confirmed){
            return(
                <>
                    <h5 className={"text-white"}>{title}</h5>
                    {
                        list.map((choice, index) => (
                                <>
                                    <SelectionBar id={index}
                                                  numOfChoices={numOfChoices}
                                                  choice={choice}
                                                  setChoicesSelected={setChoicesSelected}
                                                  choicesSelected={choicesSelected}/>

                                </>
                            )
                        )
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
                    <Button variant={"success"} onClick={()=>setConfirmed(false)}>{tag.toUpperCase()}</Button>
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

function RenderChoices(){

}

export default GroupOfSelection;