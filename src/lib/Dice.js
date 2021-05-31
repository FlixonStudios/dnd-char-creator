import React, {useEffect, useRef, useState} from 'react';
import {Button} from "react-bootstrap";

export function Dice({setBase, roll, setRoll}) {
    const diceImages = {
        "1": "https://media.geeksforgeeks.org/wp-content/uploads/20200508141000/dice1.png",
        "2": "https://media.geeksforgeeks.org/wp-content/uploads/20200508141001/dice2.png",
        "3": "https://media.geeksforgeeks.org/wp-content/uploads/20200508141003/dice3.png",
        "4": "https://media.geeksforgeeks.org/wp-content/uploads/20200508141004/dice4.png",
        "5": "https://media.geeksforgeeks.org/wp-content/uploads/20200508141005/dice5.png",
        "6": "https://media.geeksforgeeks.org/wp-content/uploads/20200508141006/dice6.png",
    }
    const [active,setActive] = useState(true)
    const myRef = useRef()

    useEffect(()=>{
        checkForGroupRoll()
    },[roll])

    function checkForGroupRoll(){
        if (roll){
            myRef.current.click()
            setRoll(false)
        }
    }

    function rollDice(e) {
        if(active){
            let diceNumber = Math.floor(Math.random() * 6) + 1
            e.target.classList.add("dice")
            setTimeout( ()=>{
                e.target.classList.remove("dice")
                setBase(prevValue => prevValue + diceNumber)
                e.target.classList.add("disabled")
                setActive(false)
            },2000)
            e.target.style.backgroundImage = `url(${diceImages[diceNumber.toString()]})`
        }
    }
    return (
        <div>
            <Button type={"button"} className={`btn btn-dark`}
                    ref={myRef}
                    style={{
                            height: "26px", width: "26px",
                            backgroundImage: `url(${diceImages["1"]})`,
                            backgroundSize: `cover`}}
                    onClick={(e)=>rollDice(e)}
                    >
            </Button>

        </div>
    );
}

export default Dice;