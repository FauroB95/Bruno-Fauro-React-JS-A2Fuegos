import Detail from "./Detail";

const ItemDetail = ({ articulo }) => {
    console.log(articulo.imagen);
    return (
        <Detail
            posicion={articulo.key}
            imagen={articulo.imagen}
            nombre={articulo.nombre}
            descripcion={articulo.descripcion}
            stock={articulo.stock}
            precio={articulo.precio}
        />
    );
};

export default ItemDetail;































/*
import { useEffect, useState } from 'react';
import { customFetch } from "./customFetch";
import Detail from "./Detail";
const {products} = require('./products');

const ItemDetail = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        customFetch(2000, products)
            .then(respuesta => setProductos(respuesta))
            .catch(error => console.log(error))
    },[]) 

    return(
        <div>
        {productos.map(articulo => {
            return (
                <div className="item-details">
            <Detail
                posicion={articulo.key} 
                foto={articulo.imagen}
                nombre={articulo.nombre}
                descripcion={articulo.descripcion}
                stock={articulo.stock}
                precio={articulo.precio}
        ></Detail>
    </div>
            );
        })
    }
    </div>
    )
}
    
    


export default ItemDetail;

*/


/*
return(
        <div>
        {productos.map(articulo => {
            return (
                <div className="item-details">
            <Detail
                posicion={articulo.key} 
                foto={articulo.imagen}
                nombre={articulo.nombre}
                descripcion={articulo.descripcion}
                stock={articulo.stock}
                precio={articulo.precio}
        ></Detail>
    </div>
            );
        })
    }
    </div>
    )
}
*/


/*
import ItemCount from "./ItemCount";
const {products} = require('./products');

const ItemDetail = (props) => {

const onAdd = (tipo, setPuntaje, puntaje, stock) => {
    if (tipo === "suma" && puntaje < stock) setPuntaje(puntaje + 1);
    if (tipo === "resta" && puntaje > 0) setPuntaje(puntaje - 1);
};

return (
    <div>
    {products.map(props => 
    <div className="video-container">
    <div className="video-info">
        <h3>Nombre: {props.nombre}</h3>
        <ItemCount stock={props.stock} initial={1} onAdd={onAdd} />
        <button>NUEVOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</button>
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

export default ItemDetail;
*/