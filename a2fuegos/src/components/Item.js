import ItemCount from "./ItemCount";
import { useEffect, useState } from 'react';
import { customFetch } from "./customFetch";
const {products} = require('./products');

const Item = (props) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))
    },[]) 

const onAdd = (tipo, setPuntaje, puntaje, stock) => {
    if (tipo === "suma" && puntaje < stock) setPuntaje(puntaje + 1);
    if (tipo === "resta" && puntaje > 0) setPuntaje(puntaje - 1);
};

return (
    <div>
    {productos.map (props => 
    <div className="video-container">
    <div className="video-image">
        <img src={props.imagen} alt={props.nombre} />
    </div>
    <div className="video-info">
        <h3>Nombre: {props.nombre}</h3>
        <ItemCount stock={props.stock} initial={1} onAdd={onAdd} />
        <p>Posicion: {props.key}</p>
        <p>Descripcion: {props.descripcion}</p>
        <h4>Stock: {props.stock}</h4>
        <p>Precio: {props.precio}</p>
    </div>
    </div>
    )}
    </div>
);
};

export default Item;
