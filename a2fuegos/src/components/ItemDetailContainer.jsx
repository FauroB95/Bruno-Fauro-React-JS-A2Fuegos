import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import db from '../utils/FirebaseConfig';
import { query, getDocs, collection } from '@firebase/firestore';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { precio } = useParams();

    const getItem = async (precio) => {
        const q = query(collection(db, 'products'));
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
        }));
    const array = dataFromFirestore.find(
        (item) => item.precio.toString() === precio
        );
        console.log(array);
        setDato(array);
    };

    useEffect(() => {
        try {
            getItem(precio);
        } catch (err) {
            console.log('error');
        }
    }, [precio]);

    return (
        <div className='video-container'>
        <ItemDetail item={dato} />
        </div>
    );
};

export default ItemDetailContainer;
