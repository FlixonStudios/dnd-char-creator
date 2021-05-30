export function hasKey(obj, key){
    let insideObject = false

    if (Object.entries(obj).length===0 ||obj.constructor!==Object){

    }else{
        for(let i in obj){
            if (i===key){
                insideObject = true
            }
        }
    }
    return insideObject
}