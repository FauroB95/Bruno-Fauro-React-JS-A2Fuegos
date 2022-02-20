import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Item = ({ key, foto, apodo, leyenda, cantidad, seccion, monto }) => {

return (
    <>
    <div className="card col-sm-4">
        <img src={foto} className="card-img-top" alt={apodo} />
    <div className="card-body">
        <h5 className="card-title">{apodo}</h5>
        <p className="card-text">{leyenda}</p>
        <p>Precio: {monto}</p>
        <Link to={`/item/${monto}`} class="btn btn-primary">Ver Stock</Link>
    </div>
    </div>
    </>
);
};

export default Item;
