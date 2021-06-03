import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap";
import HomeNav from "./components/general/HomeNav";
import Navigation from "./components/general/Navigation";
import Creator from "./components/main/Creator";
import Home from "./components/main/Home";
import {hasKey} from "./lib/Func";
import Characters from "./components/main/Characters";
import test_img from "./img/female_aumaua_x1_lg - Copy.png"
import banner from "./img/night-sky.jpg"

function App() {
    const modifiers = {
        "str": 0,
        "dex": 0,
        "con": 0,
        "int": 0,
        "wis": 0,
        "cha": 0
    }
    const DICE_ROLL = {
        "str": false,
        "dex": false,
        "con": false,
        "int": false,
        "wis": false,
        "cha": false
    }
    const charData = {
        "name":"",
        "race":"",
        "class":"",
        "level":"",
        "img": "",
        "proficiency":"",
        "ability-scores": {
            "str": 0,
            "dex": 0,
            "con": 0,
            "int": 0,
            "wis": 0,
            "cha": 0,
        },
        "saving-throws":{
            "str": 0,
            "dex": 0,
            "con": 0,
            "int": 0,
            "wis": 0,
            "cha": 0,
        },
        "ability-modifiers":{
            "str": 0,
            "dex": 0,
            "con": 0,
            "int": 0,
            "wis": 0,
            "cha": 0,
        },
        "ability-bonus":[],
        "traits":[],
        "initiative": 0,
        "armor-class": 0,
        "hit-points": 0,
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

    const [character, setCharacter] = useState(charData)
    const [classSelection, setClassSelection] = useState(false)
    const [raceSelection, setRaceSelection] = useState(false)
    const [subRaceSelection, setSubRaceSelection] = useState(false)
    const [raceAbilityBonus, setRaceAbilityBonus] = useState(false)
    const [baseAbilitiesSelection, setBaseAbilitiesSelection] = useState(modifiers)
    const [diceRoll, setDiceRoll] = useState(DICE_ROLL)
    const [levelSelection, setLevelSelection] = useState(false)
    const [levelProficiency, setLevelProficiency] = useState(0)
    const [profSelection, setProfSelection] = useState(false)
    const [modifierValues, setModifierValues] = useState(modifiers)
    const [traitSelection, setTraitSelection] = useState(false)
    const [savingThrows, setSavingThrows] = useState([])
    const [hitDie, setHitDie] = useState(0)
    const [languages, setLanguages] = useState(false)
    const [charImg, setCharImg] = useState(test_img)
    const [charName, setCharName] = useState("")
    const [characterList, setCharacterList] = useState([])


    useEffect(()=>{
        proficiencyHandler([],'skill-proficiencies',"skill-")
        proficiencyHandler(armorProficiencies,'armor-proficiencies')
        proficiencyHandler(weaponProficiencies,'weapon-proficiencies')
        proficiencyHandler([],'tool-proficiencies',"tool")
    },[profSelection])

    useEffect(()=>{
        basicHandler('traits',traitSelection)
    },[traitSelection])

    useEffect(()=>{
        basicHandler('languages', languages)
    },[languages])

    useEffect(()=>{
        abilityScoreHandler("ability-scores")
        racialAbilityBonusHandler()
    },[baseAbilitiesSelection, raceAbilityBonus])

    useEffect(()=>{
        modifierHandler('ability-modifiers')
        calculateInitiative('initiative')
        calculateArmorClass('armor-class')
        savingThrowHandler('saving-throws')
    },[modifierValues])

    useEffect(()=>{
        calculateHitPoints('hit-points')
    },[hitDie, modifierValues, levelSelection])

    useEffect(()=>{
        savingThrowHandler('saving-throws')
    },[savingThrows, levelProficiency])

    useEffect(()=>{
        setCharacter(prevState => ({...prevState,...{['name']:charName}}))
    },[charName])
    useEffect(()=>{
        setCharacter(prevState => ({...prevState,...{['img']:charImg}}))
    },[charImg])
    useEffect(()=>{
        if(levelSelection){
            setCharacter(prevState => ({...prevState,...{['level']:levelSelection}}))
        }
    },[levelSelection])
    useEffect(()=>{
        if(classSelection){
            setCharacter(prevState => ({...prevState,...{['class']:classSelection}}))
        }
    },[classSelection])
    useEffect(()=>{
        if(raceSelection){
            setCharacter(prevState => ({...prevState,...{['race']:raceSelection}}))
        }
    },[raceSelection])
    useEffect(()=>{
        if(levelProficiency){
            setCharacter(prevState => ({...prevState,...{['proficiency']:levelProficiency}}))
        }
    },[levelProficiency])

    function proficiencyHandler(masterArr=[], keyName, keyWord=""){
        let list = []; let filtered = []; let noDuplicate = []
        for(let attribute in profSelection){
            if(profSelection[attribute]){
                if(keyWord===""){
                    filtered = profSelection[attribute].filter((el)=>(masterArr.includes(el.index)))
                }else{
                    filtered = profSelection[attribute].filter((el)=>(el.index.includes(keyWord)))
                }
                noDuplicate = filtered.filter((el)=>{
                    let found = list.findIndex((existing)=>(existing['url']===el['url']))
                    return(found < 0)
                })
                list = [...list, ...noDuplicate]
            }
        }
        setCharacter(prevState => ({...prevState,...{[keyName]:list}}))
    }
    function basicHandler(keyName, attributeObject){
        let list = []
        let filtered = []
        if(attributeObject){
            for(let attribute in attributeObject){
                if(attributeObject[attribute]){
                    filtered = [...attributeObject[attribute]]
                    list = [...list, ...filtered]
                }
            }
            setCharacter(prevState => ({...prevState,...{[keyName]:list}}))
        }
    }
    function abilityScoreHandler(keyName){
        let baseAbilityScores = baseAbilitiesSelection
        let temp = {...character[keyName]}

        for(let stat in baseAbilityScores){
            let value = 0
            value = baseAbilityScores[stat] + racialAbilityScoreHandler(stat)
            temp[stat] = value
            setCharacter(prevState => ({...prevState, ...{[keyName]:temp}}))
        }
    }
    function racialAbilityScoreHandler(stat){
        if (raceAbilityBonus){
            let abilityBonuses = [...raceAbilityBonus]
            let raceBonus = abilityBonuses.find((el)=> {
                if(hasKey(el,'ability_score') && hasKey(el, 'bonus')){
                    return (el['ability_score'].index === stat)
                }else{
                    return []
                }
            })
            if(hasKey(raceBonus,'bonus')){
                return raceBonus['bonus']
            }else{
                return 0
            }
        }
    }
    function racialAbilityBonusHandler(){
        let racialAbilityBonusArr = []
        if(raceAbilityBonus){
            racialAbilityBonusArr = raceAbilityBonus.map((el)=>{
                let temp = {...el['ability_score'],...{['bonus']:el['bonus']}}
                return(temp)
            })
            setCharacter(prevState => ({...prevState, ...{['ability-bonus']:racialAbilityBonusArr}}))
        }
    }
    function savingThrowHandler(keyName){
        if(modifierValues){
            let modifierObj = {...modifierValues}
            let savingThrowsArr = [...savingThrows]

            for(let savingThrowBonus of savingThrowsArr){
                let stat = savingThrowBonus.index
                modifierObj[stat] = modifierObj[stat] + levelProficiency
            }
            setCharacter(prevState => ({...prevState,...{['saving-throw-bonus']:savingThrowsArr}}))
            setCharacter(prevState => ({...prevState, ...{[keyName]:modifierObj}}))
        }
    }
    function calculateInitiative(keyName){
        let base
        if(modifierValues['dex'] || modifierValues['dex'] === 0){
            base = modifierValues['dex']
        }else{
            base = 0
        }
        let finalValue = base
        setCharacter(prevState => ({...prevState, ...{[keyName]:finalValue}}))
    }
    function calculateArmorClass(keyName){
        let base
        if(modifierValues['dex'] || modifierValues['dex'] === 0){
            base = modifierValues['dex']
        }else{
            base = 0
        }
        let finalValue = base
        setCharacter(prevState => ({...prevState, ...{[keyName]:finalValue}}))
    }
    function calculateHitPoints(keyName){
        let base = 0; let levelGain = 0
        if(classSelection){
            base = hitDie
        }
        let modifier = modifierValues['con']
        if (levelSelection || levelSelection===undefined){
            for(let i = 1; i < levelSelection; i++){
                levelGain += (Math.floor(Math.random()*10)+1 + modifier)
            }
        }

        let finalValue = base + modifier + levelGain
        setCharacter(prevState => ({...prevState, ...{[keyName]:finalValue}}))
    }
    function modifierHandler(keyName){
        let modifiers = {...modifierValues}
        setCharacter(prevState => ({...prevState, ...{[keyName]:modifiers}}))
    }

  return (
    <BrowserRouter>
        <div style={{backgroundColor:`rgba(71, 20, 20, 1.0)`}}>
            <div style={{
                backgroundImage:`url(${banner})`,
                backgroundSize:`cover`,
                backgroundPosition:`center`,
                backgroundColor:`rgba(0,0,0,0.7)`,
                height: "100%",
            }}>

                <Container >
                    <HomeNav/>
                    <Navigation/>
                </Container>
            </div>
            <div style={{backgroundColor:`rgba(0,0,0,0.7)`, height:"10px"}}>

            </div>
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
                             traitSelection={traitSelection}
                             setTraitSelection={setTraitSelection}
                             savingThrows={savingThrows}
                             setSavingThrows={setSavingThrows}
                             hitDie={hitDie}
                             setHitDie={setHitDie}
                             languages={languages}
                             setLanguages={setLanguages}
                             setCharImg={setCharImg}
                             charImg={charImg}
                             character={character}
                             setCharName={setCharName}
                             setCharacterList={setCharacterList}
                             diceRoll={diceRoll}
                             setDiceRoll={setDiceRoll}
                    />
                </Route>
                <Route path={"/characters"} exact>
                    <Characters characterList={characterList}/>
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
