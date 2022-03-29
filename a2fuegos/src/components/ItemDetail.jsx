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
            <img className="imagenDetail" src={item.imagen} alt={item.nombre} />
        </div>
        <div className="video-info">
            <h3 className="opaco">DETALLE COMPLETO.</h3>
            <br/>
            <h4 className="colorTexto">{item.nombre}</h4>
            <br/>
            <p className="enmarcado">Descripcion:</p><p>{item.descripcion}</p>
            <p className="enmarcado">Precio: $ {item.precio}</p>
            <p className="enmarcado">Stock: {item.stock}</p>
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
