import axios from "axios";

export async function setListData(url, setList, setStatus){
    try{
        let res = await axios.get(url)
        let data = res.data.results
        setStatus(true)
        setList(data)
        return data
    }catch (err){
        console.log(err)
        return []
    }
}
export async function getListData(url, key){

    try{
        let res = await axios.get(url)
        //console.log(res)
        let data = res.data[key]
        console.log(data)
        return data
    }catch (err){
        console.log(err)
        return []
    }
}