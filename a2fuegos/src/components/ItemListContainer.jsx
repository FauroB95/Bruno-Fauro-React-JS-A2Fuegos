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
        }, [articulo]);

return (<>
    <ItemList items = {articulo} />
    </>
);
};

export default ItemListContainer;
