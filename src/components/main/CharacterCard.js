import React, {useEffect} from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import DisplayData from "./DisplayData";



export function CharacterCard({character}) {

    return (
        <>
         <Row className={"border-light"}>
             <Col md={3}>
                 <Image src={character["img"]}
                        className={"rounded img-thumbnail"}
                        style={{height:"230px",objectFit:"cover", objectPosition:"center"}}
                        fluid/>
             </Col>
             <Col md={9}>
                 <Row>
                     <h4 className={"text-white"}>{`${character["name"]}`}</h4>
                 </Row>
                 <Row>
                     <Col name={"core-stats"} md={6}>
                         <Row>
                             <h5 className={"text-white mr-2"}>{`Level ${character["level"]}`}</h5>
                             <h5 className={"text-white mr-2"}>{`${character["race"]}`}</h5>
                             <h5 className={"text-white mr-2"}>{`${character['class']}`}</h5>
                         </Row>
                         <Row>
                             <Col md={2}>
                                 <Row className={"d-flex justify-content-between"}>
                                     <p className={"text-white"}>HP</p>
                                     <p className={"text-white"}>{character['hit-points']}</p>

                                 </Row>
                             </Col>
                             <Col md={1}>
                                 <Row className={"d-flex justify-content-center"}>
                                     <p className={"text-white"}>|</p>
                                 </Row>
                             </Col>
                             <Col md={2}>
                                 <Row className={"d-flex justify-content-between"}>
                                     <p className={"text-white"}>AC</p>
                                     <p className={"text-white"}>{character['armor-class']}</p>
                                 </Row>
                             </Col>
                             <Col md={1}>
                                 <Row className={"d-flex justify-content-center"}>
                                     <p className={"text-white"}>|</p>
                                 </Row>
                             </Col>
                             <Col md={2}>
                                 <Row className={"d-flex justify-content-between"}>
                                     <p className={"text-white"}>Init</p>
                                     <p className={"text-white"}>{character['armor-class']}</p>
                                 </Row>
                             </Col>
                             <Col md={1}>
                                 <Row className={"d-flex justify-content-center"}>
                                     <p className={"text-white"}>|</p>
                                 </Row>
                             </Col>
                             <Col md={2}>
                                 <Row className={"d-flex justify-content-between"}>
                                     <p className={"text-white"}>Prof</p>
                                     <p className={"text-white"}>{character['proficiency']}</p>
                                     <p className={"text-white"}></p>
                                 </Row>
                             </Col>

                         </Row>
                     </Col>
                     <Col name={"ability-modifiers"} md={4}>
                         <Row>
                             <Col md={3}>
                                 <h6 className={"text-white mr-2"}>{`STR`}</h6>
                                 <h6 className={"text-white mr-2"}>{`DEX`}</h6>
                                 <h6 className={"text-white mr-2"}>{`CON`}</h6>
                             </Col>
                             <Col md={3}>
                                 <h6 className={"text-white mr-2 d-flex align-items-center"}>
                                     {`${character['ability-modifiers']['str']}`}
                                     <small className={"text-muted ml-1"}>{`(${character['ability-scores']['str']})`}</small>
                                 </h6>
                                 <h6 className={"text-white mr-2"}>
                                     {`${character['ability-modifiers']['dex']}`}
                                     <small className={"text-muted ml-1"}>{`(${character['ability-scores']['dex']})`}</small>
                                 </h6>
                                 <h6 className={"text-white mr-2 mr-2 d-flex align-items-center"}>
                                     {`${character['ability-modifiers']['con']}`}
                                     <small className={"text-muted ml-1"}>{`(${character['ability-scores']['con']})`}</small>
                                 </h6>
                             </Col>
                             <Col md={3}>
                                 <h6 className={"text-white mr-2"}>{`INT`}</h6>
                                 <h6 className={"text-white mr-2"}>{`WIS`}</h6>
                                 <h6 className={"text-white mr-2"}>{`CHA`}</h6>
                             </Col>
                             <Col md={3}>
                                 <h6 className={"text-white mr-2 mr-2 d-flex align-items-center"}>
                                     {`${character['ability-modifiers']['int']}`}
                                     <small className={"text-muted ml-1"}>{`(${character['ability-scores']['int']})`}</small>
                                 </h6>
                                 <h6 className={"text-white mr-2 mr-2 d-flex align-items-center"}>
                                     {`${character['ability-modifiers']['wis']}`}
                                     <small className={"text-muted ml-1"}>{`(${character['ability-scores']['wis']})`}</small>
                                 </h6>
                                 <h6 className={"text-white mr-2 mr-2 d-flex align-items-center"}>
                                     {`${character['ability-modifiers']['cha']}`}
                                     <small className={"text-muted ml-1"}>{`(${character['ability-scores']['cha']})`}</small>
                                 </h6>
                             </Col>
                         </Row>
                     </Col>
                 </Row>
                 <Row className={"text-white d-flex small"}>
                     <h6 className={"text-white mr-2"}>Traits:</h6>
                     <DisplayData list={character['traits']} keyName={"name"}/>
                 </Row>
                 <Row className={"text-white d-flex small"}>
                     <h6 className={"text-white  mr-2"}>Proficiencies:</h6>
                     <DisplayData list={[
                         ...character['ability-bonus'].map((el)=>({...el,...{["name"]:`${el["name"]} Bonus`}})),
                         ...character['skill-proficiencies'],
                         ...character['armor-proficiencies'], ...character['weapon-proficiencies'],
                         ...character['tool-proficiencies'], ...character['languages']
                     ]} keyName={"name"}/>


                 </Row>
             </Col>


         </Row>
        </>
    );
}

export default CharacterCard;