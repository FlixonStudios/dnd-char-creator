import React from 'react';
import CharacterCard from "../utilities/CharacterCard";
import {Container} from "react-bootstrap";
import char_bg from "../../img/char_select_bg.jpg"


export function Characters({characterList}) {
    console.log(characterList)
    return (
        <div style={{
            backgroundImage:`url(${char_bg})`,
            backgroundSize:`cover`,
            backgroundPosition:`center`,
            height: "1440px",
        }}>
        <Container style={{backgroundColor:`rgba(0,0,0,0.7)`}}>
            {
                characterList.map((char)=>(
                    <CharacterCard character={char} />
                ))
            }
        </Container>
        </div>
    );
}

export default Characters;