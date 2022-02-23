import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";


const ItemDetail = ({ item }) => {
    const [ingresoStock, setIngresoStock] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (cantidadItem) => {
            alert("Hola, se agregaron " + cantidadItem + " items.");
            setIngresoStock(cantidadItem);
            test.addToCart(item, cantidadItem);
        }
    
    return (    
        <>
        {
            item && item.precio
            ?
        <div className="video-container">
        <div className="video-image">
            <img src={item.imagen} alt={item.nombre} />
        </div>
        <div className="video-info">
            <h3 className="colorTexto">DETALLE COMPLETO DEL PRODUCTO</h3>
            <h3>Nombre: {item.nombre}</h3>
            <p>Descripcion: {item.descripcion}</p>
            <p>Precio: {item.precio}</p>
            <p>Stock: {item.stock}</p>
            <Link to= {`/item/${item.precio}`}></Link>
            {
                ingresoStock === 0
            ? <ItemCount stock={item.stock} initial={ingresoStock} onAdd={onAdd} />
            : <Link to='/Cart'><button className="agregarCarrito">Ir a pagar</button></Link>
            }
        </div>
        
        </div>
        : <p>Cargando ....</p>
        }
        </>
    );
}

export default ItemDetail;


/*
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";


const ItemDetail = ({ item }) => {
    const [ingresoStock, setIngresoStock] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (cantidadItem) => {
            alert("Hola, se agregaron " + cantidadItem + " items.");
            setIngresoStock(cantidadItem);
            test.addToCart(item, cantidadItem);
        }
    
    return (    
        <>
        {
            item && item.precio
            ?
        <div className="video-container">
        <div className="video-image">
            <img src={item.imagen} alt={item.nombre} />
        </div>
        <div className="video-info">
            <h3 className="colorTexto">DETALLE COMPLETO DEL PRODUCTO</h3>
            <h3>Nombre: {item.nombre}</h3>
            <p>Descripcion: {item.descripcion}</p>
            <p>Precio: {item.precio}</p>
            <p>Stock: {item.stock}</p>
            <Link to= {`/item/${item.precio}`}></Link>
            {
                ingresoStock === 0
            ? <ItemCount stock={item.stock} initial={ingresoStock} onAdd={onAdd} />
            : <Link to='/Cart'><button className="agregarCarrito">Ir a pagar</button></Link>
            }
        </div>
        
        </div>
        : <p>Cargando ....</p>
        }
        </>
    );
}

export default ItemDetail;

*/

/*
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState } from "react";
import Search from "./Search";


const ItemDetail = ({ item }) => {


    const onAdd = (tipo, setPuntaje, puntaje, stock) => {
        if (tipo === "suma" && puntaje < stock) setPuntaje(puntaje + 1);
        if (tipo === "resta" && puntaje > 0) setPuntaje(puntaje - 1);
    };
    
    return (    
        <>
        {
            item && item.precio
            ?
        <div className="video-container">
        <div className="video-image">
            <img src={item.imagen} alt={item.nombre} />
        </div>
        <div className="video-info">
            <h3 className="colorTexto">DETALLE COMPLETO DEL PRODUCTO</h3>
            <h3>Nombre: {item.nombre}</h3>
            <p>Descripcion: {item.descripcion}</p>
            <p>Precio: {item.precio}</p>
            <p>Stock: {item.stock}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd} onClick />
            <Search />
            <Link to= {`/item/${item.precio}`}></Link>
        </div>
        
        </div>
        : <p>Cargando ....</p>
        }
        </>
    );
}

export default ItemDetail;
*/




/*
    const [itemCount, setItemCount] = useState(0);

const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
    }
*/