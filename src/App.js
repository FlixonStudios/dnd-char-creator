import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap";
import HomeNav from "./components/general/HomeNav";
import Navigation from "./components/general/Navigation";
import Creator from "./components/main/Creator";
import Home from "./components/main/Home";

function App() {

    const baseAbilities = {
        "str": false,
        "dex": false,
        "con": false,
        "int": false,
        "wis": false,
        "cha": false
    }

    const [classSelection, setClassSelection] = useState(false)
    const [raceSelection, setRaceSelection] = useState(false)
    const [subRaceSelection, setSubRaceSelection] = useState(false)
    const [levelSelection, setLevelSelection] = useState(false)
    const [baseAbilitiesSelection, setBaseAbilitiesSelection] = useState(baseAbilities)
    const [classProfSelection, setClassProfSelection] = useState(false)

    //console.log(classSelection)
    //console.log(raceSelection)
    //console.log(subRaceSelection)
    //console.log(levelSelection)
    //console.log(baseAbilitiesSelection)

  return (
    <BrowserRouter>
        <div style={{backgroundColor:`rgba(71, 20, 20, 1.0)`}}>
            <Container>
                <HomeNav/>
                <Navigation/>
            </Container>
            <Switch>
                <Route path={"/"} exact>
                    <Home />
                </Route>
                <Route path={"/creator"}>
                    <Creator setClassSelection={setClassSelection}
                             classSelection={classSelection}
                             setLevelSelection={setLevelSelection}
                             levelSelection={levelSelection}
                             setRaceSelection={setRaceSelection}
                             raceSelection={raceSelection}
                             setSubRaceSelection={setSubRaceSelection}
                             subRaceSelection={subRaceSelection}
                             baseAbilitiesSelection={baseAbilitiesSelection}
                             setBaseAbilitiesSelection={setBaseAbilitiesSelection}
                             classProfSelection={classProfSelection}
                             setClassProfSelection={setClassProfSelection}
                    />
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
