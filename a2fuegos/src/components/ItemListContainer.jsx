import ItemList from "./ItemList";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/FirestoreFetch";

const ItemListContainer = () => {
    const [articulo, setArticulo] = useState([]);
    const { filtro } = useParams();

    useEffect(() => {
        firestoreFetch (filtro)
            .then(result => setArticulo(result))
            .catch(error => console.log(error));
        }, [filtro]);

        useEffect(() => {
            return (() => {
                setArticulo([]);
            })
        }, []);

return (<>
    <ItemList items = {articulo} />
    </>
);
}

export default ItemListContainer;
