import React, {useState} from "react";
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
    const modifiers = {
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
    const [raceAbilityBonus, setRaceAbilityBonus] = useState(modifiers)
    const [levelSelection, setLevelSelection] = useState(false)
    const [levelProficiency, setLevelProficiency] = useState(0)
    const [baseAbilitiesSelection, setBaseAbilitiesSelection] = useState(baseAbilities)
    const [profSelection, setProfSelection] = useState(false)
    const [classProfSelection, setClassProfSelection] = useState(false)
    const [modifierValues, setModifierValues] =useState(modifiers)

    //console.log(modifierValues)

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
                             profSelection={profSelection}
                             setProfSelection={setProfSelection}
                             modifierValues={modifierValues}
                             setModifierValues={setModifierValues}
                             levelProficiency={levelProficiency}
                             setLevelProficiency={setLevelProficiency}
                             raceAbilityBonus={raceAbilityBonus}
                             setRaceAbilityBonus={setRaceAbilityBonus}
                    />
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
