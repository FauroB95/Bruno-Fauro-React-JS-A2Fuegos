import db from "./FirebaseConfig";
import { doc, query, collection, getDocs, where } from '@firebase/firestore';

export const firestoreFetch = async (filtro) => {
    let q;
    if (filtro) {
        const categoryDocRef = doc(db, "products", filtro);
        q = query(
            collection(db, "products"),
            where("category", "==", categoryDocRef)
        );
    } else {
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchOne = async (precio) => {
  const q = query(collection(db, "products"), where("precio", "==", precio));

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  return doc.data();
});
}
    /*const docRef = doc(db, "products", precio);
    const docSnap = await getDoc(docRef);
    console.log(docSnap)
    
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


//import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
//import { doc, getDoc } from "firebase/firestore";
//import db from './firebaseConfig';
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