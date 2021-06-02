import React, {useEffect, useState} from 'react';
import GroupOfSelection from "../../lib/GroupOfSelection";
import {hasKey} from "../../lib/Func";

function SelectionController({title="", attributeUnder, masterData, selection, numOfChoices,
                                 categoryToSend, setFunction, optionKey="", closedTag="",
                                    optionFromKey='from', optionChooseKey='choose'
}) {

    const [list, setList] = useState([])

    useEffect(()=>{
        setList(masterData)
    },[masterData])



    function getOptions(){
        console.log(numOfChoices)
        return(
            <>
                {
                    numOfChoices > 0 ?
                        <GroupOfSelection list={list}
                                          tagDisplay={closedTag}
                                          numOfChoices={numOfChoices}
                                          defaultChoices={[]}
                                          title={title}
                                          tag={attributeUnder}
                                          setReturn={setFunction}
                        /> : <></>
                }
            </>
        )
    }
    function getDefault(){
        let status = false
        console.log("Get Default Entered")
        console.log(list)
        return(
            <>

                {list ?
                    <GroupOfSelection list={[]}
                                   tagDisplay={closedTag}
                                   tag={attributeUnder}
                                   numOfChoices={numOfChoices}
                                   defaultChoices={list}
                                   title={title}
                                   setReturn={setFunction}
                />:<></>
                }
            </>
        )
    }
    function renderChoices(){
        if(selection){
            return getOptions()
        }else{
            return getDefault()
        }
    }

    return (
        <>
            {
                renderChoices()
            }
        </>
    );
}

export default SelectionController;