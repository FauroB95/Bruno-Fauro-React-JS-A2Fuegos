import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
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
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <Link to= {`/item/${item.precio}`}></Link>
        </div>
        </div>
        : <p>Cargando ....</p>
        }
        </>
    );
}

export default ItemDetail;
