import React from 'react';

export function DisplayData({list, keyName}) {

    function renderList(){
        if (list!==undefined){
            let str = list.map((el)=>(el[keyName])).join(", ")
            return (
                <p>{str}</p>
            )
        }else{
            return (
                <p>{""}</p>
            )
        }
    }
    return (
        <>
            {
                renderList()
            }
        </>
    );
}

export default DisplayData;