export function hasKey(obj, key){
    let insideObject = false
    if(obj===undefined||obj===null){
        return insideObject
    }
    if(obj.constructor!==Object){
        return insideObject
    }else if(Object.entries(obj).length===0){
        return insideObject
    }else{
        for(let i in obj){
            if (i===key){
                insideObject = true
            }
        }
        return insideObject
    }

}