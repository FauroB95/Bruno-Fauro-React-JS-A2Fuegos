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
