import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Item = ({ foto, apodo, leyenda, monto }) => {

return (
    <>
    <div className="card col-sm-4 tarjeta">
        <img src={foto} className="card-img-top" alt={apodo} />
    <div className="card-body colorCard">
        <h5 className="card-title">{apodo}</h5>
        <p className="card-text">{leyenda}</p>
        <Link to={`/item/${monto}`} className="btn btn-primary posicionBoton">Ver Detalles</Link>
    </div>
    </div>
    </>
);
};

export default Item;
