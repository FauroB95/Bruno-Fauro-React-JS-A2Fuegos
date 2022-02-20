import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { customFetch } from "./customFetch";
import ItemDetail from './ItemDetail';
//const { products } = require ("./products");
import products from './products';


const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { precio } = useParams ();

    useEffect(() => {
        customFetch(2000, products.find (item => item.precio === parseInt(precio)))
            .then(respuesta => setDato(respuesta))
            .catch(error => console.log(error));
    }, []) 
    
    return (
        <div className='video-container'>

            <ItemDetail item={dato} />
            
        </div>
        );
    };
    
export default ItemDetailContainer;
