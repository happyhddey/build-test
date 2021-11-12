import { firebaseApp } from "./initialize"
import { getFirestore, collection, addDoc } from "firebase/firestore"

const db = getFirestore(firebaseApp);

export const updateDb = async (dbName, data) => {
    try{
        const docRef = await addDoc(collection(db, dbName), data);
        console.log(`Document written with ID: ${docRef.id}`)
    } catch(e){
        console.log("Update Failed..", e)
    }
}