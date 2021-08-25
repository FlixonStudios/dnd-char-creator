import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export async function testDatabase(){
    try {
        console.log("attempting route");
        let res = await axios.get('/api/connect')
        console.log("post route");
        console.log(res);
    } catch (e) {
        console.log(e);
    }    

}


