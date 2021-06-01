import React from 'react';

function DisplayData({list, keyName}) {

    function renderList(){
        if (list!==undefined){
            let str = list.map((el)=>(el[keyName])).join()
            return str
        }else{
            return ""
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