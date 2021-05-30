import axios from "axios";

export async function getListData(url, key=""){
    try{
        let res = await axios.get(url)
        //console.log(res)
        if(key===""){
            let data = res.data
            return data
        }else{
            let data = res.data[key]
            return data
        }
    }catch (err){
        console.log(err)
        return []
    }
}