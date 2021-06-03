import React, {useEffect, useState} from 'react';
import bg_img from "../../img/dnd-home-img.jpg";
import {Col, Container, Row} from "react-bootstrap";
import {getListData} from "../../lib/GetData";
import {RULE_SECTIONS} from "../../lib/Api";
import {hasKey} from "../../lib/Func";

export function Home(props) {

    const DND_OVERVIEW = 'The core of D&D is storytelling. You and your friends tell a story together, guiding your heroes through quests for treasure, battles with deadly foes, daring rescues, courtly intrigue, and much more. You can also explore the world of Dungeons & Dragons through any of the novels written by its fantasy authors, as well as engaging board games and immersive video games. All of these stories are part of D&D.'
    const DND_RESULTS = 'Describing the results often leads to another decision point, which brings the flow of the game right back to step 1. This pattern holds whether the adventurers are cautiously exploring a ruin, talking to a devious prince, or locked in mortal combat against a dragon.'
    const [environment, setEnvironment] = useState([])
    const environmentUrl = 'the-environment'

    useEffect(()=>{
        getListData(`${RULE_SECTIONS}/${environmentUrl}`,'desc').then((res)=>{
            parseEnvironmentData(res)
        }).catch(err=>console.log(err))
    },[])

    function parseEnvironmentData(str){
        let temp = str.split('\n\n')
        let re = /## [\w ]+/g
        let key = ''
        let obj = {}
        temp.forEach((el)=>{
            if (el.match(re)!==null){
                key = el.match(re)[0].substr(3,el.match(re)[0].length-3)
                key = key.toLowerCase().split(" ").join("-")
                //console.log(key)
            }else{
                obj[key]= el
            }
        })
        setEnvironment(obj)
    }

    return (
        <div style={{
            backgroundImage:`url(${bg_img})`,
            backgroundSize:`cover`,
            backgroundPosition:`center`,
            height: "1440px",
        }}>
            <Container className={""} style={{backgroundColor:`rgba(0,0,0,0.7)`}}>
                <Row>
                    <Col md={12}>
                        <h1 className={"text-white text-center"}>Begin YOUR Legend</h1>
                    </Col>

                </Row>
                <div className={"mt-5 mb-5"}>
                    <Row>
                        <Col md={12}>
                            <h2 className={"text-white text-center"}>D&D Overview</h2>
                        </Col>

                    </Row>
                    <Row>
                        <Col md={12}>
                            <p className={"text-white text-center"}>{DND_OVERVIEW}</p>
                        </Col>
                    </Row>
                </div>
                <div>
                    <div className={"mb-3"}>
                        <Row>
                            <Col md={12}>
                                <h2 className={"text-white text-center"}>How to Play</h2>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col md={3} >
                                <h6 className={"text-white text-center"}>
                                    1. The DM Describes the Environment
                                </h6>
                            </Col>
                            <Col>
                                <h6 className={"text-white text-center"}>-></h6>
                            </Col>
                            <Col md={3} >
                                <h6 className={"text-white text-center"}>
                                    2. Players Describe Desired Actions
                                </h6>
                            </Col>
                            <Col>
                                <h6 className={"text-white text-center"}>-></h6>
                            </Col>
                            <Col md={3} >
                                <h6 className={"text-white text-center"}>
                                    3. The DM Narrates the Results
                                </h6>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row className={"mt-5 mb-2"}>
                            <Col md={12}>
                                <h2 className={"text-white text-center"}>The Environment</h2>
                            </Col>
                            <Col md={12}>
                                <p className={"text-white text-center"}>{
                                    hasKey(environment,'the-environment') ? environment['the-environment'] : "Loading..."
                                }</p>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col md={12}>
                                <h2 className={"text-white text-center"}>Your Actions</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <h4 className={"text-white text-center"}>Combat</h4>
                            </Col>
                            <Col md={6}>
                                <h4 className={"text-white text-center"}>Resting</h4>
                            </Col>
                            <Col md={6}>
                                <h4 className={"text-white text-center"}>Movement</h4>
                            </Col>
                            <Col md={6}>
                                <h4 className={"text-white text-center"}>Object Interaction</h4>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col md={12}>
                                <h2 className={"text-white text-center"}>Results</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <p className={"text-white text-center"}>{DND_RESULTS}</p>
                            </Col>
                        </Row>
                    </div>
                </div>



            </Container>
        </div>
    );
}

export default Home;