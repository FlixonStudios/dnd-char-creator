import React, {isValidElement, useEffect, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap";
import HomeNav from "./components/general/HomeNav";
import Navigation from "./components/general/Navigation";
import Creator from "./components/main/Creator";
import Home from "./components/main/Home";
import {hasKey} from "./lib/Func";

function App() {

    const modifiers = {
        "str": false,
        "dex": false,
        "con": false,
        "int": false,
        "wis": false,
        "cha": false
    }

    const charData = {
        "str-val": 0,
        "dex-val": 0,
        "con-val": 0,
        "int-val": 0,
        "wis-val": 0,
        "cha-val": 0,
        "ability-bonus":[],
        "traits":[],
        "saving-throw-bonus":[],
        "skill-proficiencies": [],
        "weapon-proficiencies": [],
        "armor-proficiencies":[],
        "tool-proficiencies":[],
        "languages":[],
        "uncategorised":[]
    }

    const armorProficiencies = [
        "all-armor","studded-leather","chain-mail","chain-shirt","half-plate",
        "heavy-armor","hide","leather","light-armor","medium-armor","padded","plate",
        "ring-mail","scale-mail","splint", "shields"
    ]
    const weaponProficiencies = [
        "blowguns", "crossbow-hands","crossbow-heavys","longbows", "nets","battleaxes","flails","glaives",
        "greataxes","greatswords","halberds","lances","longswords","mauls","morningstars","pikes","rapiers",
        "scimitars","shortswords","tridents","war-picks","warhammers","whips","crossbow-lights","darts",
        "shortbows","slings","clubs","daggers","greatclubs","handaxes","javelins","light-hammers","maces",
        "quarterstaffs","sickles", "spears","simple-weapons","martial-weapons"
    ]

    const [proficiencyData, setProficiencyData] = useState([])
    const [character, setCharacter] = useState({})
    const [classSelection, setClassSelection] = useState(false)
    const [raceSelection, setRaceSelection] = useState(false)
    const [subRaceSelection, setSubRaceSelection] = useState(false)
    const [raceAbilityBonus, setRaceAbilityBonus] = useState(false)
    const [baseAbilitiesSelection, setBaseAbilitiesSelection] = useState(modifiers)
    const [levelSelection, setLevelSelection] = useState(false)
    const [levelProficiency, setLevelProficiency] = useState(0)
    const [profSelection, setProfSelection] = useState(false)
    const [modifierValues, setModifierValues] = useState(modifiers)
    const [traitSelection, setTraitSelection] = useState(false)
    const [savingThrows, setSavingThrows] = useState(modifiers)

    //console.log(baseAbilitiesSelection)
    //console.log(modifierValues)
    //console.log(profSelection)
    console.log(traitSelection)

    useEffect(()=>{
        dataController()

        //console.log(character)
    },[])

    useEffect(()=>{
        proficiencyHandler(armorProficiencies,'armor-proficiencies')
        proficiencyHandler(weaponProficiencies,'weapon-proficiencies')
        proficiencyHandler([],'tool-proficiencies',"tool")
    },[profSelection])

    useEffect(()=>{
        traitHandler('traits')
    },[traitSelection])

    useEffect(()=>{
        abilityScoreHandler("-val")
    },[baseAbilitiesSelection, raceAbilityBonus])

    function dataController(){
        setCharacter(charData)
    }

    function proficiencyHandler(masterArr=[], keyName, keyWord=""){
        let list = []
        let filtered = []
        for(let attribute in profSelection){
            if(profSelection[attribute]){
                if(keyWord===""){
                    filtered = profSelection[attribute].filter((el)=>(masterArr.includes(el.index)))
                }else{
                    filtered = profSelection[attribute].filter((el)=>(el.index.includes(keyWord)))
                    //console.log(filtered)
                }

                list = [...list, ...filtered]
            }
        }
        setCharacter(prevState => ({...prevState,...{[keyName]:list}}))
    }

    function traitHandler(keyName){
        let list = []
        let filtered = []
        if(traitSelection){
            for(let attribute in traitSelection){
                if(traitSelection[attribute]){
                    filtered = [...traitSelection[attribute]]
                    list = [...list, ...filtered]
                }
            }
            setCharacter(prevState => ({...prevState,...{[keyName]:list}}))
        }
    }

    function abilityScoreHandler(keyName){
        let baseAbilityScores = baseAbilitiesSelection

        for(let stat in baseAbilityScores){
            let value = 0
            value = baseAbilityScores[stat] + racialAbilityScoreHandler(stat)
            //console.log(value)
            setCharacter(prevState => ({...prevState, [`${stat}${keyName}`]:value}))
        }
    }
    function racialAbilityScoreHandler(stat){

        //console.log(raceAbilityBonus)
        if (raceAbilityBonus){
            let abilityBonuses = [...raceAbilityBonus]
            let raceBonus = abilityBonuses.find((el)=> {
                if(hasKey(el,'ability_score') && hasKey(el, 'bonus')){
                    return (el['ability_score'].index === stat)
                }
            })
            if(hasKey(raceBonus,'bonus')){
                return raceBonus['bonus']
            }else{
                return 0
            }
        }
    }

    function savingThrowHandler(keyName){

    }

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
                             profSelection={profSelection}
                             setProfSelection={setProfSelection}
                             modifierValues={modifierValues}
                             setModifierValues={setModifierValues}
                             levelProficiency={levelProficiency}
                             setLevelProficiency={setLevelProficiency}
                             raceAbilityBonus={raceAbilityBonus}
                             setRaceAbilityBonus={setRaceAbilityBonus}
                             traitSelection = {traitSelection}
                             setTraitSelection = {setTraitSelection}
                             savingThrows = {savingThrows}
                             setSavingThrows = {setSavingThrows}
                             character={character}
                    />
                </Route>
                <Route path={"/home"} exact>
                    <Home />
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
