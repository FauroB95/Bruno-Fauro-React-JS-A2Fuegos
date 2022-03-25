import db from './FirebaseConfig';
import { doc, query, collection, getDocs, where } from '@firebase/firestore';

export const firestoreFetch = async (filtro) => {
  let q = [];
  if (filtro) {
    q = query(
      collection(db, 'products'),
      where('filtro', '==', parseInt(filtro))
    );
  } else {
    q = query(collection(db, 'products'));
  }
  const querySnapshot = await getDocs(q);
  q = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return q;
};

export const firestoreFetchOne = async (precio) => {
  const docRef = doc(db, 'products', precio);
  const docSnap = await getDocs(docRef);
  console.log(docSnap);

  if (docSnap.exists()) {
    return {
      id: precio,
      ...docSnap.data(),
    };
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
};
