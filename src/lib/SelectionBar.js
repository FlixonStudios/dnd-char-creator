import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";

export function SelectionBar({id, numOfChoices, choice, setChoicesSelected, choicesSelected}) {
    const[select, setSelect] = useState({})

    useEffect(()=>{
        console.log(choice)
    },[choicesSelected])

    function changeToSelected(e){
        if (e.target.innerText ==="Select"){
            addSelected(e)
            e.target.innerText = "Selected"
            e.target.classList.remove("btn-primary")
            e.target.classList.add("btn-success")
        }else if (e.target.innerText ==="Selected") {
            removeSelected(e)
            e.target.innerText = "Select"
            e.target.classList.remove("btn-success")
            e.target.classList.add("btn-primary")
        }
    }

    function addSelected(e){
        let temp = {...choice}
        setChoicesSelected(prevState=>([...prevState, temp]))
    }

    function removeSelected(e){
        let filtered = choicesSelected.filter((el)=>{
            return(el.index !== choice.index)
        })
        setChoicesSelected(filtered)
    }
    function checkChoiceLimit(){
        let findIndex = choicesSelected.findIndex((el)=>(el.index===choice.index))
        if (choicesSelected.length >= numOfChoices && findIndex < 0){
            return (
                <Button variant={"primary"} type={"button"} value={choice}
                        disabled>
                    Limit Reached
                </Button>
            )
        }else if(findIndex >=0){
            return(
                <Button variant={"success"} type={"button"} value={choice}
                        onClick={e=>changeToSelected(e)}>
                    Selected
                </Button>
            )
        }else{
            return(
                <Button variant={"primary"} type={"button"} value={choice}
                        onClick={e=>changeToSelected(e)}>
                    Select
                </Button>
            )
        }
    }

    return (
        <Row>
            <Col>
                <p className={`text-white`}>{choice.name}</p>
            </Col>
            <Col>
                {
                    checkChoiceLimit()
                }
            </Col>
        </Row>
    );
}

export default SelectionBar;