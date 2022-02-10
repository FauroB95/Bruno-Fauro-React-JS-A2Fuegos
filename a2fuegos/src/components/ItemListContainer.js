import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


const ItemListContainer = (props) => {

  //creo una sola función que recibirá el tipo, la función setPuntaje, puntaje y stock
  //y se la paso a ItemCount como prop
  // ¿ para qué me sirve el stock ? Para limitar y evitar que se sumen más que los que tengo
  // limito como mínumo 0 porque no se puede comprar una cantidad negativa
  // (todo pensando en ecommerce y en la consigna)
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

export default ItemListContainer;


/*
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    
    return(
        <div className="video-container">
            <div className="video-image">
                <img src= {props.imagen} alt= {props.nombre}/>
            </div>
            <div className="video-info">
                <h3>Nombre: {props.nombre}</h3>
                <ItemCount />
                <p>Posicion: {props.key}</p>
                <p>Descripcion: {props.descripcion}</p>
                <h4>Stock: {props.stock}</h4>
                <p>Precio: {props.precio}</p>
            </div>
        </div>
    );
}


export default ItemListContainer;
*/