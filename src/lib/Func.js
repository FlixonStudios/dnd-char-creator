// import firebase from "./firebase"
import { v4 as uuidv4 } from 'uuid';
// const db = firebase.firestore()
const usersColl = "users"
const accountInfoDoc = "account-info"

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

// export function getUsersFromFirebase(callback, loading){
//     loading(true)
//     db.collection(usersColl).onSnapshot(querySnapshot => {
//         let users = []
//         //doc.id
//         querySnapshot.forEach(doc => {
//             console.log(doc.data())
//             users.push({...doc.data(), id: doc.id})
//         })
//
//         callback(users)
//         loading(false)
//     })
//
// }
//
//
// export function getUserFromFirebase(id, success, error){
//     db.collection(usersColl).doc(accountInfoDoc).get().then(doc => {
//         if(doc.exists){
//             //success({...doc.data(), id: doc.id})
//             console.log(doc.data())
//         }else{
//             //error(false)
//         }
//     })
// }
//
// export function addUserToFirebase(user, callback){
//     let temp ={
//         uuid: uuidv4(),
//         username : user.username,
//         password : user.password,
//     }
//     db.collection(usersColl).add(temp)
//         .then(doc => {
//             callback({type: "success", msg:"User Added"})
//         }).catch(e => {
//         callback({type: "danger", msg:"User Not Added"})
//     })
// }