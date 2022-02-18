import ItemList from "./ItemList";
import { useState, useEffect } from 'react';
import { customFetch } from './customFetch';
import { useParams } from "react-router-dom";
import products from './products';

const ItemListContainer = () => {
    const [articulo, setArticulo] = useState([]);
    const {filtro} = useParams();
    console.log(filtro);

    useEffect(() => {
        if (filtro === undefined) {
            customFetch(2000, products)
            .then(respuesta => setArticulo(respuesta))
            .catch(error => console.log(error))
        } else {
            customFetch(2000, products.filter(condicion => condicion.filtro === parseInt(filtro)))
            .then(respuesta => setArticulo(respuesta))
            .catch(error => console.log(error))
        }
        }, [filtro]);
    
return (
    <>
        {' '}
    <ItemList articulo={articulo} />{' '}
    </>
);
};

export default ItemListContainer;






/*
import ItemList from "./ItemList";
import { useState, useEffect } from 'react';
import { customFetch } from './customFetch';
import { useParams } from "react-router-dom";
import products from './products';

const ItemListContainer = () => {
    const [articulo, setArticulo] = useState([]);
    const {filtro} = useParams();
    console.log(filtro);

    useEffect(() => {
        if (filtro === undefined) {
            customFetch(2000, products)
            .then(respuesta => setArticulo(respuesta))
            .catch(error => console.log(error))
        } else {
            customFetch(2000, products.filter(articulo => articulo.filtro === parseInt(filtro)))
            .then(respuesta => setArticulo(respuesta))
            .catch(error => console.log(error))
        }
        }, [filtro]);
    
return (
    <>
        {' '}
    <ItemList articulo={articulo} />{' '}
    </>
)
}

export default ItemListContainer;
*/

/*
import ItemList from "./ItemList";
import { useEffect, useState } from 'react';
import { customFetch } from "./customFetch";
import { useParams } from "react-router-dom";
const {products} = require('./products');

const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {filtro} = useParams();

    console.log(filtro);

    useEffect(() => {
        if (filtro === undefined) {
        customFetch(2000, products)
            .then(respuesta => setProductos(respuesta))
            .then(() => setLoading(false))
            .catch(error => console.log(error))
        }else {
            customFetch(2000, products.filter(articulo => articulo.filtro === filtro))
            .then(respuesta => setProductos(respuesta))
            .then(() => setLoading(false))
            .catch(error => console.log(error))
        }
    },[filtro]) 



    
    
return (
    <>
    <section>
        <h3>{props.greeting}</h3>
        {loading ? <img src='https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif' alt='Buscando novedades...'></img> : 
        <ItemList items={productos}></ItemList>}
    </section>
    </>
)
};

export default ItemListContainer;
*/




/*

import ItemList from "./ItemList";

const ItemListContainer = () => {
    
return (
    <div className="video-container">
    <ItemList />
    </div>
)
};

export default ItemListContainer;

*/