import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { firestoreFetchOne } from './FirestoreFetch';


const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { precio } = useParams ();

    useEffect(() => {
        console.log(precio)
        firestoreFetchOne(precio)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [precio]);
    console.log(dato)
    
    return (
        <div className='video-container'>

            <ItemDetail item={dato} />
            
        </div>
        );
    };
    
export default ItemDetailContainer;



















/*
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
*/


/*
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { customFetch } from "./customFetch";
import ItemDetail from './ItemDetail';
import db from "./FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { FirestoreFetchOne } from './FirestoreFetchOne';
//const { products } = require ("./products");


const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { precio } = useParams ();

    useEffect(() => {
        FirestoreFetchOne(precio)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
        
    return (
        <div className='video-container'>

            <ItemDetail item={dato} />
            
        </div>
        );
    };
    
export default ItemDetailContainer;
*/

/*
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
*/

/*
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { customFetch } from "./customFetch";
import ItemDetail from './ItemDetail';
//const { products } = require ("./products");
import products from './products';
import { firestoreFetchOne } from './FirestoreFetch';


const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { precio } = useParams ();

    useEffect(() => {
        firestoreFetchOne (precio)
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
*/
