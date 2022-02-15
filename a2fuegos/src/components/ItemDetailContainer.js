import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    return (
        <div className="video-container">
        <ItemDetail />
        </div>
    )
    };

export default ItemDetailContainer;





/*
import { useEffect, useState } from 'react';
import { customFetch } from "./customFetch";
import ItemDetail from './ItemDetail';
const {products} = require('./products');

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        customFetch(2000, products[8])
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))
    },[]) 

    return(
            <ItemDetail
                Item={productos}
            />
        )
}


export default ItemDetailContainer;
*/