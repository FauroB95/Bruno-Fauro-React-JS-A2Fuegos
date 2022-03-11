import ItemList from "./ItemList";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import db from "./FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

//const { products } = require ("./products");


const ItemListContainer = () => {
    const [articulo, setArticulo] = useState([]);
    const { filtro } = useParams();

    useEffect(() => {
        const firestoreFetch = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        return querySnapshot.docs.map ((document) => ({
            id: document.id,
            ...document.data()
        }));
    };
    firestoreFetch()
        .then((result) => {
            if (filtro) {
                setArticulo(
                    result.filter((item) => item.filtro.toString() === filtro)
                );
            } else {
                setArticulo(result);
            }
        })
        .catch(error => console.log(error))
}, [filtro]);

return (<>
    <ItemList items = {articulo} />
    </>
);
};

export default ItemListContainer;

/*
import ItemList from "./ItemList";
import { useState, useEffect } from 'react';
import { customFetch } from './customFetch';
import { useParams } from "react-router-dom";
//const { products } = require ("./products");
import products from "./products";

const ItemListContainer = () => {
    const [articulo, setArticulo] = useState([]);
    const { filtro } = useParams();

    console.log(filtro);

    useEffect(() => {
        customFetch(2000, products.filter(item => {
            if (filtro === undefined) return item;
            return item.filtro === parseInt(filtro)
        }))
            .then(respuesta => setArticulo(respuesta))
            .catch(error => console.log(error))
        }, [filtro]);

return (<>
    <ItemList items = {articulo} />
    </>
);
};

export default ItemListContainer;
*/


/*
firestoreFetch()
        .then(result => setArticulo(result))
        .catch(error => console.log(error))
}, [filtro]);
*/


