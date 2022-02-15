const Detail = (props) => {

return (
    <div className="video-container">
    <div className="video-image">
        <img src={props.imagen} alt={props.nombre} />
    </div>
    <div className="video-info">
        <h3 className="colorTexto">DETALLE COMPLETO DEL PRODUCTO</h3>
        <h3>Nombre: {props.nombre}</h3>
        <p>Descripcion: {props.descripcion}</p>
        <p>Precio: {props.precio}</p>
    </div>
    </div>
    );
}

export default Detail;

/*
return (
    <div>
    {products.map (props => 
    <div className="video-container">
    <div className="video-image">
        <img src={props.imagen} alt={props.nombre} />
    </div>
    <div className="video-info">
        <h3 className="colorTexto">DETALLE COMPLETO DEL PRODUCTO</h3>
        <h3>Nombre: {props.nombre}</h3>
        <p>Descripcion: {props.descripcion}</p>
        <p>Precio: {props.precio}</p>
    </div>
    </div>
    )}
    </div>
);
};
*/