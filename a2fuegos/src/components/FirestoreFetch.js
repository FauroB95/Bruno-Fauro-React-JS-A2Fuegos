/*
import { doc, getDoc } from "firebase/firestore";
import db from "./FirebaseConfig"

export const firestoreFetchOne = async (precio) => {
    const docRef = doc(db, "products", precio);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
          id: precio,
          ...docSnap.data()
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}
*/