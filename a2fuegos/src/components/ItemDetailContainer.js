import { useState, useEffect } from 'react';
import { customFetch } from "./customFetch";
import ItemDetail from './ItemDetail';
import products from './products';

const ItemDetailContainer = () => {
    const [articulo, setArticulo] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then((respuesta) => {
                if (respuesta.length > 0) {
                    setArticulo(respuesta[8]);
                }
            })
            .catch((error) => console.log(error));
    }, []) 

    return (
        <div className='video-container'>
            {' '}
            <ItemDetail articulo={articulo} />{' '}
        </div>
        );
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