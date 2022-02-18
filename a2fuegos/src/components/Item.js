import ItemCount from "./ItemCount";
import products from "./products";

const Item = (props) => {

const onAdd = (tipo, setPuntaje, puntaje, stock) => {
    if (tipo === "suma" && puntaje < stock) setPuntaje(puntaje + 1);
    if (tipo === "resta" && puntaje > 0) setPuntaje(puntaje - 1);
};

return (
    <div>
    {products.map (props => 
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


















/*
import ItemCount from "./ItemCount";

const Item = (props) => {

const onAdd = (tipo, setPuntaje, puntaje, stock) => {
    if (tipo === "suma" && puntaje < stock) setPuntaje(puntaje + 1);
    if (tipo === "resta" && puntaje > 0) setPuntaje(puntaje - 1);
};

return (
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
);
};

export default Item;

*/




/*
import ItemCount from "./ItemCount";
const {products} = require('./products');

const Item = (props) => {

const onAdd = (tipo, setPuntaje, puntaje, stock) => {
    if (tipo === "suma" && puntaje < stock) setPuntaje(puntaje + 1);
    if (tipo === "resta" && puntaje > 0) setPuntaje(puntaje - 1);
};

return (
    <div>
    {products.map (props => 
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
*/
